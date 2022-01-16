<script>
	import { getContext } from 'svelte';
	let element;
	export let entry;

	let transition = entry.type || entry;

	const { state, send } = getContext('dialog');

	function handleKeyDown(e) {
		send('KEYDOWN', { key: e.key });
	}

	function handleOverlayMouseDown(e) {
		if (e.target === element) {
			send('OVERLAY_MOUSEDOWN');
		}
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

{#if $state.matches('open')}
	<div bind:this={element} on:mousedown={handleOverlayMouseDown} data-foo in:transition={entry}>
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
