<script>
  /**
   * Optional: Allows passing additional classes to the container.
   * @type {string}
   */
  export let className = "";
</script>

<div class={`container ${className}`}>
  <slot></slot>
  <!-- Slot to allow child content -->
</div>
