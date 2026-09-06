import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://127.0.0.1:4322',
    launchOptions: { channel: process.env.PLAYWRIGHT_CHANNEL ?? (process.env.CI ? undefined : 'chrome') },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run build && node scripts/preview-test.mjs',
    url: 'http://127.0.0.1:4322',
    reuseExistingServer: false,
  },
});
