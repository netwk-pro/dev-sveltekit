<script>
  import Badges from "$lib/components/Badges.svelte";
  import FullWidthSection from "$lib/components/FullWidthSection.svelte";
  import PrivacyContent from "$lib/components/content/PrivacyContent.svelte";
  import LegalNav from "$lib/components/LegalNav.svelte";
  import SocialMedia from "$lib/components/SocialMedia.svelte";

  const hrStyle = "hr-styled";
</script>

<link rel="canonical" href="https://dev.netwk.pro/privacy-policy/" />

<section id="privacy-policy">
  <FullWidthSection>
    <!-- BEGIN PRIVACY POLICY -->
    <section id="main-content">
      <PrivacyContent />
    </section>
    <!-- END PRIVACY POLICY -->

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
