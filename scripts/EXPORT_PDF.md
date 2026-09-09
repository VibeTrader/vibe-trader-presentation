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

Default output: `output/pdf/vibetrader-presentation.pdf`.

The script reads the first and last slide numbers from `src/config/presentation.ts`. It captures every slide in order, including the FAQ and its answer slides, and appends the research page as printable A4 pages. Slide pages keep their 16:9 layout. Slide visuals are rasterized at 1920 × 1080 to preserve canvas graphics and the presentation layout; research text remains searchable.

FAQ links to other slides become internal PDF page links. Research links jump to the appended research pages. External sources remain clickable. Search controls are omitted from the static research appendix.

Videos become still-frame thumbnails at exactly the video element's position and dimensions. Clicking anywhere on a thumbnail opens `https://pitchdeck.vibetrader.com/<asset-name>`, with spaces URL-encoded. The exporter does not upload assets: they must already exist on the hosted site. Video decoding failures stop export rather than silently producing blank thumbnails.

Useful options:

```sh
npm run export:pdf -- --video-time 5 --settle-ms 4000 --output output/pdf/investor-deck.pdf
npm run export:pdf -- --help
```

`--video-time` chooses the video frame in seconds. Shorter videos use their last available frame. `--settle-ms` allows entrance animations to finish before capture. Review the finished PDF after changing animations or slide layouts. Run with `--login` again if the saved session expires.
