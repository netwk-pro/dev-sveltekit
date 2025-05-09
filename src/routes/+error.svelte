<script>
  /**
   * @typedef {Object} Error
   * @property {string} [message] - The message explaining the error.
   */

  /**
   * The HTTP status code of the error (e.g., 404, 500).
   * @type {number}
   */
  export let status;

  /**
   * The error object, containing details about what went wrong.
   * @type {Error}
   */
  export let error;

  const centerText = "center-text";
</script>

<main>
  <h1 class={centerText}>{status}</h1>
  <p class={centerText}>{error?.message || "Page not found"}</p>
</main>
