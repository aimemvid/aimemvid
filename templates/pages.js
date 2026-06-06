export function pagesTemplate(page) {
  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${page.title}</title>

<meta name="description" content="${page.desc}">

<link rel="canonical" href="${page.canonical}">

<meta property="og:type" content="website">

<meta property="og:title" content="${page.title}">

<meta property="og:description" content="${page.desc}">

<meta property="og:url" content="${page.canonical}">

<meta property="og:image" content="${page.image}">

<meta name="twitter:card" content="summary_large_image">

<meta name="twitter:title" content="${page.title}">

<meta name="twitter:description" content="${page.desc}">

<meta name="twitter:image" content="${page.image}">
</head>
<body>

${page.content}

</body>
</html>`;
}
