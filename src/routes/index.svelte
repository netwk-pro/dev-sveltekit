<script lang="ts">
  import AboutContent from "../lib/components/AboutContent.svelte";
  import Badges from "../lib/components/Badges.svelte";
  import ContainerSection from "../lib/components/ContainerSection.svelte";
  import Footer from "../lib/components/Footer.svelte";
  import FullWidthSection from "../lib/components/FullWidthSection.svelte";
  import HeaderDefault from "../lib/components/HeaderDefault.svelte";
  import HeaderHome from "../lib/components/HeaderHome.svelte";
  import HomeContent from "../lib/components/HomeContent.svelte";
  import LegalNav from "../lib/components/LegalNav.svelte";
  import License from "../lib/components/License.svelte";
  import Logo from "../lib/components/Logo.svelte";
  import SocialMedia from "../lib/components/SocialMedia.svelte";
  import PrivacyPolicy from "./privacy-policy.svelte";
  import Terms from "./terms.svelte";

  let currentPage = "home"; // Set the initial page to "home"
  let hrStyle = "hr-styled";
  let ogImage = "https://netwk.pro/img/banner-og-1200x630.png";

  // Metadata for each page
  const metadata = {
    home: {
      title: "Security, Networking, Privacy &mdash; Network Pro Strategies",
      description:
        "Locking Down Networks, Unlocking Confidence | Security, Networking, Privacy — Network Pro",
      canonical: "https://netwk.pro",
      ogTitle: "Security, Networking, Privacy - Network Pro Strategies",
      ogDescription:
        "Locking Down Networks, Unlocking Confidence | Security, Networking, Privacy — Network Pro",
      ogUrl: "https://netwk.pro",
      ogImage: { ogImage },
      facebookVerification: true, // Include Facebook verification for home page only
    },
    about: {
      title:
        "About Network Pro&trade; | Security, Networking, Privacy &mdash; Network Pro Strategies",
      description: "Learn more about Network Pro Strategies.",
      canonical: "https://netwk.pro/about",
      ogTitle:
        "About Network Pro&trade; | Security, Networking, Privacy - Network Pro Strategies",
      ogDescription: "Learn more about Network Pro Strategies.",
      ogUrl: "https://netwk.pro/about",
      ogImage: { ogImage },
      facebookVerification: false,
    },
    terms: {
      title: "Terms of Use | Network Pro Strategies",
      description: "Read the Terms of Use for Network Pro Strategies.",
      canonical: "https://netwk.pro/terms",
      ogTitle: "Terms of Use - Network Pro Strategies",
      ogDescription: "Read the Terms of Use for Network Pro Strategies.",
      ogUrl: "https://netwk.pro/terms",
      ogImage: { ogImage },
      facebookVerification: false,
    },
    "privacy-policy": {
      title: "Privacy Policy | Network Pro Strategies",
      description: "Learn about the Privacy Policy for Network Pro Strategies.",
      canonical: "https://netwk.pro/privacy-policy",
      ogTitle: "Privacy Policy - Network Pro Strategies",
      ogDescription:
        "Learn about the Privacy Policy for Network Pro Strategies.",
      ogUrl: "https://netwk.pro/privacy-policy",
      ogImage: { ogImage },
      facebookVerification: false,
    },
    license: {
      title: "Legal, Copyright, and Licensing | Network Pro Strategies",
      description:
        "Read about legal, copyright, and licensing information for Network Pro Strategies.",
      canonical: "https://netwk.pro/license",
      ogTitle: "Legal, Copyright, and Licensing - Network Pro Strategies",
      ogDescription:
        "Read about legal, copyright, and licensing information for Network Pro Strategies.",
      ogUrl: "https://netwk.pro/license",
      ogImage: { ogImage },
      facebookVerification: false,
    },
  };

  // Handle hash-based routing
  if (!window.location.hash) {
    window.location.hash = "#home";
  }

  window.addEventListener("hashchange", () => {
    currentPage = window.location.hash.replace("#", "") || "home";
    window.scrollTo(0, 0); // Scroll to the top of the page
  });
</script>

<svelte:head>
  <!-- Font Awesome Script -->
  <script
    src="https://kit.fontawesome.com/f70f03cb45.js"
    crossorigin="anonymous"></script>

  <title>{metadata[currentPage]?.title || "Network Pro Strategies"}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content={metadata[currentPage]?.description || ""} />
  <link rel="canonical" href={metadata[currentPage]?.canonical || ""} />
</svelte:head>

<!-- BEGIN HEADER -->
<!-- Render Header Dynamically -->
{#if currentPage === "home"}
  <header id="header-nav">
    <ContainerSection>
      <HeaderHome />
    </ContainerSection>
  </header>
{:else}
  <header id="header-nav">
    <ContainerSection>
      <HeaderDefault />
    </ContainerSection>
  </header>
{/if}
<!-- END HEADER -->

<!-- Render Content Dynamically -->
{#if currentPage === "home"}
  <section id="home">
    <FullWidthSection>
      <!-- BEGIN TITLE -->
      <section id="site-title">
        <Logo />
      </section>
      <!-- END TITLE -->

      &nbsp;

      <hr class={hrStyle} />

      &nbsp;

      <!-- BEGIN MAIN CONTENT-->
      <section id="main-content">
        <HomeContent />
      </section>
      <!-- END MAIN CONTENT-->

      &nbsp;

      <!-- BEGIN SOCIAL MEDIA -->
      <section id="social-media">
        <SocialMedia />
      </section>
      <!-- END SOCIAL MEDIA -->

      <hr class={hrStyle} />

      &nbsp;

      <!-- BEGIN LEGAL -->
      <section id="legal-nav">
        <LegalNav />
      </section>
      <!-- END LEGAL -->

      &nbsp;

      <!-- BEGIN BADGES -->
      <section id="badges">
        <Badges />
      </section>
      <!-- END BADGES -->
    </FullWidthSection>
  </section>
{:else if currentPage === "about"}
  <section id="about">
    <FullWidthSection>
      <!-- BEGIN MAIN CONTENT -->
      <section id="main-content">
        <AboutContent />
      </section>
      <!-- END MAIN CONTENT -->

      &nbsp;

      <!-- BEGIN SOCIAL MEDIA -->
      <section id="social-media">
        <SocialMedia />
      </section>
      <!-- END SOCIAL MEDIA -->

      <hr class={hrStyle} />

      &nbsp;

      <!-- BEGIN LEGAL -->
      <section id="legal-nav">
        <LegalNav />
      </section>
      <!-- END LEGAL -->

      &nbsp;

      <!-- BEGIN BADGES -->
      <section id="badges">
        <Badges />
      </section>
      <!-- END BADGES -->
    </FullWidthSection>
  </section>
{:else if currentPage === "terms"}
  <section id="terms">
    <FullWidthSection>
      <!-- BEGIN MAIN CONTENT -->
      <section id="main-content">
        <Terms />
      </section>
      <!-- END MAIN CONTENT -->

      &nbsp;

      <!-- BEGIN SOCIAL MEDIA -->
      <section id="social-media">
        <SocialMedia />
      </section>
      <!-- END SOCIAL MEDIA -->

      <hr class={hrStyle} />

      &nbsp;

      <!-- BEGIN LEGAL -->
      <section id="legal-nav">
        <LegalNav />
      </section>
      <!-- END LEGAL -->

      &nbsp;

      <!-- BEGIN BADGES -->
      <section id="badges">
        <Badges />
      </section>
      <!-- END BADGES -->
    </FullWidthSection>
  </section>
{:else if currentPage === "privacy-policy"}
  <section id="privacy-policy">
    <FullWidthSection>
      <!-- BEGIN MAIN CONTENT -->
      <section id="main-content">
        <PrivacyPolicy />
      </section>
      <!-- END MAIN CONTENT -->

      &nbsp;

      <!-- BEGIN SOCIAL MEDIA -->
      <section id="social-media">
        <SocialMedia />
      </section>
      <!-- END SOCIAL MEDIA -->

      <hr class={hrStyle} />

      &nbsp;

      <!-- BEGIN LEGAL -->
      <section id="legal-nav">
        <LegalNav />
      </section>
      <!-- END LEGAL -->

      &nbsp;

      <!-- BEGIN BADGES -->
      <section id="badges">
        <Badges />
      </section>
      <!-- END BADGES -->
    </FullWidthSection>
  </section>
{:else if currentPage === "license"}
  <section id="license">
    <FullWidthSection>
      <License />
    </FullWidthSection>
  </section>
{:else}
  <FullWidthSection>
    <p class="error-message">
      Sorry, the page you are looking for does not exist. Please use the
      navigation menu to find your way.
    </p>
  </FullWidthSection>
{/if}

<!-- Footer -->
<footer id="licensing">
  <ContainerSection>
    <Footer />
  </ContainerSection>
</footer>

<style>
  /* General Styling */
  p {
    text-align: center;
  }

  .error-message {
    font-size: 1.2em;
    font-weight: bold;
    color: red;
    margin-top: 20px;
  }
</style>
