// templates/parts/header.js

export function header(CONFIG) {
  return `
<header>

  <div class="site-header">

    <a href="${CONFIG.canonical}"
       title="${CONFIG.site_name}">

      <img src="${CONFIG.logoimage}"
           alt="${CONFIG.site_name}"
           width="180"
           height="60">

    </a>

  </div>

</header>
`;
}
