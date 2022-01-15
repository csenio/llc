<script>
  import {getContext} from 'svelte'

  let {send} = getContext('dialog')

  let closeRef
  $: send('ELEM_INIT', {element: closeRef, name: 'close'})

  function handleClick() {
    send('CLOSE_MOUSEDOWN')
  }
</script>

<button data-laudis-close bind:this={closeRef} on:click={handleClick}><slot /></button>
