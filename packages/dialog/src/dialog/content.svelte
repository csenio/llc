<script>
  import {getContext} from 'svelte'
  export let entry

  let transition = entry.type || entry

  const {state} = getContext('dialog')
</script>

<div in:transition={entry}>
  <slot />
</div>

<style>
  div {
    background: #fff;
  }
</style>
