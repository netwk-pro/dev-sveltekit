<script>
  import { fossData } from "$lib/data/fossData.js";
  import FossItemContent from "$lib/components/content/FossItemContent.svelte";

  /**
   * Process the FOSS data
   * @type {any[]}
   */
  const processedFossData = fossData.map((item) => {
    // Create a new object to avoid modifying the original
    const processedItem = { ...item };

    // Process the links to ensure all have required properties
    if (item.links) {
      processedItem.links = item.links.map((link) => {
        // Use a type assertion to tell TypeScript this is any object
        /** @type {any} */
        const typedLink = link;

        // Now create a new object with all default values
        return {
          label: typedLink.label || "Download",
          href: typedLink.href || "#",
          imgSrc: typedLink.imgSrc || "",
          imgAlt: typedLink.imgAlt || "",
          downloadText: typedLink.downloadText || "",
          downloadHref: typedLink.downloadHref || "",
        };
      });
    }

    return processedItem;
  });

  /**
   * Page information containing title and last updated date
   * @type {{title: string, lastUpdated: string}}
   */
  const pageInfo = {
    title: "FOSS Spotlight",
    lastUpdated: "May 14, 2025",
  };

  /** @type {any} */
  const constants = {
    classSmall: "small-text",
    rel: "noopener noreferrer",
    backTop: "Back to top",
    hrefTop: "#top",
    targetSelf: "_self",
    targetBlank: "_blank",
  };
</script>

<!-- BEGIN CONTENT -->
<article>
  <h1 id="top">{pageInfo.title}</h1>
  <p class={constants.classSmall}>Last updated: {pageInfo.lastUpdated}</p>

  <!-- Table of Contents -->
  <div class="toc">
    <h2>Table of Contents</h2>
    <ul>
      {#each processedFossData as { id, title }}
        <li><a href={"#" + id}>{title}</a></li>
      {/each}
    </ul>
  </div>

  <hr />

  <!-- FOSS Items -->
  {#each processedFossData as fossItem, index (fossItem.id)}
    <FossItemContent {fossItem} />
    {#if index < processedFossData.length - 1}
      <hr />
    {/if}
  {/each}
</article>
<!-- END CONTENT -->
