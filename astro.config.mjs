import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.saheedakinbile.com',
  srcDir: './site',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
