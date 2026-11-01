import type { APIRoute } from 'astro';
import { routes } from '../i18n/routes';

// Every main page in both languages, plus the legal pages.
const pages = [
  ...Object.values(routes).flatMap((r) => [r.en, r.es]),
  '/optin-blueprintstrategies/',
  '/privacy-policy/',
  '/terms/',
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://blueprintstrategies.us');
  const urls = pages
    .map((p) => `  <url><loc>${new URL(p, base).href}</loc></url>`)
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
