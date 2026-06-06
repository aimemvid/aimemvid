// functions/rss.js

import { CONFIG } from "../config/site.js";

export function rssPage() {

  const now = new Date().toUTCString();

  return new Response(
`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">

<channel>

<title>${CONFIG.site_name}</title>

<link>${CONFIG.canonical}</link>

<description>${CONFIG.desc}</description>

<language>id-ID</language>

<item>
  <title>${CONFIG.title}</title>
  <link>${CONFIG.canonical}</link>
  <guid>${CONFIG.canonical}</guid>
  <pubDate>${now}</pubDate>
  <description><![CDATA[${CONFIG.desc}]]></description>
</item>

<item>
  <title>${CONFIG.title} AMP</title>
  <link>${CONFIG.canonical}amp</link>
  <guid>${CONFIG.canonical}amp</guid>
  <pubDate>${now}</pubDate>
  <description><![CDATA[${CONFIG.desc}]]></description>
</item>

</channel>

</rss>`,
    {
      headers: {
        "content-type": "application/rss+xml; charset=UTF-8",
        "cache-control": "public, max-age=86400"
      }
    }
  );
}
