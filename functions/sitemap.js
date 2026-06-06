import { CONFIG } from "../config/site.js";
import { PAGES } from "../config/pages.js";

export function sitemapPage() {

  const now = new Date().toISOString();

  const pages = Object.keys(PAGES)
    .map(path => `
<url>
  <loc>${CONFIG.canonical.replace(/\/$/, "")}${path}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>`)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

<url>
  <loc>${CONFIG.canonical}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>daily</changefreq>
  <priority>1.0</priority>
</url>

<url>
  <loc>${CONFIG.canonical}amp</loc>
  <lastmod>${now}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.9</priority>
</url>

${pages}

</urlset>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=UTF-8"
    }
  });
}
