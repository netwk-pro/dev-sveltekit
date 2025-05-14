<!-- ==========================================================================
+layout.svelte

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================== -->

<script>
  import ContainerSection from "$lib/components/layout/ContainerSection.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import HeaderDefault from "$lib/components/layout/HeaderDefault.svelte";
  import HeaderHome from "$lib/components/layout/HeaderHome.svelte";

  // Import global styles
  import "$lib/styles/global.css";

  export let data;

  // Pathname normalization takes place in +layout.js
</script>

<!-- Update the document's metadata dynamically -->
<svelte:head>
  <title>{data?.meta?.title || "Network Pro Strategies (Network Pro™)"}</title>
  <meta
    name="description"
    content={data?.meta?.description ||
      "Locking Down Networks, Unlocking Confidence™ | Security, Networking, Privacy — Network Pro™"} />
</svelte:head>

<!-- BEGIN HEADER -->
<header id="header-nav">
  <ContainerSection>
    {#if data.pathname === "/"}
      <!-- Render the Home Header for the root route -->
      <HeaderHome />
    {:else}
      <!-- Render the Default Header for all other routes -->
      <HeaderDefault />
    {/if}
  </ContainerSection>
</header>
<!-- END HEADER -->

<main>
  <slot />
</main>

<!-- BEGIN FOOTER -->
<footer id="licensing">
  <ContainerSection>
    <Footer />
  </ContainerSection>
</footer>
<!-- END FOOTER -->
