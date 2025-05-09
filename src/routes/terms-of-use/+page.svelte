<script>
  import { base } from "$app/paths";

  // Log the base path to verify its value
  console.log("Base path:", base);

  import Badges from "$lib/components/Badges.svelte";
  import FullWidthSection from "$lib/components/FullWidthSection.svelte";
  import TermsUseContent from "$lib/components/content/TermsUseContent.svelte";
  import LegalNav from "$lib/components/LegalNav.svelte";
  import SocialMedia from "$lib/components/SocialMedia.svelte";

  const termsLink = `${base}/terms-of-use/`;
  const hrStyle = "hr-styled";
</script>

<link rel="canonical" href="https://dev.netwk.pro/terms-of-use/" />
<base href={termsLink} target="_self" />

<section id="terms-of-use">
  <FullWidthSection>
    <!-- BEGIN TERMS OF USE -->
    <section id="main-content">
      <TermsUseContent />
    </section>
    <!-- END TERMS OF USE -->

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
