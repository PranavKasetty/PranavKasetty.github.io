// Sitemap for search engines: the home page, every project page, and any writing rendered on this site.
// Referenced from robots.txt. Submit https://pranavkasetty.github.io/sitemap.xml in Google Search Console.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const projects = Object.keys(import.meta.glob('./projects/*.astro'))
    .map((p) => `/projects/${p.split('/').pop()!.replace('.astro', '')}/`);
  const writing = (await getCollection('writing'))
    .filter((w) => !w.data.draft && !w.data.url)
    .map((w) => `/writing/${w.id}/`);
  const urls = ['/', ...projects, ...writing].map((p) => new URL(p, site).href);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
