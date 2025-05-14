<script>
  import { base } from "$app/paths";

  // Log the base path to verify its value
  console.log("Base path:", base);

  const ccbyLink = `${base}/license#cc-by`;
  const gplLink = `${base}/license#gnu-gpl`;

  /**
   * Badge link object.
   * @typedef {Object} Badge
   * @property {string} href - The URL the badge links to.
   * @property {string} src - The source URL of the badge image.
   * @property {string} alt - The alt text for the badge image.
   * @property {string} class - The CSS class for styling the badge.
   */

  /**
   * Array of badges with their properties.
   * @type {Badge[]}
   */
  const badges = [
    {
      href: ccbyLink,
      src: "https://forthebadge.com/images/badges/cc-by.png",
      alt: "Creative Commons BY",
      class: "badge-cc-by",
    },
    {
      href: gplLink,
      src: "https://img.shields.io/badge/LICENSE-GPLv3-red?style=for-the-badge&labelColor=9b9b9b&color=d0021b",
      alt: "GPL 3.0 or Later",
      class: "badge-gpl",
    },
  ];
</script>

<!-- BEGIN BADGES -->
<div class="bnav2-wrap">
  <table class="bnav2">
    <tbody>
      <tr>
        {#each badges as badge}
          <td class="bnav2-nav">
            <a href={badge.href} target="_self">
              <img
                decoding="async"
                loading="lazy"
                src={badge.src}
                alt={badge.alt}
                class={badge.class} />
            </a>
          </td>
        {/each}
      </tr>
    </tbody>
  </table>
</div>
<!-- END BADGES -->

<!--<style>
  .badge-cc-by {
    width: 160px;
    height: auto;
  }
  .badge-gpl {
    width: 120px;
    height: auto;
  }
</style>-->
