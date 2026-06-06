// templates/parts/footer.js

export function footer(CONFIG) {
  return `
<footer class="site-footer">

  <p>
    &copy; ${new Date().getFullYear()} ${CONFIG.site_name}
  </p>

</footer>
`;
}
