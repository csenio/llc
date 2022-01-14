<script>
  import {Meta, Template, Story} from '@storybook/addon-svelte-csf'
  import {Close, Trigger, Container, Content, Root} from '.'
</script>

<Meta title="Example/CounterButton" />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Root>
    <Trigger>Open me</Trigger>
    <Container>
      <Content>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eum in molestiae sit commodi nesciunt corporis
          illum culpa tenetur nemo.
        </p>
        <Close {...args} o:click={args.onClick}>close</Close>
      </Content>
    </Container>
  </Root>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Primary" />
