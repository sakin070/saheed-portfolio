import { test, expect, type Page } from '@playwright/test';

test.use({ javaScriptEnabled: false });

async function structuredData(page: Page) {
  const scripts = await page.locator('script[type="application/ld+json"]').allTextContents();
  return scripts.flatMap(script => {
    const data = JSON.parse(script);
    return data['@graph'] ?? [data];
  });
}

test('the homepage identifies the person who authors the writing', async ({ page }) => {
  await page.goto('/');
  const nodes = await structuredData(page);
  const person = nodes.find(node => node['@type'] === 'Person');
  const profile = nodes.find(node => node['@type'] === 'ProfilePage');
  expect(profile).toBeDefined();
  expect(person).toMatchObject({ name: 'Saheed Akinbile', url: 'https://www.saheedakinbile.com/' });
  expect(person['@id']).toBeTruthy();
  expect(profile.mainEntity['@id']).toBe(person['@id']);
  expect(profile.url).toBe(await page.locator('link[rel="canonical"]').getAttribute('href'));
  expect(nodes.some(node => node['@type'] === 'BlogPosting')).toBe(false);
});

test('article metadata matches the visible post and identifies its author', async ({ page }) => {
  await page.goto('/writing/what-im-building-toward/');
  const nodes = await structuredData(page);
  const article = nodes.find(node => node['@type'] === 'BlogPosting');
  const person = nodes.find(node => node['@type'] === 'Person');
  expect(article).toBeDefined();
  expect(article.headline).toBe(await page.locator('h1').innerText());
  expect(article.description).toBe(await page.locator('.article-deck').innerText());
  expect(article.datePublished).toBe(await page.locator('time').getAttribute('datetime'));
  expect(article.articleSection).toBe(await page.locator('.article-header .eyebrow').textContent());
  expect(article.author['@id']).toBe(person['@id']);
  expect(person).toMatchObject({ name: 'Saheed Akinbile', url: 'https://www.saheedakinbile.com/' });
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  expect(article.url).toBe(canonical);
  expect(article.mainEntityOfPage['@id']).toBe(canonical);
  await expect(page.locator('meta[property="article:published_time"]')).toHaveAttribute('content', article.datePublished);
  await expect(page.locator('meta[property="article:author"]')).toHaveAttribute('content', person.url);
});

test('listing and error pages are not presented as articles', async ({ page }) => {
  await page.goto('/writing/');
  expect((await structuredData(page)).some(node => node['@type'] === 'BlogPosting')).toBe(false);
  const response = await page.goto('/missing-page/');
  expect(response?.status()).toBe(404);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(0);
});

test('Google verification is included only when configured', async ({ page }) => {
  await page.goto('/');
  const token = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const tag = page.locator('meta[name="google-site-verification"]');
  if (token) await expect(tag).toHaveAttribute('content', token);
  else await expect(tag).toHaveCount(0);
});
