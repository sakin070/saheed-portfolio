import { readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';

const sans = await readFile(new URL('../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2', import.meta.url), 'base64');
const heading = await readFile(new URL('../node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2', import.meta.url), 'base64');
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome' });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html><head><style>
    @font-face{font-family:DM;src:url(data:font/woff2;base64,${sans})} @font-face{font-family:Bricolage;src:url(data:font/woff2;base64,${heading});font-weight:200 800}
    *{box-sizing:border-box}body{margin:0;background:#fff;color:#252426;font-family:DM;width:1200px;height:630px;padding:28px}.card{position:relative;background:#f5f5f4;border-radius:24px;height:100%;padding:38px 45px;overflow:hidden}
    header{display:flex;justify-content:space-between;align-items:center}header b{font-family:Bricolage;font-size:30px;letter-spacing:-2px;font-weight:700}header b span,h1 span{color:#3e6553}header>span{font-size:12px;color:#69666b}h1{font-family:Bricolage;font-size:100px;line-height:.98;font-weight:650;letter-spacing:-6px;margin:37px 0 23px}p{font-size:17px;line-height:1.75;margin:0;color:#5e5860}.monogram{position:absolute;right:84px;top:115px;font-family:Bricolage;font-size:270px;font-weight:650;letter-spacing:-26px;line-height:1;color:#e4e0e2}.monogram span{color:#8da997}footer{position:absolute;left:45px;right:45px;bottom:30px;border-top:1px solid #ddd9db;padding-top:20px;font-size:12px;display:flex;justify-content:space-between;color:#69666b}
  </style></head><body><div class="card"><header><b>saheed<span>.</span></b><span>San Francisco, by way of Lagos & Canada</span></header><h1>Saheed<br>Akinbile<span>.</span></h1><p>Founder & engineer.<br>Co-founder & CTO, Minicor (YC Spring 2026)</p><div class="monogram" aria-hidden="true">s<span>.</span></div><footer><span>Cameras &amp; drive modes. AI. Agriculture.</span><span>saheedakinbile.com</span></footer></div></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: new URL('../public/images/social.png', import.meta.url).pathname });
  console.log('Created public/images/social.png (1200 × 630)');
} finally {
  await browser.close();
}
