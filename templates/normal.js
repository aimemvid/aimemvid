// templates/normal.js

import { CONFIG } from "../config/site.js";

import { head } from "./parts/head.js";
import { header } from "./parts/header.js";
import { secheader } from "./parts/section-header.js";
import { secfooter } from "./parts/section-footer.js";
import { footer } from "./parts/footer.js";

export function normalTemplate() {
  return `
<!DOCTYPE html>
<html lang="id">

<head>
${head(CONFIG)}
</head>

<body>

${header(CONFIG)}

${secheader(CONFIG)}

${CONFIG.content}

${secfooter(CONFIG)}

${footer(CONFIG)}

</body>
</html>
`;
}
