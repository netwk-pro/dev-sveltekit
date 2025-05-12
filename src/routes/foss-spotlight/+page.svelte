<script>
  import Badges from "$lib/components/Badges.svelte";
  import FullWidthSection from "$lib/components/FullWidthSection.svelte";
  import FossContent from "$lib/components/content/FossContent.svelte";
  import LegalNav from "$lib/components/LegalNav.svelte";
  import SocialMedia from "$lib/components/SocialMedia.svelte";

  const hrStyle = "hr-styled";
</script>

<link rel="canonical" href="https://dev.netwk.pro/foss-spotlight" />

<section id="license">
  <FullWidthSection>
    <!-- BEGIN FOSS SPOTLIGHT -->
    <section id="main-content">
      <FossContent />
    </section>
    <!-- END FOSS SPOTLIGHT -->

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
  </FullWidthSection>
</section>
