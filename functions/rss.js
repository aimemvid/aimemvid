// functions/rss.js

import { CONFIG } from "../config/site.js";
import { PAGES } from "../config/pages.js";

export function rssPage() {

  const items = Object.entries(PAGES)
    .map(([path, page]) => `
<item>
  <title><![CDATA[${page.title}]]></title>
  <link>${CONFIG.canonical.replace(/\/$/, "")}${path}</link>
  <guid>${CONFIG.canonical.replace(/\/$/, "")}${path}</guid>
  <description><![CDATA[${page.desc || ""}]]></description>
  <pubDate>${new Date().toUTCString()}</pubDate>
</item>`)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">

<channel>

<title>${CONFIG.site_name}</title>

<link>${CONFIG.canonical}</link>

<description>${CONFIG.desc}</description>

<language>id-ID</language>

<item>
  <title><![CDATA[${CONFIG.title}]]></title>
  <link>${CONFIG.canonical}</link>
  <guid>${CONFIG.canonical}</guid>
  <description><![CDATA[${CONFIG.desc}]]></description>
  <pubDate>${new Date().toUTCString()}</pubDate>
</item>

${items}

</channel>

</rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "content-type": "application/rss+xml; charset=UTF-8",
      "cache-control": "public, max-age=86400"
    }
  });
}
