<script>
  import {getContext} from 'svelte'
  export let entry

  let transition = entry.type || entry

  const {state} = getContext('dialog')
</script>

{#if $state.matches('open')}
  <div in:transition={entry}>
    <slot />
  </div>
{/if}

<style>
  div {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
