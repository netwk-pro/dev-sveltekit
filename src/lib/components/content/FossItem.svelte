<script>
  import Features from "$lib/components/content/FossFeatures.svelte";

  const rel = "noopener noreferrer";
  const obtainiumLink =
    "https://apps.obtainium.imranr.dev/redirect.html?r=obtainium://app/%7B%22id%22%3A%22fe.linksheet.nightly%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2FLinkSheet%2Fnightly%22%2C%22author%22%3A%221fexd%22%2C%22name%22%3A%22LinkSheet%20Nightly%22%2C%22preferredApkIndex%22%3A0%2C%22additionalSettings%22%3A%22%7B%5C%22includePrereleases%5C%22%3Atrue%2C%5C%22fallbackToOlderReleases%5C%22%3Atrue%2C%5C%22filterReleaseTitlesByRegEx%5C%22%3A%5C%22%5C%22%2C%5C%22filterReleaseNotesByRegEx%5C%22%3A%5C%22%5C%22%2C%5C%22verifyLatestTag%5C%22%3Afalse%2C%5C%22dontSortReleasesList%5C%22%3Afalse%2C%5C%22useLatestAssetDateAsReleaseDate%5C%22%3Afalse%2C%5C%22trackOnly%5C%22%3Afalse%2C%5C%22versionExtractionRegEx%5C%22%3A%5C%22%5C%22%2C%5C%22matchGroupToUse%5C%22%3A%5C%22%5C%22%2C%5C%22versionDetection%5C%22%3Afalse%2C%5C%22releaseDateAsVersion%5C%22%3Afalse%2C%5C%22useVersionCodeAsOSVersion%5C%22%3Afalse%2C%5C%22apkFilterRegEx%5C%22%3A%5C%22LinkSheet.Nightly%5C%22%2C%5C%22invertAPKFilter%5C%22%3Atrue%2C%5C%22autoApkFilterByArch%5C%22%3Atrue%2C%5C%22appName%5C%22%3A%5C%22%5C%22%2C%5C%22shizukuPretendToBeGooglePlay%5C%22%3Afalse%2C%5C%22exemptFromBackgroundUpdates%5C%22%3Afalse%2C%5C%22skipUpdateNotifications%5C%22%3Afalse%2C%5C%22about%5C%22%3A%5C%22Restore%20link%20control%20on%20Android%2012%2B%5C%22%7D%22%7D";

  export let fossItem;
</script>

<section id={fossItem.id}>
  <div class="foss-wrap">
    <table class="foss">
      <tbody>
        <tr>
          <td class="foss-cell">
            <img
              decoding="async"
              loading="lazy"
              src={fossItem.imgSrc}
              alt={fossItem.imgAlt}
              style="width: 50px; height: 50px" />
          </td>
          <td class="foss-cell">
            <h2>{fossItem.title}</h2>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>{fossItem.headline}</h3>

  {@html fossItem.headlineDescription}

  <Features />

  {@html fossItem.detailsDescription}

  {#each fossItem.notes as note}
    <blockquote class="bquote">
      {@html note}
    </blockquote>
  {/each}

  &nbsp;

  <div class="linksheet">
    {#each fossItem.links as { label, href, imgSrc, imgAlt, downloadText, downloadHref }}
      <div class="linksheet-entry">
        {#if imgSrc}
          <a {rel} href={obtainiumLink}>
            <img
              decoding="async"
              loading="lazy"
              src={imgSrc}
              alt={imgAlt || label}
              style="width: auto; height: 80px;" />
          </a>
          {#if downloadText && downloadHref}
            <p>
              <span style="color: #ffc627"
                ><i
                  class="fa-solid fa-file-arrow-down"
                  style="margin-left: 8px;"></i
                ></span>
              <a
                {rel}
                href={downloadHref}
                download
                style="margin-left: 8px;"
                target="_blank">
                {downloadText}
              </a>
            </p>
          {/if}
        {/if}
        &nbsp;
        <strong>{label}</strong>
        <a {rel} {href} target="_blank">{href}</a>
      </div>
    {/each}
  </div>

  <div class="spacer"></div>

  <span class="small-text"><a href="#top">Back to top</a></span>
</section>
