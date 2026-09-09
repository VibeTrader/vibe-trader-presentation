#!/usr/bin/env node
import { readFile, writeFile, mkdir, chmod } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { createInterface } from 'node:readline/promises';
import { chromium } from 'playwright';
import { PDFDocument, PDFName, PDFString, PDFArray, PDFDict } from 'pdf-lib';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { values } = parseArgs({ options: {
  'base-url': { type: 'string', default: 'http://localhost:3000' },
  output: { type: 'string', default: 'output/pdf/vibetrader-presentation.pdf' },
  auth: { type: 'string', default: '.playwright-mcp/pdf-auth.json' },
  login: { type: 'boolean', default: false },
  'video-time': { type: 'string', default: '2' },
  'settle-ms': { type: 'string', default: '2500' },
  help: { type: 'boolean', short: 'h' },
} });
if (values.help) {
  console.log(`Export all configured slides and append the research page.

  npm run export:pdf -- --login
  npm run export:pdf -- --base-url https://your-site.example

Options:
  --login          Open Chromium for sign-in, save session, then export
  --auth PATH      Private Playwright session file (default .playwright-mcp/pdf-auth.json)
  --base-url URL   Running presentation (default http://localhost:3000)
  --output PATH    Output PDF (default output/pdf/vibetrader-presentation.pdf)
  --video-time N   Video still-frame time in seconds (default 2)
  --settle-ms N    Animation settling time per slide (default 2500)

Run the app first. Install Chromium with: npx playwright install chromium
PDFs contain video stills, clickable FAQ destinations, and research/source links.`);
  process.exit(0);
}
const base = new URL(values['base-url']);
if (!['http:', 'https:'].includes(base.protocol)) throw new Error('Base URL must use HTTP or HTTPS.');
const videoTime = Number(values['video-time']);
const settleMs = Number(values['settle-ms']);
if (![videoTime, settleMs].every(n => Number.isFinite(n) && n >= 0)) throw new Error('Video time and settle time must be nonnegative numbers.');
const output = resolve(root, values.output);
const authFile = resolve(root, values.auth);
const config = await readFile(resolve(root, 'src/config/presentation.ts'), 'utf8');
const first = Number(config.match(/firstSlide:\s*(\d+)/)?.[1]);
const last = Number(config.match(/lastSlide:\s*(\d+)/)?.[1]);
if (!first || !last || first > last) throw new Error('Cannot read slide range from presentation config.');
const researchPath = '/research/trader-challenges';
const pdf = await PDFDocument.create();
const destinations = new Map();
const pendingLinks = [];
let browser;

try {
  browser = await chromium.launch({ channel: 'chromium', headless: !values.login });
  let storageState;
  try { storageState = JSON.parse(await readFile(authFile, 'utf8')); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1, storageState });
  const page = await context.newPage();
  page.setDefaultTimeout(30000);
  await page.emulateMedia({ media: 'screen' });

  if (values.login) {
    await page.goto(new URL(`/presentation/${first}`, base).href);
    await page.bringToFront();
    const terminal = createInterface({ input: process.stdin, output: process.stdout });
    try { await terminal.question('Sign in in the browser. Once the presentation is visible, press Enter here. '); }
    finally { terminal.close(); }
    // A sign-in flow may finish in a different tab. Revisit using the context's shared cookies.
    await page.goto(new URL(`/presentation/${first}`, base).href);
    if (!new URL(page.url()).pathname.startsWith('/presentation/')) throw new Error('Sign-in is incomplete. Run again with --login.');
    await mkdir(dirname(authFile), { recursive: true });
    // Create with restricted permissions before writing session secrets.
    await writeFile(authFile, '', { mode: 0o600 });
    await chmod(authFile, 0o600);
    await context.storageState({ path: authFile });
  }

  async function visit(path) {
    const response = await page.goto(new URL(path, base).href, { waitUntil: 'domcontentloaded' });
    if (!response?.ok()) throw new Error(`Cannot load ${path}: HTTP ${response?.status()}`);
    if (new URL(page.url()).pathname.replace(/\/$/, '') !== path) {
      throw new Error(`Redirected away from ${path}. Run with --login to authenticate.`);
    }
    await page.locator('h1').first().waitFor({ state: 'visible' });
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all(Array.from(document.images, image => image.decode()));
    });
    await page.waitForTimeout(settleMs);
  }

  for (let number = first; number <= last; number++) {
    const path = `/presentation/${number}`;
    console.log(`Capturing slide ${number}/${last}`);
    await visit(path);
    await page.addStyleTag({ content: `
      button[aria-label="Previous slide"], button[aria-label="Next slide"],
      nextjs-portal, [data-nextjs-toast] { visibility: hidden !important; }
      .fixed.bottom-8, .absolute.bottom-8.left-1\\/2 { visibility: hidden !important; }
    ` });
    // Freeze videos at a meaningful frame. A failed video must not silently become a blank slide.
    await page.evaluate(async (seconds) => {
      await Promise.all(Array.from(document.querySelectorAll('video'), video => new Promise((resolve, reject) => {
        const timeout = setTimeout(() => { cleanup(); reject(new Error('Video frame timed out')); }, 15000);
        const cleanup = () => { clearTimeout(timeout); video.removeEventListener('error', fail); video.removeEventListener('seeked', done); video.removeEventListener('loadeddata', seek); };
        const fail = () => { cleanup(); reject(new Error('Video failed to load')); };
        const done = () => { cleanup(); resolve(); };
        const seek = () => {
          video.pause();
          video.controls = false;
          const target = Math.min(seconds, Number.isFinite(video.duration) ? Math.max(0, video.duration - 0.1) : seconds);
          if (Math.abs(video.currentTime - target) < 0.01 && video.readyState >= 2) return done();
          video.addEventListener('seeked', done, { once: true });
          video.currentTime = target;
        };
        video.addEventListener('error', fail, { once: true });
        if (video.error) return fail();
        if (video.readyState >= 2) seek();
        else video.addEventListener('loadeddata', seek, { once: true });
      })));
    }, videoTime);
    if (new URL(page.url()).pathname !== path) throw new Error(`Slide ${number} navigated during capture.`);
    const links = await page.locator('a[href], video').evaluateAll(anchors => anchors.flatMap(a => {
      const r = a.getBoundingClientRect();
      if (!r.width || !r.height || getComputedStyle(a).visibility === 'hidden') return [];
      const href = a instanceof HTMLVideoElement
        ? new URL(new URL(a.currentSrc || a.src).pathname, 'https://pitchdeck.vibetrader.com').href
        : a.href;
      return [{ href, x: r.x, y: r.y, width: r.width, height: r.height }];
    }));
    const png = await page.screenshot({ animations: 'disabled' });
    const image = await pdf.embedPng(png);
    const sheet = pdf.addPage([1440, 810]);
    sheet.drawImage(image, { x: 0, y: 0, width: 1440, height: 810 });
    destinations.set(path, sheet.ref);
    for (const link of links) {
      const annotation = pdf.context.obj({ Type: 'Annot', Subtype: 'Link', Border: [0, 0, 0],
        Rect: [link.x * .75, 810 - (link.y + link.height) * .75, (link.x + link.width) * .75, 810 - link.y * .75],
        A: { S: 'URI', URI: PDFString.of(link.href) } });
      sheet.node.addAnnot(pdf.context.register(annotation));
      pendingLinks.push({ annotation, href: link.href });
    }
  }

  console.log('Appending research and sources');
  await page.setViewportSize({ width: 1000, height: 1200 });
  await visit(researchPath);
  await page.addStyleTag({ content: `
    nextjs-portal, [data-nextjs-toast] { display: none !important; }
    section[aria-labelledby="research-search-title"] { display: none !important; }
    main { padding: 0 !important; min-height: 0 !important; }
    header { margin-top: 20px !important; margin-bottom: 24px !important; }
    section { break-inside: avoid; padding-top: 20px !important; padding-bottom: 20px !important; }
    h2 { break-after: avoid; }
    * { print-color-adjust: exact; }
  ` });
  const research = await PDFDocument.load(await page.pdf({ format: 'A4', printBackground: true, margin: { top: '18mm', bottom: '18mm', left: '18mm', right: '18mm' } }));
  const researchPages = await pdf.copyPages(research, research.getPageIndices());
  for (const sheet of researchPages) pdf.addPage(sheet);
  destinations.set(researchPath, researchPages[0].ref);
  // Native browser printing retains source links. Rewrite local links after all destinations exist.
  for (const sheet of researchPages) {
    const annotations = sheet.node.lookupMaybe(PDFName.of('Annots'), PDFArray);
    if (!annotations) continue;
    for (const item of annotations.asArray()) {
      const annotation = pdf.context.lookup(item, PDFDict);
      const action = annotation.lookupMaybe(PDFName.of('A'), PDFDict);
      const uri = action?.lookup(PDFName.of('URI'));
      if (uri && typeof uri.decodeText === 'function') pendingLinks.push({ annotation, href: uri.decodeText() });
    }
  }
  for (const { annotation, href } of pendingLinks) {
    const url = new URL(href, base);
    const destination = url.origin === base.origin ? destinations.get(url.pathname.replace(/\/$/, '')) : undefined;
    if (destination) {
      annotation.delete(PDFName.of('A'));
      annotation.set(PDFName.of('Dest'), pdf.context.obj([destination, 'Fit']));
    }
  }
  pdf.setTitle('VibeTrader Presentation and Supporting Research');
  pdf.setSubject('Slides, FAQ, and research sources. Click video thumbnails to watch at pitchdeck.vibetrader.com.');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, await pdf.save());
  console.log(`Saved ${pdf.getPageCount()} pages to ${output}`);
} finally {
  await browser?.close();
}
