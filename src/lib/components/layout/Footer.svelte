<script>
  /**
   * Creator details object.
   * @typedef {Object} Creator
   * @property {string} name - The name of the creator.
   * @property {string} url - The URL of the creator's website.
   * @property {string} trademark - The trademark name of the creator.
   * @property {string} slogan - The slogan of the creator.
   */

  /**
   * Icon details object.
   * @typedef {Object} Icon
   * @property {string} src - The source URL of the icon image.
   * @property {string} alt - The alt text for the icon image.
   */

  /**
   * License details object.
   * @typedef {Object} License
   * @property {string} type - The type of the license (e.g., "CC BY 4.0").
   * @property {string} url - The internal URL for the license.
   * @property {string} [externalUrl] - The external URL for the license.
   * @property {string} [description] - A brief description of the license.
   * @property {Icon[]} [icons] - An array of icon objects for representing the license visually.
   */

  /**
   * @type {Creator}
   */
  const creator = {
    name: "Network Pro Strategies",
    url: "https://netwk.pro/",
    trademark: "Network Pro™",
    slogan: "Locking Down Networks™",
  };

  /**
   * @type {License[]}
   */
  const licenses = [
    {
      type: "CC BY 4.0",
      url: "./license#cc-by",
      externalUrl: "https://creativecommons.org/licenses/by/4.0/",
      icons: [
        {
          src: "https://mirrors.creativecommons.org/presskit/icons/cc.svg",
          alt: "Creative Commons BY",
        },
        {
          src: "https://mirrors.creativecommons.org/presskit/icons/by.svg",
          alt: "Creative Commons BY",
        },
      ],
    },
    {
      type: "GNU GPL",
      url: "./license#gnu-gpl",
      externalUrl: "https://fsf.org",
      description:
        "as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.",
    },
  ];

  /**
   * Namespace attributes for the container.
   * @type {Object}
   */
  const namespaceAttributes = {
    "xmlns:cc": "http://creativecommons.org/ns#",
    "xmlns:dct": "http://purl.org/dc/terms/",
  };

  /**
   * Relation attributes for external links.
   * @type {string}
   */
  const rel = "noopener noreferrer";

  /**
   * Relation attributes for license links.
   * @type {string}
   */
  const relLicense = "license noopener noreferrer";

  /**
   * Target attribute for opening links in the same tab.
   * @type {string}
   */
  const targetSelf = "_self";

  /**
   * Target attribute for opening links in a new tab.
   * @type {string}
   */
  const targetBlank = "_blank";
</script>

<div class="copyright" {...namespaceAttributes}>
  <!-- Copyright Section -->
  <p>
    Copyright &copy; 2025<br />
    <a
      rel="cc:attributionURL dct:creator noopener noreferrer"
      property="cc:attributionName"
      href={creator.url}
      target={targetBlank}>
      <strong>{creator.name}</strong>
    </a>
    ({creator.trademark})
  </p>

  <!-- Trademark Section -->
  <p>
    {creator.trademark}, the shield logo, and the "{creator.slogan}" slogan are
    <a {rel} href="#trademark" target={targetSelf}>trademarks</a>
    of {creator.name}.
  </p>

  <!-- Licensing Section -->
  <p>
    Licensed under
    {#each licenses as license, index}
      {#if license.type === "CC BY 4.0"}
        <a
          href={license.url}
          target={targetSelf}
          rel={relLicense}
          style="display: inline-block">
          <strong>{license.type}</strong>
        </a>
        {#if license.icons}
          {#each license.icons as icon}
            <a
              href={license.externalUrl}
              target={targetBlank}
              rel={relLicense}
              style="display: inline-block">
              <img
                decoding="async"
                loading="lazy"
                src={icon.src}
                alt={icon.alt}
                style="
                  height: 18px !important;
                  margin-left: 3px;
                  text-decoration: none;
                  vertical-align: text-bottom;
                " />
            </a>
          {/each}
        {/if}
      {:else}
        <a href={license.url} target={targetSelf} rel={relLicense}>
          <strong>{license.type}</strong>
        </a>
        , {license.description}
        <a {rel} href={license.externalUrl} target={targetBlank}>
          Free Software Foundation
        </a>
      {/if}
      {index < licenses.length - 1 ? ", and the " : ""}
    {/each}
  </p>
</div>
