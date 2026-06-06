// functions/amp.js

import { ampTemplate } from "../templates/amp.js";

export function ampPage(request) {
  return new Response(
    ampTemplate(),
    {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    }
  );
}
