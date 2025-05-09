<script>
  import AboutContent from "$lib/components/AboutContent.svelte";
  import Badges from "$lib/components/Badges.svelte";
  import FullWidthSection from "$lib/components/FullWidthSection.svelte";
  import LegalNav from "$lib/components/LegalNav.svelte";
  import SocialMedia from "$lib/components/SocialMedia.svelte";

  const hrStyle = "hr-styled";
</script>

<section id="about">
  <FullWidthSection>
    <!-- MAIN CONTENT -->
    <section id="main-content">
      <AboutContent />
    </section>

    <div class="spacer"></div>

    <!-- SOCIAL MEDIA -->
    <section id="social-media">
      <SocialMedia />
    </section>

    <hr class={hrStyle} />

    <div class="spacer"></div>

    <!-- LEGAL NAVIGATION -->
    <section id="legal-nav">
      <LegalNav />
    </section>

    <div class="spacer"></div>

    <!-- BADGES -->
    <section id="badges">
      <Badges />
    </section>
  </FullWidthSection>
</section>

<style>
  .spacer {
    margin: 1rem 0;
  }
</style>
