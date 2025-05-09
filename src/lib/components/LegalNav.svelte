<script>
  /**
   * Navigation link object.
   * @typedef {Object} NavLink
   * @property {string} href - The URL the link points to.
   * @property {string} text - The text displayed for the link.
   * @property {string} target - Specifies where to open the link (e.g., "_self" or "_blank").
   * @property {number} [colspan] - Optional property to specify column span for the table cell.
   */

  /**
   * Rows of navigation links, where each row is an array of NavLink objects.
   * @type {NavLink[][]}
   */
  const rows = [
    [
      { href: "./terms-of-use", text: "Terms of Use", target: "_self" },
      { href: "./privacy-policy", text: "Privacy Policy", target: "_self" },
    ],
    [{ href: "./license", text: "Legal", target: "_self", colspan: 2 }],
  ];
</script>

<div class="bnav-wrap">
  <table class="bnav">
    <tbody>
      {#each rows as row}
        <tr>
          {#each row as link}
            <td
              class={link.colspan ? "bnav-cell" : "bnav-nav"}
              colspan={link.colspan || 1}>
              <a
                rel="noopener noreferrer"
                href={link.href}
                target={link.target}>
                {link.text}
              </a>
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
