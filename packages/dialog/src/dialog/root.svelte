<script>
  import {setContext} from 'svelte'
  import {useMachine} from '@xstate/svelte'
  import {dialogMachine} from '../machine'

  const {state, send} = useMachine(dialogMachine)

  setContext('dialog', {state, send})
</script>

<slot />
