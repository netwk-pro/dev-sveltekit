<script lang="ts">
  // Constants for reusable data
  const tocLinks = [
    { id: "introduction", text: "Introduction" },
    { id: "platforms", text: "Platforms Covered" },
    { id: "acceptable-use", text: "Acceptable Use" },
    { id: "warranty", text: "Disclaimer of Warranties" },
    { id: "risk", text: "Assumption of Risk" },
    { id: "liability", text: "Limitation of Liability" },
    { id: "indemnification", text: "Indemnification" },
    { id: "jurisdiction", text: "Governing Law and Jurisdiction" },
    { id: "acceptance", text: "Acceptance of Terms" },
    { id: "changes", text: "Changes to This Policy" },
  ];

  const contactInfo = {
    company: "Network Pro Strategies",
    effectiveDate: "April 18, 2025",
  };

  let rel = "noopener noreferrer";
  let backTop = "Back to top";
  let classSmall = "small-text";
  let hrefTop = "#top"; // Define reusable href for "Back to top"

  // Function to handle smooth scrolling to specific sections
  const scrollToSection = (id) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to distinguish between internal and external links
  const handleLinkClick = (event, url) => {
    event.preventDefault();

    if (url.startsWith("#")) {
      // Handle hash-based navigation (in-page)
      const id = url.substring(1); // Remove the '#' character
      scrollToSection(id);
    } else if (url.startsWith("http") || url.startsWith("//")) {
      // Open external links in a new tab
      window.open(url, "_blank", rel);
    } else {
      // For relative paths (e.g., ./terms-and-conditions.html), navigate normally
      window.location.href = url;
    }
  };
</script>

<!-- BEGIN TITLE -->
<section id="top">
  <span class={classSmall}>
    <a
      href="https://spdx.dev/learn/handling-license-info/"
      on:click={(event) =>
        handleLinkClick(
          event,
          "https://spdx.dev/learn/handling-license-info/"
        )}>
      SPDX License Identifier
    </a>
    : &nbsp;<code>CC-BY-4.0 OR GPL-3.0-or-later</code>
  </span>
</section>

<section id="site-title">
  <h1>Website Terms of Use</h1>
  <p>
    <strong>{contactInfo.company}</strong><br />
    <strong>Effective Date:</strong>
    {contactInfo.effectiveDate}
  </p>
</section>
<!-- END TITLE -->

&nbsp;

<h3>Table of Contents</h3>
<nav id="toc">
  <ol>
    {#each tocLinks as link}
      <li>
        <a
          href={"#" + link.id}
          on:click={(event) => handleLinkClick(event, "#" + link.id)}>
          {link.text}
        </a>
      </li>
    {/each}
  </ol>
</nav>

<p class="bquote">
  These Terms of Use specifically govern the use of services and platforms made
  available via this website and its associated web properties. For provisions
  governing our consulting and implementation services, please refer to the
  applicable
  <a
    href="./terms-and-conditions.html"
    on:click={(event) => handleLinkClick(event, "./terms-and-conditions.html")}
    >Terms and Conditions</a
  >.
</p>

<hr />

<section id="formats">
  <p>
    <strong>Formats Available:</strong> &nbsp;<span class="visited">HTML</span>
    |
    <a
      href="https://netwk.pro/docs/terms-use/"
      on:click={(event) =>
        handleLinkClick(event, "https://netwk.pro/docs/terms-use/")}
      >Markdown</a>
  </p>
</section>

<section id="introduction">
  <h2>1. Introduction</h2>
  <p>
    Welcome! By accessing or using any of the platforms operated by Network Pro
    Strategies ("Company," "we," "us," or "our"), you agree to be bound by these
    Terms of Use ("Terms"). If you do not agree to these Terms, please refrain
    from using our services.
  </p>
  <span class={classSmall}>
    <a href={hrefTop} on:click|preventDefault={scrollToTop}>{backTop}</a>
  </span>
</section>

<section id="platforms">
  <h2>2. Platforms Covered</h2>
  <p>
    These Terms of Use apply to all platforms associated with the Company,
    including but not limited to:
    <strong
      >GitHub, our main website (hosted via GitHub Pages), communications on
      Discord and/or Slack, Stack Overflow Teams, Nextcloud, and our social
      media presence (e.g., Facebook, Instagram, X, and similar platforms).</strong>
  </p>
  <span class={classSmall}>
    <a href={hrefTop} on:click|preventDefault={scrollToTop}>{backTop}</a>
  </span>
</section>

<section id="acceptable-use">
  <h2>3. Acceptable Use</h2>
  <p>
    You agree not to use our platforms or services to engage in conduct that is
    <strong
      >unlawful, abusive, threatening, harassing, defamatory, deceptive, or
      otherwise objectionable</strong
    >. Prohibited activities include but are not limited to:
  </p>
  <ul>
    <li>Unauthorized access or tampering with systems</li>
    <li>Impersonation or misrepresentation</li>
    <li>Uploading malicious code or spam</li>
    <li>Violating third-party rights or laws</li>
    <li>Interfering with platform functionality or availability</li>
  </ul>
  <span class={classSmall}>
    <a href={hrefTop} on:click|preventDefault={scrollToTop}>{backTop}</a>
  </span>
</section>

<section id="warranty">
  <h2>4. Disclaimer of Warranties</h2>
  <p>
    Our platforms and services are provided "as is" and "as available," without
    any express or implied warranties. We make no guarantees regarding their
    accuracy, reliability, availability, or security. This disclaimer does not
    apply to our consulting and implementation services, nor any payment portals
    or associated services.
  </p>
  <span class={classSmall}>
    <a href={hrefTop} on:click|preventDefault={scrollToTop}>{backTop}</a>
  </span>
</section>

<section id="risk">
  <h2>5. Assumption of Risk</h2>
  <p>
    Your use of our platforms is at your own risk. We do not guarantee the
    security, integrity, or reliability of data stored on external or
    third-party infrastructure. This disclaimer does not apply to our consulting
    and implementation services, nor any payment portals or associated services.
  </p>
  <span class={classSmall}>
    <a href={hrefTop} on:click|preventDefault={scrollToTop}>{backTop}</a>
  </span>
</section>

<section id="liability">
  <h2>6. Limitation of Liability</h2>
  <p>
    To the fullest extent permitted by law, the Company, its affiliates, owners,
    operators, and contributors shall not be liable for any direct, indirect,
    incidental, consequential, or punitive damages, including but not limited to
    data loss, loss of profits, or damages arising from reliance on or use of
    our platforms.
  </p>
  <span class={classSmall}>
    <a href={hrefTop} on:click|preventDefault={scrollToTop}>{backTop}</a>
  </span>
</section>

<section id="indemnification">
  <h2>7. Indemnification</h2>
  <p>
    You agree to indemnify, defend, and hold harmless the Company, its
    affiliates, owners, operators, and contributors from any claims, damages,
    liabilities, losses, or expenses (including legal fees) arising from or
    related to your use of our services.
  </p>
  <span class={classSmall}>
    <a href={hrefTop} on:click|preventDefault={scrollToTop}>{backTop}</a>
  </span>
</section>

<section id="jurisdiction">
  <h2>8. Governing Law and Jurisdiction</h2>
  <p>
    Network Pro Strategies is based in Maricopa County, Arizona. Any legal
    action or dispute arising from these Terms of Use shall be subject to the
    exclusive jurisdiction of the state and federal courts located in Maricopa
    County, Arizona. These Terms shall be governed by the
    <strong>Arizona Revised Statutes (A.R.S.)</strong> and applicable provisions
    of the <strong>United States Code (U.S.C.)</strong>.
  </p>
  <span class={classSmall}>
    <a href={hrefTop} on:click|preventDefault={scrollToTop}>{backTop}</a>
  </span>
</section>

<section id="acceptance">
  <h2>9. Acceptance of Terms</h2>
  <p>
    By accessing or using our platforms, you acknowledge and agree to these
    Terms of Use. Continued use of our services constitutes ongoing acceptance
    of these Terms.
  </p>
  <span class={classSmall}>
    <a href={hrefTop} on:click|preventDefault={scrollToTop}>{backTop}</a>
  </span>
</section>

<section id="changes">
  <h2>10. Changes to This Policy</h2>
  <p>
    We may update these Terms of Use periodically. Updates will be posted on
    this page with an updated effective date and will reflect any relevant
    changes in applicable law.
  </p>
  <span class={classSmall}>
    <a href={hrefTop} on:click|preventDefault={scrollToTop}>{backTop}</a>
  </span>
</section>

&nbsp;

<section id="moredetails">
  <p class="bquote">
    <strong>Note:</strong> For more details regarding our privacy practices,
    refer to our
    <a
      href="#privacy-policy"
      on:click={(event) => handleLinkClick(event, "#privacy-policy")}
      >Privacy Policy</a
    >. For licensing terms and content usage rights, please visit our
    <a
      href="https://netwk.pro/legal.html"
      on:click={(event) =>
        handleLinkClick(event, "https://netwk.pro/legal.html")}
      >Legal, Copyright, and Licensing</a> page.
  </p>
</section>
