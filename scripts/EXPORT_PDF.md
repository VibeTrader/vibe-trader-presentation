# Export the presentation to PDF

Start the app in one terminal:

```sh
bun install
bun run dev
```

In another terminal, install the export browser and export:

```sh
npx playwright install chromium
npm run export:pdf -- --login
```

Sign in in the Chromium window. Once the slides are visible, press Enter in the terminal. The script saves a private browser session under `.playwright-mcp/` (already ignored by Git), then exports. Keep that session file private. No authentication bypass is added to the app.

Later exports can reuse the session:

```sh
npm run export:pdf
```

To export the hosted deck:

```sh
npm run export:pdf -- --base-url https://pitchdeck.vibetrader.com --login
```

Each export captures the slides once and writes two PDFs:

| Format | Output | FAQ answers |
|---|---|---|
| `full` | `output/pdf/vibetrader-presentation.pdf` | Every slide is a page. FAQ questions jump to answer pages inside the PDF. |
| `web` | `output/pdf/vibetrader-presentation-web-faq.pdf` | The PDF ends at the FAQ slide. FAQ questions open the answers at `https://pitchdeck.vibetrader.com/presentation/<n>`. |

To write only one of them:

```sh
npm run export:pdf -- --format full
npm run export:pdf -- --format web
```

`--output` and `--web-output` change the two file paths.

The script reads the slide range and `faqSlides` from `src/config/presentation.ts`. The first FAQ slide is the question list. The web format keeps it and leaves out the remaining FAQ slides. Any other link to a left-out slide, such as "View Falcon results", also opens on the website. Slide pages keep their 16:9 layout and are rasterized at 1920 × 1080 to preserve canvas graphics and the presentation layout.

The web-FAQ links use the slide numbers deployed at `pitchdeck.vibetrader.com`, which deploys from `main`. Before writing that PDF, the script opens each hosted FAQ answer and checks that its heading matches the local slide. On a mismatch it prints a warning. Deploy `main`, then export again before sending the PDF.

Research pages are not appended. Research links, footnotes and external sources open on the website.

Videos become still-frame thumbnails at exactly the video element's position and dimensions. Clicking anywhere on a thumbnail opens `https://pitchdeck.vibetrader.com/<asset-name>`, with spaces URL-encoded. The exporter does not upload assets: they must already exist on the hosted site. Video decoding failures stop export rather than silently producing blank thumbnails.

Useful options:

```sh
npm run export:pdf -- --video-time 5 --settle-ms 4000 --output output/pdf/investor-deck.pdf
npm run export:pdf -- --help
```

`--video-time` chooses the video frame in seconds. Shorter videos use their last available frame. `--settle-ms` allows entrance animations to finish before capture. Review the finished PDF after changing animations or slide layouts. Run with `--login` again if the saved session expires.
