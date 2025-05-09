<script>
  import Badges from "$lib/components/Badges.svelte";
  import FullWidthSection from "$lib/components/FullWidthSection.svelte";
  import HomeContent from "$lib/components/content/HomeContent.svelte";
  import LegalNav from "$lib/components/LegalNav.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import SocialMedia from "$lib/components/SocialMedia.svelte";

  /**
   * @type {string}
   * Style class for the horizontal rule element.
   */
  const hrStyle = "hr-styled";
</script>

<link rel="canonical" href="https://dev.netwk.pro/" />

<section id="home-page" data-testid="home-page">
  <FullWidthSection>
    <!-- BEGIN TITLE -->
    <section id="site-title">
      <Logo />
    </section>
    <!-- END TITLE -->

    <div class="spacer"></div>

    <hr class={hrStyle} />

    <div class="spacer"></div>

    <!-- BEGIN MAIN CONTENT -->
    <section id="main-content">
      <HomeContent />
    </section>
    <!-- END MAIN CONTENT -->

    <div class="spacer"></div>

    <!-- BEGIN SOCIAL MEDIA -->
    <section id="social-media">
      <SocialMedia />
    </section>
    <!-- END SOCIAL MEDIA -->

    <hr class={hrStyle} />

    <div class="spacer"></div>

    <!-- BEGIN LEGAL -->
    <section id="legal-nav">
      <LegalNav />
    </section>
    <!-- END LEGAL -->

    <div class="spacer"></div>

    <!-- BEGIN BADGES -->
    <section id="badges">
      <Badges />
    </section>
    <!-- END BADGES -->
  </FullWidthSection>
</section>
