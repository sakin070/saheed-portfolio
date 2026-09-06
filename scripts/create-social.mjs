import { readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';

const sans = await readFile(new URL('../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2', import.meta.url), 'base64');
const heading = await readFile(new URL('../node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2', import.meta.url), 'base64');
const photo = await readFile(new URL('../public/images/minicor-founders.jpg', import.meta.url), 'base64');
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome' });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html><head><style>
    @font-face{font-family:DM;src:url(data:font/woff2;base64,${sans})} @font-face{font-family:Bricolage;src:url(data:font/woff2;base64,${heading});font-weight:200 800}
    *{box-sizing:border-box}body{margin:0;background:#eef4ff;color:#192942;font-family:DM;padding:48px 60px;width:1200px;height:630px;position:relative}
    header{font-size:16px;display:flex;gap:12px;align-items:center}header b{display:grid;place-items:center;background:#2955cf;color:white;border-radius:12px;width:40px;height:40px;font-family:Bricolage;font-size:25px;letter-spacing:-2px;padding-right:3px}h1{font-family:Bricolage;font-size:108px;line-height:.98;font-weight:650;letter-spacing:-7px;margin:39px 0 28px}h1 span{color:#2955cf}p{font-size:17px;line-height:1.7;margin:0}figure{position:absolute;right:64px;top:133px;width:443px;padding:10px 10px 0;background:white;margin:0;border-radius:10px;transform:rotate(3deg);box-shadow:0 10px 30px #25458016}img{display:block;width:100%;border-radius:5px}figcaption{font-size:12px;padding:15px 8px;color:#43516c}footer{position:absolute;left:60px;right:60px;bottom:36px;border-top:1px solid #d0dcf2;padding-top:21px;font-size:12px;display:flex;justify-content:space-between;color:#435677}
  </style></head><body><header><b>sa.</b>Saheed Akinbile</header><h1>Hi, I’m<br><span>Saheed.</span></h1><p>Founder, engineer, and a curious person.<br>Co-founder & CTO, Minicor (YC Spring 2026)</p><figure><img src="data:image/jpeg;base64,${photo}" alt=""><figcaption>Me & Faiz, building Minicor.</figcaption></figure><footer><span>San Francisco, by way of Lagos & Ottawa</span><span>saheedakinbile.com</span></footer></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: new URL('../public/images/social.png', import.meta.url).pathname });
  console.log('Created public/images/social.png (1200 × 630)');
} finally {
  await browser.close();
}
