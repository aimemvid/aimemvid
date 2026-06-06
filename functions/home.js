// functions/home.js

import { normalTemplate } from "../templates/normal.js";

export function homePage() {
  return new Response(
    normalTemplate(),
    {
      status: 200,
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "public, max-age=300"
      }
    }
  );
}
