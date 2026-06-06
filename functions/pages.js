import { PAGES } from "../config/pages.js";
import { pagesTemplate } from "../templates/pages.js";

export function pagesPage(pathname) {

  const page = PAGES[pathname];

  if (!page) {
    return new Response("404 - Not Found", {
      status: 404
    });
  }

  return new Response(
    pagesTemplate(page),
    {
      status: 200,
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "public, max-age=300"
      }
    }
  );
}
