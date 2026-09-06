import type { APIRoute } from 'astro';
import { publishedPosts } from '../lib/posts';

export const GET: APIRoute = async ({ site }) => {
  const urls = ['/', '/writing/', ...(await publishedPosts()).map(post => `/writing/${post.id}/`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(path => `<url><loc>${new URL(path, site).href}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
