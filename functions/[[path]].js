// functions/[[path]].js

import { homePage } from "./home.js";
import { ampPage } from "./amp.js";
import { robotsPage } from "./robots.js";
import { sitemapPage } from "./sitemap.js";
import { rssPage } from "./rss.js";

export async function onRequest({ request }) {

  const { pathname } = new URL(request.url);

  if (pathname === "/") {
    return homePage(request);
  }

  if (pathname === "/amp") {
    return ampPage(request);
  }

  if (pathname === "/robots.txt") {
    return robotsPage();
  }

  if (pathname === "/sitemap.xml") {
    return sitemapPage();
  }

  if (pathname === "/rss.xml") {
    return rssPage();
  }

  return new Response("404 - Not Found", {
    status: 404,
    headers: {
      "content-type": "text/plain; charset=UTF-8"
    }
  });
}



const page = PAGES[pathname];

  if (page) {
    return new Response(
      normalTemplate(page),
      {
        headers: {
          "content-type": "text/html; charset=UTF-8"
        }
      }
    );
  }

  return new Response("404 - Not Found", {
    status: 404
  });
}

