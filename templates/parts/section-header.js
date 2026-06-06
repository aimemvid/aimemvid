// templates/parts/secheader.js

export function secheader(CONFIG) {
  return `
<section class="content">

  <header class="content-header">

    <h1>${CONFIG.title}</h1>

    <p>${CONFIG.desc}</p>

  </header>
`;
}
