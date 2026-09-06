import { readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';

const manrope = await readFile(new URL('../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2', import.meta.url), 'base64');
const serif = await readFile(new URL('../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2', import.meta.url), 'base64');
const portrait = await readFile(new URL('../public/images/saheed.jpg', import.meta.url), 'base64');
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome' });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html><head><style>
    @font-face{font-family:Manrope;src:url(data:font/woff2;base64,${manrope})} @font-face{font-family:Instrument;src:url(data:font/woff2;base64,${serif});font-style:italic}
    *{box-sizing:border-box}body{margin:0;background:#f6f3ed;color:#252923;font-family:Manrope;padding:53px 65px;width:1200px;height:630px;position:relative}
    header{font-size:14px;letter-spacing:1px;display:flex;justify-content:space-between}header b{font-size:28px;letter-spacing:-2px}header b span{color:#b94121}h1{font-size:97px;line-height:1.03;font-weight:500;letter-spacing:-6px;margin:47px 0 27px}em{font-family:Instrument;color:#b94121;font-weight:400}p{font-size:15px;line-height:1.8}img{position:absolute;right:65px;top:131px;width:330px;height:368px;object-fit:cover;border-radius:3px}footer{position:absolute;left:65px;right:65px;bottom:34px;border-top:1px solid #d9d9cf;padding-top:20px;font-size:11px;letter-spacing:1px;display:flex;justify-content:space-between}
  </style></head><body><header><b>saheed<span>.</span></b><span>FOUNDER & ENGINEER · SAN FRANCISCO</span></header><h1>Building a<br>future we<br>can <em>own.</em></h1><p>Saheed Akinbile · Co-founder & CTO, Minicor (YC)</p><img src="data:image/jpeg;base64,${portrait}" alt=""><footer><span>ROOTED IN NIGERIA. BUILDING EVERYWHERE.</span><span>saheedakinbile.com</span></footer></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: new URL('../public/images/social.png', import.meta.url).pathname });
  console.log('Created public/images/social.png (1200 × 630)');
} finally {
  await browser.close();
}
