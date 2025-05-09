<script>
  import ContainerSection from "$lib/components/layout/ContainerSection.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import HeaderDefault from "$lib/components/layout/HeaderDefault.svelte";
  import HeaderHome from "$lib/components/layout/HeaderHome.svelte";

  export let data;

  // Normalize the pathname to handle trailing slashes
  const normalizedPathname = data?.pathname?.replace(/\/+$/, "") || "/";
</script>

<!-- Update the document's metadata dynamically -->
<svelte:head>
  <title>{data?.meta?.title || "Network Pro Strategies (Network Pro™)"}</title>
  <meta
    name="description"
    content={data?.meta?.description ||
      "Locking Down Networks, Unlocking Confidence™ | Security, Networking, Privacy — Network Pro™"} />
</svelte:head>

<header id="header-nav">
  <ContainerSection>
    {#if normalizedPathname === "/"}
      <!-- Render the Home Header for the root route -->
      <HeaderHome />
    {:else}
      <!-- Render the Default Header for all other routes -->
      <HeaderDefault />
    {/if}
  </ContainerSection>
</header>

<!-- Main Content -->
<slot />

<footer id="licensing">
  <ContainerSection>
    <Footer />
  </ContainerSection>
</footer>
