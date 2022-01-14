<script>
  import {getContext} from 'svelte'
  import {FocusScope} from 'focus-scope'
  export let entry

  let transition = entry.type || entry

  const {state} = getContext('dialog')
</script>

<div in:transition={entry}>
  <FocusScope>
    <slot />
  </FocusScope>
</div>

<style>
  div {
    background: #fff;
  }
</style>
