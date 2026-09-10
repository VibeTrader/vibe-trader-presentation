const { chromium } = require('playwright');
(async () => {
 const browser = await chromium.launch({headless:true});
 const page = await browser.newPage({viewport:{width:1920,height:1080},storageState:'.playwright-mcp/pdf-auth.json'});
 const errors=[]; page.on('pageerror', e=>errors.push(e.message));
 await page.goto('http://localhost:3000/presentation/10');
 await page.waitForTimeout(2500);
 await page.screenshot({path:'/tmp/slide10-option2.png'});
 console.log(JSON.stringify({path:new URL(page.url()).pathname,errors}));
 await browser.close();
})();
