<script>
	import { fade, fly } from 'svelte/transition';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Close, Trigger, Portal, Content, Root } from '..';
	let leastDestructiveRef;
</script>

<Meta title="Components/Dialog" />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<Root>
		<Trigger>Open me</Trigger>
		<Portal entry={{ type: fade }}>
			<Content autoFocusOnMount={leastDestructiveRef} entry={{ type: fly, y: 50, duration: 200 }}>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eum in molestiae sit
					commodi nesciunt corporis illum culpa tenetur nemo.
				</p>
				<button>Another button</button>
				<button bind:this={leastDestructiveRef}>I get focus first</button>
				<Close {...args} o:click={args.onClick}>close</Close>
			</Content>
		</Portal>
	</Root>

	<Root>
		<Trigger>Open me</Trigger>
		<Portal entry={{ type: fade }}>
			<Content entry={{ type: fly, y: 50, duration: 200 }}>
				<p>yey</p>
				<button>not focused on open</button>
				<Close {...args} o:click={args.onClick}>close</Close>
			</Content>
		</Portal>
	</Root>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Primary" />
