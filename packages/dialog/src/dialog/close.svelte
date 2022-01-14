<script>
  import {getContext} from 'svelte'

  let {send} = getContext('dialog')

  function handleClick() {
    send('CLOSE_MOUSEDOWN')
  }
</script>

<button on:click={handleClick}><slot /></button>
