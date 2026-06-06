// functions/pages.js

import { PAGES } from "../config/pages.js";
import { pagesTemplate } from "../templates/pages.js";

export function pagesPage(pathname) {

  const page = PAGES[pathname];

  if (!page) {
    return new Response("404 - Not Found", {
      status: 404,
      headers: {
        "content-type": "text/plain; charset=UTF-8"
      }
    });
  }

  return new Response(
    pagesTemplate(page),
    {
      status: 200,
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    }
  );
}
