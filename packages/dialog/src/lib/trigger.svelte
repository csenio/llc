<script>
	import { getContext } from 'svelte';

	let { send } = getContext('dialog');

	let triggerRef;
	$: send('ELEM_INIT', { element: triggerRef, name: 'trigger' });

	function handleClick() {
		send('TRIGGER_CLICK');
	}
</script>

<button bind:this={triggerRef} on:click={handleClick}><slot /></button>
