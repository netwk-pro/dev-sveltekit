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
</script>

<main>
  <h1>{status}</h1>
  <p>{error?.message || "Page not found"}</p>
</main>
