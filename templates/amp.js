// templates/amp.js

import { CONFIG } from "../config/site.js";

export function ampTemplate() {
  return `<!doctype html>
<html amp lang="id">

<head>

<meta charset="utf-8">

<title>${CONFIG.title}</title>

<meta name="viewport"
      content="width=device-width,minimum-scale=1,initial-scale=1">

<meta name="description"
      content="${CONFIG.desc}">

<link rel="canonical"
      href="${CONFIG.canonical}">

<link rel="icon"
      href="${CONFIG.favicon}">

<meta property="og:title"
      content="${CONFIG.title}">

<meta property="og:description"
      content="${CONFIG.desc}">

<meta property="og:image"
      content="${CONFIG.image}">

<script async
        src="https://cdn.ampproject.org/v0.js"></script>

<style amp-boilerplate>
body{
  -webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
  -moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
  -ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
  animation:-amp-start 8s steps(1,end) 0s 1 normal both
}

@-webkit-keyframes -amp-start{
  from{visibility:hidden}
  to{visibility:visible}
}

@-moz-keyframes -amp-start{
  from{visibility:hidden}
  to{visibility:visible}
}

@-ms-keyframes -amp-start{
  from{visibility:hidden}
  to{visibility:visible}
}

@-o-keyframes -amp-start{
  from{visibility:hidden}
  to{visibility:visible}
}

@keyframes -amp-start{
  from{visibility:hidden}
  to{visibility:visible}
}
</style>

<noscript>
<style amp-boilerplate>
body{
  -webkit-animation:none;
  -moz-animation:none;
  -ms-animation:none;
  animation:none
}
</style>
</noscript>

<style amp-custom>
body{
  font-family:Arial,sans-serif;
  max-width:1200px;
  margin:auto;
  padding:20px;
}
</style>

</head>

<body>

${CONFIG.content}

</body>

</html>`;
}
