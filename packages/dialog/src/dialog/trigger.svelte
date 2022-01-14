<script>
  import {getContext} from 'svelte'

  let {send} = getContext('dialog')

  function handleClick() {
    send('TRIGGER_CLICK')
  }
</script>

<button on:click={handleClick}><slot /></button>
