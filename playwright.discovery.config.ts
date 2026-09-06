import { defineConfig } from '@playwright/test';
import localConfig from './playwright.config';

// Read-only checks of an existing deployment; do not start or rebuild a local server.
export default defineConfig({
  ...localConfig,
  testMatch: 'discovery.spec.ts',
  use: {
    ...localConfig.use,
    baseURL: process.env.DISCOVERY_BASE_URL ?? 'https://www.saheedakinbile.com',
  },
  webServer: undefined,
});
