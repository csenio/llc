<script>
	import { getContext } from 'svelte';
	import { FocusScope } from 'focus-scope';
	export let entry;
	export let autoFocusOnMount;

	const { state } = getContext('dialog');

	let transition = entry.type || entry;

	$: safestAutoFocus = autoFocusOnMount || $state.context.elements.close;
</script>

<div in:transition={entry}>
	<FocusScope
		autoFocusOnMount={safestAutoFocus}
		autoFocusOnUnMount={$state.context.elements.trigger}
	>
		<slot />
	</FocusScope>
</div>

<style>
	div {
		background: #fff;
	}
</style>
