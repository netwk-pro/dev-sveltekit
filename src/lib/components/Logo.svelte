<script>
  import logoSrc from "$lib/img/logo-transparent.png";

  /**
   * Decoding mode for the image.
   * @type {"sync"}
   */
  let decoding = "sync";

  /**
   * Loading mode for the image.
   * @type {"eager"}
   */
  let loading = "eager";

  /**
   * CSS class for the logo image.
   * @type {string}
   */
  let className = "logo";

  /**
   * Source of the logo image.
   * @type {string}
   */
  let src = logoSrc;

  /**
   * Alt text for the logo image.
   * @type {string}
   */
  let alt = "Network Pro Strategies";

  /**
   * First part of the company slogan.
   * @type {string}
   */
  let sloganA = "Locking Down Networks";

  /**
   * Second part of the company slogan.
   * @type {string}
   */
  let sloganB = "Unlocking Confidence™";
</script>

<!-- BEGIN LOGO AND SITE TITLE -->
<img
  {decoding}
  {loading}
  class={className}
  {src}
  {alt}
  fetchpriority="high"
  style="width: 250px; height: 250px" />

<div class="index-title1">
  {sloganA}<br />
  {sloganB}
</div>

<div class="spacer"></div>

<h2 class="index-title2">Security | Networking | Privacy</h2>
<!-- END LOGO AND SITE TITLE -->
