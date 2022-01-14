import {createMachine} from 'xstate'

const dialogMachine = createMachine({
  id: 'dialog',
  initial: 'closed',
  states: {
    open: {
      on: {
        CLOSE_MOUSEDOWN: 'closed',
      },
    },
    closed: {
      on: {
        TRIGGER_MOUSEDOWN: 'open',
      },
    },
  },
})

export {dialogMachine}
