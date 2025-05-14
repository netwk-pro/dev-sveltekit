<script>
  import Badges from "$lib/components/Badges.svelte";
  import FullWidthSection from "$lib/components/FullWidthSection.svelte";
  import LicenseContent from "$lib/components/content/LicenseContent.svelte";
  import LegalNav from "$lib/components/LegalNav.svelte";
  import SocialMedia from "$lib/components/SocialMedia.svelte";

  /**
   * @type {string}
   * Style class for the horizontal rule element.
   */
  const hrStyle = "hr-styled";

  /**
   * @type {string}
   * Style class for the div element.
   */
  const spaceStyle = "spacer";
</script>

<link rel="canonical" href="https://dev.netwk.pro/license" />

<section id="license">
  <FullWidthSection>
    <!-- BEGIN LEGAL, COPYRIGHT, AND LICENSING -->
    <section id="main-content">
      <LicenseContent />
    </section>
    <!-- END LEGAL, COPYRIGHT, AND LICENSING -->

    <div class={spaceStyle}></div>

    <!-- BEGIN SOCIAL MEDIA -->
    <section id="social-media">
      <SocialMedia />
    </section>
    <!-- END SOCIAL MEDIA -->

    <hr class={hrStyle} />

    <div class={spaceStyle}></div>

    <!-- BEGIN LEGAL -->
    <section id="legal-nav">
      <LegalNav />
    </section>
    <!-- END LEGAL -->

    <div class={spaceStyle}></div>

    <!-- BEGIN BADGES -->
    <section id="badges">
      <Badges />
    </section>
  </FullWidthSection>
</section>
