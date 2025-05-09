<script>
  import ContainerSection from "$lib/components/ContainerSection.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import HeaderDefault from "$lib/components/HeaderDefault.svelte";
  import HeaderHome from "$lib/components/HeaderHome.svelte";

  export let data;

  // Determine if the current route is the home page
  const isHomePage = data?.url?.pathname === "/";
</script>

<header id="header-nav">
  <ContainerSection>
    {#if isHomePage}
      <!-- Render Home Header for the root route -->
      <HeaderHome />
    {:else}
      <!-- Render Default Header for all other routes -->
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
