import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('a visitor can navigate from the introduction to the work and contact', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Saheed Akinbile/);
  await page.getByRole('link', { name: 'What I’m building' }).click();
  await expect(page).toHaveURL(/#work$/);
  await expect(page.getByRole('heading', { name: 'Minicor', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Explore Minicor' })).toHaveAttribute('href', 'https://minicor.com/');
  await page.getByRole('link', { name: 'Let’s talk', exact: true }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.getByRole('link', { name: 'Say hello on LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/saheed-akinbile/');
});

test('mobile menu supports keyboard dismissal and section navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Open menu' });
  await menu.click();
  await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await menu.click();
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL(/#about$/);
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
});

test('contact and writing remain reachable without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Main navigation' });
  await expect(nav.getByRole('link', { name: 'Writing' })).toHaveCount(0);
  await nav.getByRole('link', { name: 'Let’s talk' }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.getByRole('link', { name: 'Say hello on LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/saheed-akinbile/');
  await page.getByRole('contentinfo').getByRole('link', { name: 'Writing', exact: true }).click();
  await expect(page).toHaveURL(/\/writing\/$/);
  await context.close();
});

for (const width of [360, 768, 1440]) {
  test(`content fits a ${width}px screen without browser errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('link', { name: 'What I’m building' })).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test('homepage meets automated WCAG AA accessibility checks', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(results.violations).toEqual([]);
});

test('readers can open the notebook, read a post, and subscribe', async ({ page, request }) => {
  await page.goto('/writing/');
  await page.getByRole('link', { name: /What I’m building toward/ }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('What I’m building toward');
  await expect(page.getByRole('heading', { name: 'The longer-term ambition' })).toBeVisible();
  await page.getByRole('link', { name: '← Back to the notebook' }).click();
  await expect(page).toHaveURL(/\/writing\/$/);
  const rss = await request.get('/rss.xml');
  expect(rss.ok()).toBe(true);
  expect(rss.headers()['content-type']).toContain('xml');
  expect(await rss.text()).toContain('https://www.saheedakinbile.com/writing/what-im-building-toward/');
});

test('article is accessible and has a canonical URL', async ({ page }) => {
  await page.goto('/writing/what-im-building-toward/');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://www.saheedakinbile.com/writing/what-im-building-toward/');
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(results.violations).toEqual([]);
});
