<script>
  import { base } from "$app/paths";

  // Log the base path to verify its value
  console.log("Base path:", base);

  import Badges from "$lib/components/Badges.svelte";
  import FullWidthSection from "$lib/components/FullWidthSection.svelte";
  import LicenseContent from "$lib/components/content/LicenseContent.svelte";
  import LegalNav from "$lib/components/LegalNav.svelte";
  import SocialMedia from "$lib/components/SocialMedia.svelte";

  const licenseLink = `${base}/license/`;
  const hrStyle = "hr-styled";
</script>

<link rel="canonical" href="https://dev.netwk.pro/license/" />
<base href={licenseLink} target="_self" />

<section id="license">
  <FullWidthSection>
    <!-- BEGIN LEGAL, COPYRIGHT, AND LICENSING -->
    <section id="main-content">
      <LicenseContent />
    </section>
    <!-- END LEGAL, COPYRIGHT, AND LICENSING -->

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
