import { normalTemplate } from "../templates/normal.js";

export function pageResponse(page) {
  return new Response(
    normalTemplate(page),
    {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    }
  );
}
