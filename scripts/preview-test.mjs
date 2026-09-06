import { preview } from 'astro';

// Use Astro's API so the test server stays attached to Playwright, including
// environments where the CLI automatically starts a background server.
const server = await preview({ server: { host: '127.0.0.1', port: 4322 } });
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, async () => { await server.stop(); process.exit(0); });
}
