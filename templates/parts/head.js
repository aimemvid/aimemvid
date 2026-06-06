// templates/parts/head.js

export function head(CONFIG) {
  return `
<meta charset="UTF-8">

<meta name="viewport"
      content="width=device-width,initial-scale=1">

<title>${CONFIG.title}</title>

<meta name="description"
      content="${CONFIG.desc}">

<link rel="canonical"
      href="${CONFIG.canonical}">

<link rel="amphtml"
      href="${CONFIG.canonical}amp">

<link rel="icon"
      href="${CONFIG.favicon}">

<meta property="og:type"
      content="website">

<meta property="og:title"
      content="${CONFIG.title}">

<meta property="og:description"
      content="${CONFIG.desc}">

<meta property="og:image"
      content="${CONFIG.image}">

<meta property="og:url"
      content="${CONFIG.canonical}">

<meta name="twitter:card"
      content="summary_large_image">

<meta name="twitter:title"
      content="${CONFIG.title}">

<meta name="twitter:description"
      content="${CONFIG.desc}">

<meta name="twitter:image"
      content="${CONFIG.image}">
`;
}
