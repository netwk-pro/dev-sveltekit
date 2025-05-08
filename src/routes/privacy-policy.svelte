<script>
  import { onMount } from "svelte";

  // Define constants for reusable data
  const tocLinks = [
    { id: "intro", text: "Introduction" },
    { id: "collect", text: "Information We Collect" },
    { id: "payment", text: "Payment Information" },
    { id: "use", text: "Use of Information" },
    { id: "sharing", text: "Data Sharing" },
    { id: "security", text: "Data Security" },
    { id: "rights", text: "User Rights" },
    { id: "third-party", text: "Third-Party Links" },
    { id: "disclaimers", text: "Disclaimers and Limitations" },
    { id: "changes", text: "Policy Changes" },
    { id: "contact", text: "Contact" },
  ];

  const contactInfo = {
    company: "Network Pro Strategies",
    email: "support (at) neteng.pro",
    phone: "(623) 252-4350",
    effectiveDate: "May 7, 2025",
  };

  let classSmall = "small-text";
  let rel = "noopener noreferrer";
  let backTop = "Back to top";
  let hrefTop = "#top";
  let targetSelf = "_self";
  let targetBlank = "_blank";

  onMount(() => {
    // Intercept click events on anchor links and perform smooth scrolling
    const handleAnchorClick = (event) => {
      const target = event.target.closest("a");
      if (!target || !target.hash) return;

      const element = document.querySelector(target.hash);
      if (element) {
        event.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  });
</script>

<!-- BEGIN TITLE -->
<section id="top">
  <span class={classSmall}>
    <a
      {rel}
      href="https://spdx.dev/learn/handling-license-info/"
      target={targetBlank}>SPDX License Identifier</a
    >:&nbsp;<code>CC-BY-4.0 OR GPL-3.0-or-later</code>
  </span>
</section>

<section id="page-title">
  <h1>Privacy Policy</h1>
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
      <li><a href={"#" + link.id}>{link.text}</a></li>
    {/each}
  </ol>
</nav>

<hr />

<section id="formats">
  <p>
    <strong>Formats Available:</strong>&nbsp;<span class="visited">HTML</span>
    |
    <a {rel} href="https://netwk.pro/docs/privacy/" target={targetSelf}
      >Markdown</a>
  </p>
</section>

<section id="intro">
  <h2>1. Introduction</h2>
  <p>
    Network Pro Strategies ("Company," "we," "us," or "our") is committed to
    protecting the privacy of clients and website visitors. This Privacy Policy
    outlines how we collect, use, and safeguard your information when you
    interact with our website or services, consistent with applicable U.S.
    federal law and Arizona law, including Title 18, Chapter 5, Article 4 of the
    <strong
      ><a {rel} href="https://www.azleg.gov/arstitle/" target={targetBlank}
        >Arizona Revised Statutes</a
      ></strong
    >.
  </p>
  <span class={classSmall}><a href={hrefTop}>{backTop}</a></span>
</section>

<section id="collect">
  <h2>2. Information We Collect</h2>
  <ul>
    <li
      ><strong>Personal Identifiers</strong> (e.g., name, email, phone number)</li>
    <li><strong>Business and Professional Information</strong></li>
    <li
      ><strong>Device/Technical Information</strong> (e.g., IP address, browser type,
      access logs)</li>
    <li><strong>Client-Submitted Content</strong> related to our services</li>
  </ul>
  <span class={classSmall}><a href={hrefTop}>{backTop}</a></span>
</section>

<section id="payment">
  <h2>3. Payment Information</h2>
  <p>
    When processing payments, we may collect credit card details and billing
    contact information. All credit card data is encrypted via TLS and shared
    only with PCI-compliant processors.
    <strong>Data is purged within 90 days post-verification of payment.</strong>
  </p>
  <sub><a href={hrefTop}>{backTop}</a></sub>
</section>

<section id="use">
  <h2>4. Use of Information</h2>
  <p>Information is used to:</p>
  <ul>
    <li><strong>Provide and improve services</strong></li>
    <li><strong>Respond to inquiries and fulfill contracts</strong></li>
    <li><strong>Conduct analytics and enhance user experience</strong></li>
    <li><strong>Ensure legal and regulatory compliance</strong></li>
  </ul>
  <span class={classSmall}><a href={hrefTop}>{backTop}</a></span>
</section>

<section id="sharing">
  <h2>5. Data Sharing</h2>
  <p>
    We do not sell personal information. However, we may share personal and
    business information under the following circumstances:
  </p>
  <ul>
    <li
      ><strong>With Service Providers:</strong> We may share information with trusted
      third-party vendors—under binding agreements—who support our business operations.
      These include, but are not limited to, services such as payment processing,
      analytics, hosting, and customer support. These providers are authorized to
      use your information only as necessary to perform their contractual obligations.</li>
    <li
      ><strong>Legal Compliance:</strong> We may disclose information if required
      to do so by applicable law, regulation, legal process, or enforceable governmental
      request, including subpoenas or court orders.</li>
    <li
      ><strong>Business Transfers:</strong> In connection with a merger, acquisition,
      asset sale, or similar corporate transaction, we may disclose or transfer personal
      information, provided that reasonable steps are taken to ensure continued confidentiality
      and compliance with applicable privacy laws.</li>
  </ul>
  <span class={classSmall}><a href={hrefTop}>{backTop}</a></span>
</section>

<section id="security">
  <h2>6. Data Security</h2>
  <p>
    We implement industry-standard security measures to protect your data.
    However, no method of transmission over the Internet or electronic storage
    is completely secure, and we cannot guarantee absolute security. In
    compliance with <strong>A.R.S. § 18-552</strong>, we will notify affected
    individuals in the event of a data breach involving personal information.
  </p>
  <span class={classSmall}><a href={hrefTop}>{backTop}</a></span>
</section>

<section id="rights">
  <h2>7. User Rights</h2>
  <p><strong>Your Rights and Choices</strong></p>
  <p>Under applicable state and federal law, you may have rights to:</p>
  <ul>
    <li
      ><strong>Access, update, or delete</strong> your personal information, subject
      to legal and contractual limitations.</li>
    <li
      ><strong>Restrict or object to processing</strong> under certain conditions,
      as permitted by law.</li>
    <li><strong>Opt out of direct marketing</strong></li>
  </ul>
  <p>
    To exercise these rights, please use our <a
      {rel}
      href="https://privacy.neteng.pro"
      target={targetBlank}>Privacy Rights Request Form</a>
    or email us at <code>{contactInfo.email}</code>.
  </p>
  <span class={classSmall}><a href={hrefTop}>{backTop}</a></span>
</section>

<section id="third-party">
  <h2>8. Third-Party Links</h2>
  <p>
    Our site may contain links to third-party sites. We are not responsible for
    their privacy practices.
  </p>
  <span class={classSmall}><a href={hrefTop}>{backTop}</a></span>
</section>

<section id="disclaimers">
  <h2>9. Disclaimers and Limitations</h2>
  <p>
    Network Pro Strategies offers informational content as a public service. No
    warranties are made regarding the accuracy or completeness of such content.
    Consulting services are governed by separate contracts. We disclaim
    liability for third-party services integrated or referenced.
  </p>
  <span class={classSmall}><a href={hrefTop}>{backTop}</a></span>
</section>

<section id="changes">
  <h2>10. Policy Changes</h2>
  <p>
    We may update this policy periodically. Changes are effective upon posting.
  </p>
  <span class={classSmall}><a href={hrefTop}>{backTop}</a></span>
</section>

<section id="contact">
  <h2>11. Contact</h2>
  <p>For questions, contact:</p>
  <p>
    <strong>{contactInfo.company}</strong><br />
    📧 Email: <code>{contactInfo.email}</code><br />
    📞 Phone: {contactInfo.phone}
  </p>
  <span class={classSmall}><a href={hrefTop}>{backTop}</a></span>
</section>
<!-- END MAIN CONTENT -->
