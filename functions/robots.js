// functions/robots.js

import { CONFIG } from "../config/site.js";

export function robotsPage() {
  return new Response(
`User-agent: *
Allow: /

Sitemap: ${CONFIG.canonical}sitemap.xml`,
    {
      headers: {
        "content-type": "text/plain; charset=UTF-8",
        "cache-control": "public, max-age=86400"
      }
    }
  );
}
