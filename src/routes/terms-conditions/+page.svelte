<script>
  import { base } from "$app/paths";

  // Log the base path to verify its value
  console.log("Base path:", base);

  import Badges from "$lib/components/Badges.svelte";
  import FullWidthSection from "$lib/components/FullWidthSection.svelte";
  import TermsConditionsContent from "$lib/components/content/TermsConditionsContent.svelte";
  import LegalNav from "$lib/components/LegalNav.svelte";
  import SocialMedia from "$lib/components/SocialMedia.svelte";

  const tandcLink = `${base}/terms-conditions/`;
  const hrStyle = "hr-styled";
</script>

<link rel="canonical" href="https://dev.netwk.pro/terms-conditions/" />
<base href={tandcLink} target="_self" />

<section id="terms-conditions">
  <FullWidthSection>
    <!-- BEGIN TERMS AND CONDITIONS -->
    <section id="main-content">
      <TermsConditionsContent />
    </section>
    <!-- END TERMS AND CONDITIONS -->

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
