module.exports = {
	framework: '@storybook/svelte',
	stories: [
		'../packages/**/*.stories.mdx',
		'../packages/**/*.stories.svelte',
		'../packages/dialog/**/*.stories.svelte'
	],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf']
};
