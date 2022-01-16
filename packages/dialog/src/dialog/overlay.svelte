<script>
	import { getContext } from 'svelte';
	export let entry;

	let transition = entry.type || entry;

	const { state, send } = getContext('dialog');

	function handleKeyDown(e) {
		console.log(e.target);
	}
</script>

{#if $state.matches('open')}
	<div on:keydown={handleKeyDown} in:transition={entry} />
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
