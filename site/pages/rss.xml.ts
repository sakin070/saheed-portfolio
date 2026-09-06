import type { APIRoute } from 'astro';
import { publishedPosts } from '../lib/posts';

const escapeXml = (text: string) => text.replace(/[<>&"']/g, char => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[char]!);

export const GET: APIRoute = async ({ site }) => {
  const posts = await publishedPosts();
  const items = posts.map(post => {
    const link = new URL(`/writing/${post.id}/`, site).href;
    return `<item><title>${escapeXml(post.data.title)}</title><description>${escapeXml(post.data.description)}</description><link>${escapeXml(link)}</link><guid isPermaLink="true">${escapeXml(link)}</guid><pubDate>${post.data.date.toUTCString()}</pubDate><category>${escapeXml(post.data.category)}</category></item>`;
  }).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Saheed Akinbile — Writing</title><link>${site}writing/</link><description>Notes on building, learning, and following my curiosity.</description><language>en-us</language>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
