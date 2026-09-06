import { test, expect, type APIRequestContext, type Page } from '@playwright/test';

test.use({ javaScriptEnabled: false });

const canonicalOrigin = 'https://www.saheedakinbile.com';

async function xmlValues(page: Page, xml: string, selector: string) {
  return page.evaluate(({ xml, selector }) => {
    const document = new DOMParser().parseFromString(xml, 'application/xml');
    if (document.querySelector('parsererror')) throw new Error('Invalid XML feed');
    return [...document.querySelectorAll(selector)].map(node => node.textContent!.trim());
  }, { xml, selector });
}

async function sitemapUrls(page: Page, request: APIRequestContext) {
  const response = await request.get('/sitemap.xml');
  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('xml');
  const urls = await xmlValues(page, await response.text(), 'url > loc');
  expect(urls).toContain(`${canonicalOrigin}/`);
  expect(urls).toContain(`${canonicalOrigin}/writing/`);
  for (const url of urls) expect(new URL(url).origin).toBe(canonicalOrigin);
  return urls;
}

test('robots, sitemap, and RSS expose the public pages', async ({ page, request }) => {
  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  const directives = (await robots.text()).split('\n')
    .map(line => line.split('#')[0].trim()).filter(Boolean);
  // Assert the site's current allow-all policy, including the absence of bot-specific blocks.
  expect(directives).toEqual([
    'User-agent: *', 'Allow: /', `Sitemap: ${canonicalOrigin}/sitemap.xml`,
  ]);
  const urls = await sitemapUrls(page, request);
  const rss = await request.get('/rss.xml');
  expect(rss.status()).toBe(200);
  expect(rss.headers()['content-type']).toContain('xml');
  const posts = await xmlValues(page, await rss.text(), 'item > link');
  expect([...posts].sort()).toEqual(urls.filter(url => new URL(url).pathname.startsWith('/writing/') && new URL(url).pathname !== '/writing/').sort());
});

test('sitemap pages serve readable HTML and metadata without JavaScript', async ({ page, request }) => {
  for (const url of await sitemapUrls(page, request)) {
    const pathname = new URL(url).pathname;
    await test.step(pathname, async () => {
      const response = await page.goto(pathname);
      expect(response?.status()).toBe(200);
      expect(response?.headers()['x-robots-tag'] ?? '').not.toMatch(/\b(noindex|none)\b/i);
      const robots = await page.locator('meta[name="robots" i], meta[name="googlebot" i]').evaluateAll(tags => tags.map(tag => tag.getAttribute('content')).join(','));
      expect(robots).not.toMatch(/\b(noindex|none)\b/i);
      await expect(page.locator('main h1')).toBeVisible();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', url);
      const scripts = await page.locator('script[type="application/ld+json"]').allTextContents();
      const nodes = scripts.flatMap(script => {
        const data = JSON.parse(script);
        return data['@graph'] ?? [data];
      });
      const person = nodes.find(node => node['@type'] === 'Person');
      expect(person).toMatchObject({ '@id': `${canonicalOrigin}/#person`, name: 'Saheed Akinbile', url: `${canonicalOrigin}/` });
      if (pathname === '/') {
        const profile = nodes.find(node => node['@type'] === 'ProfilePage');
        expect(profile?.mainEntity?.['@id']).toBe(person['@id']);
      } else if (pathname.startsWith('/writing/') && pathname !== '/writing/') {
        const article = nodes.find(node => node['@type'] === 'BlogPosting');
        expect(article?.headline).toBe(await page.locator('h1').innerText());
        expect(article?.datePublished).toBe(await page.locator('time').getAttribute('datetime'));
        expect(article?.author?.['@id']).toBe(person['@id']);
      }
    });
  }
});

test('search crawler user agents receive the static homepage', async ({ page, request }) => {
  // This tests user-agent handling from our network, not access from a crawler's IP or indexing.
  for (const userAgent of ['Googlebot', 'OAI-SearchBot', 'Claude-SearchBot']) {
    await test.step(userAgent, async () => {
      const response = await request.get('/', { headers: { 'User-Agent': userAgent } });
      expect(response.status()).toBe(200);
      expect(response.headers()['content-type']).toContain('text/html');
      expect(response.headers()['x-robots-tag'] ?? '').not.toMatch(/\b(noindex|none)\b/i);
      const html = await response.text();
      const robots = await page.evaluate(html => {
        const document = new DOMParser().parseFromString(html, 'text/html');
        return [...document.querySelectorAll('meta[name="robots" i], meta[name="googlebot" i]')]
          .map(tag => tag.getAttribute('content')).join(',');
      }, html);
      expect(robots).not.toMatch(/\b(noindex|none)\b/i);
      expect(html).toContain('<main');
      expect(html).toContain('Saheed Akinbile');
      expect(html).toContain('Minicor');
      expect(html).toContain('application/ld+json');
    });
  }
});
