<script>
  import { fossData } from "$lib/data/fossData.js";
  import FossItem from "$lib/components/content/FossItem.svelte";
</script>

<section id="top">
  <span class="small-text">
    <a
      rel="noopener noreferrer"
      href="https://spdx.dev/learn/handling-license-info"
      target="_blank">
      SPDX License Identifier
    </a>
    : &nbsp;<code>CC-BY-4.0 OR GPL-3.0-or-later</code>
  </span>
</section>

<section id="page-title">
  <h1>FOSS Spotlight</h1>
  <p>
    <strong
      >Highlights of Exceptional Free and Open Source Software (FOSS)</strong
    ><br />
    <strong>Last Updated:</strong> May 12, 2025
  </p>
</section>

&nbsp;

<nav id="toc">
  <h2>Table of Contents</h2>
  <ul>
    {#each fossData as { id, title }}
      <li><a href={"#" + id}>{title}</a></li>
    {/each}
  </ul>
</nav>

<div class="spacer"></div>

<hr />

{#each fossData as fossItem, index (fossItem.id)}
  <FossItem {fossItem} />
  {#if index !== fossData.length - 1}
    <div class="spacer"></div>
    <hr class="hr-styled" />
    <div class="spacer"></div>
  {/if}
{/each}
