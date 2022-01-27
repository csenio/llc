<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { FocusScope } from '../lib';
</script>

<Meta title="Utils/FocusScope" />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<button>Button 0</button>
	<FocusScope>
		<button disabled>Button 1</button>
		<div style="display: none;">
			<button>ignore this button</button>
		</div>
		<div style="visibility: hidden; width: 0px; height: 0px; display: inline;">
			<button />
		</div>
		<button>Button 2</button>
		<button>Button 3</button>
		<button>Button 4</button>
		<button>Button 5</button>
		<button>Button 6</button>
	</FocusScope>
	<button>Button 7</button>
	<button>Button 8</button>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Primary" />
