<script>
  /**
   * @type {string[]} - An array of feature strings
   */
  export let features = [];
</script>

{#if features && features.length > 0}
  <ul>
    {#each features as feature}
      <li>{feature}</li>
    {/each}
  </ul>
{/if}
