<script>
  import { onMount } from "svelte";

  /**
   * Table of Contents Links
   * @type {{ id: string, text: string }[]}
   */
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

  /**
   * Constants for reusable content
   * @type {{ company: string, effectiveDate: string, classSmall: string, rel: string, hrefTop: string, targetBlank: string, targetSelf: string }}
   */
  const constants = {
    company: "Network Pro Strategies",
    effectiveDate: "May 8, 2025",
    classSmall: "small-text",
    rel: "noopener noreferrer",
    hrefTop: "#top",
    targetBlank: "_blank",
    targetSelf: "_self",
  };

  /**
   * Handles smooth scrolling to anchor links.
   * @param {Event} event
   */
  const handleAnchorClick = (event) => {
    const target = event.target;
    if (target instanceof HTMLElement) {
      const anchor = target.closest("a");
      if (anchor && anchor.hash) {
        const element = document.querySelector(anchor.hash);
        if (element) {
          event.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  onMount(() => {
    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  });
</script>

<!-- BEGIN TITLE -->
<section id="top">
  <span class={constants.classSmall}>
    <a
      rel={constants.rel}
      href="https://spdx.dev/learn/handling-license-info/"
      target={constants.targetBlank}>
      SPDX License Identifier
    </a>
    : &nbsp;<code>CC-BY-4.0 OR GPL-3.0-or-later</code>
  </span>
</section>

<section id="site-title">
  <h1>Website Terms of Use</h1>
  <p>
    <strong>{constants.company}</strong><br />
    <strong>Effective Date:</strong>
    {constants.effectiveDate}
  </p>
</section>
<!-- END TITLE -->

&nbsp;

<!-- BEGIN TERMS OF USE -->
<nav id="toc">
  <h3>Table of Contents</h3>
  <ol>
    {#each tocLinks as link}
      <li><a href={"#" + link.id}>{link.text}</a></li>
    {/each}
  </ol>
</nav>

<p class="bquote">
  These Terms of Use specifically govern the use of services and platforms made
  available via this website and its associated web properties. For provisions
  governing our consulting and implementation services, please refer to the
  applicable
  <a rel={constants.rel} href="./terms-conditions" target={constants.targetSelf}
    >Terms and Conditions</a
  >.
</p>

<hr />

<section id="formats">
  <p>
    <sup>
      <strong>Formats Available:</strong> &nbsp;<span class="visited"
        >HTML</span>
      |
      <a
        rel={constants.rel}
        href="https://netwk.pro/docs/terms-use/"
        target={constants.targetSelf}>Markdown</a>
    </sup>
  </p>
</section>

<!-- POLICY SECTIONS -->
{#each tocLinks as link, i}
  <section id={link.id}>
    <h2>{i + 1}. {link.text}</h2>

    {#if link.id === "introduction"}
      <p>
        Welcome! By accessing or using any of the platforms operated by {constants.company}
        ("Company," "we," "us," or "our"), you agree to be bound by these Terms of
        Use ("Terms"). If you do not agree to these Terms, please refrain from using
        our services.
      </p>
    {:else if link.id === "platforms"}
      <p>
        These Terms of Use apply to all platforms associated with the Company,
        including but not limited to:
        <strong>
          GitHub, our main website (hosted via GitHub Pages), communications on
          Discord and/or Slack, Stack Overflow Teams, Nextcloud, and our social
          media presence (e.g., Facebook, Instagram, X, and similar platforms).
        </strong>
      </p>
    {:else if link.id === "acceptable-use"}
      <p>
        You agree not to use our platforms or services to engage in conduct that
        is
        <strong>
          unlawful, abusive, threatening, harassing, defamatory, deceptive, or
          otherwise objectionable
        </strong>. Prohibited activities include but are not limited to:
      </p>
      <ul>
        <li>Unauthorized access or tampering with systems</li>
        <li>Impersonation or misrepresentation</li>
        <li>Uploading malicious code or spam</li>
        <li>Violating third-party rights or laws</li>
        <li>Interfering with platform functionality or availability</li>
      </ul>
    {:else if link.id === "warranty"}
      <p>
        Our platforms and services are provided "as is" and "as available,"
        without any express or implied warranties. We make no guarantees
        regarding their accuracy, reliability, availability, or security. This
        disclaimer does not apply to our consulting and implementation services,
        nor any payment portals or associated services.
      </p>
    {:else if link.id === "risk"}
      <p>
        Your use of our platforms is at your own risk. We do not guarantee the
        security, integrity, or reliability of data stored on external or
        third-party infrastructure. This disclaimer does not apply to our
        consulting and implementation services, nor any payment portals or
        associated services.
      </p>
    {:else if link.id === "liability"}
      <p>
        To the fullest extent permitted by law, the Company, its affiliates,
        owners, operators, and contributors shall not be liable for any direct,
        indirect, incidental, consequential, or punitive damages, including but
        not limited to data loss, loss of profits, or damages arising from
        reliance on or use of our platforms.
      </p>
    {:else if link.id === "indemnification"}
      <p>
        You agree to indemnify, defend, and hold harmless the Company, its
        affiliates, owners, operators, and contributors from any claims,
        damages, liabilities, losses, or expenses (including legal fees) arising
        from or related to your use of our services.
      </p>
    {:else if link.id === "jurisdiction"}
      <p>
        {constants.company} is based in Maricopa County, Arizona. Any legal action
        or dispute arising from these Terms of Use shall be subject to the exclusive
        jurisdiction of the state and federal courts located in Maricopa County,
        Arizona. These Terms shall be governed by the
        <strong>Arizona Revised Statutes (A.R.S.)</strong> and applicable
        provisions of the <strong>United States Code (U.S.C.)</strong>.
      </p>
    {:else if link.id === "acceptance"}
      <p>
        By accessing or using our platforms, you acknowledge and agree to these
        Terms of Use. Continued use of our services constitutes ongoing
        acceptance of these Terms.
      </p>
    {:else if link.id === "changes"}
      <p>
        We may update these Terms of Use periodically. Updates will be posted on
        this page with an updated effective date and will reflect any relevant
        changes in applicable law.
      </p>
    {/if}

    <span class={constants.classSmall}
      ><a href={constants.hrefTop}>Back to top</a></span>
  </section>
{/each}

<section id="moredetails">
  <p class="bquote">
    <strong>Note:</strong> For more details regarding our privacy practices,
    refer to our
    <a rel={constants.rel} href="./privacy-policy" target={constants.targetSelf}
      >Privacy Policy</a
    >. For licensing terms and content usage rights, please visit our
    <a rel={constants.rel} href="./license" target={constants.targetSelf}
      >Legal, Copyright, and Licensing</a>
    page.
  </p>
</section>
<!-- END TERMS OF USE -->
