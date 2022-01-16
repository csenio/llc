<script>
	import { fade, fly } from 'svelte/transition';
	import { crossfade, scale } from 'svelte/transition';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Close, Trigger, Portal, Content, Root, Overlay } from '..';

	let open = false;

	const [send, receive] = crossfade({
		duration: 200,
		fallback: scale
	});
</script>

<Meta title="Components/Dialog" />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	{#if !open}
		<button out:send={{ key: 'foo' }} in:receive={{ key: 'foo' }} on:click={() => (open = true)}
			>click me</button
		>
	{/if}
	{#if open}
		<div on:click={() => (open = false)} class="container">
			<div out:send={{ key: 'foo' }} in:receive={{ key: 'foo' }} class="modal">
				<h1>So Satisfying</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quidem tenetur quia? Tempora
					libero, ipsum fugiat dicta dolorum ipsam ex.
				</p>
				<button> Confirm </button>
			</div>
		</div>
	{/if}
	<!-- <Root>
    <Trigger>Open me</Trigger>
    <Portal entry={{type: fade}}>
      <Content entry={{type: fly, y: 50, duration: 200}}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eum in molestiae sit commodi nesciunt corporis
          illum culpa tenetur nemo.
        </p>
        <Close {...args} o:click={args.onClick}>close</Close>
      </Content>
    </Portal>
  </Root> -->
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Crossfade" />

<style>
	:global(body) {
		font-family: Josefin Sans;
	}
	.container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(29, 28, 36, 0.37);
		backdrop-filter: blur(5px);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		background: #fff;
		box-shadow: rgb(0 0 0 / 10%) 0px 10px 23px -3px;
		width: 50vw;
		padding: 24px;
		border-radius: 24px;
		max-width: 500px;
		max-height: 500px;
		overflow: auto;
	}

	button {
		border: none;
		background: rgb(47, 0, 255);
		transition: background 0.1s;
		color: white;
		padding: 10px 14px;
		font-weight: bold;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
	}

	button:hover {
		background: rgb(89, 0, 255);
	}

	h1 {
		color: rgb(17, 17, 17);
	}

	p {
		font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue,
			helvetica, Ubuntu, roboto, noto, arial, sans-serif;
		color: rgb(128, 128, 128);
		line-height: 1.6;
		margin-bottom: 20px;
	}
</style>
