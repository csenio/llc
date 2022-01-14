<script>
  import {fade, fly} from 'svelte/transition'
  import {Meta, Template, Story} from '@storybook/addon-svelte-csf'
  import {Close, Trigger, Portal, Content, Root, Overlay} from '.'
</script>

<Meta title="Example/CounterButton" />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Root>
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
  </Root>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Primary" />
