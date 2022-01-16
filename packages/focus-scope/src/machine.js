import { createMachine } from 'xstate';

const dialogMachine = createMachine(
	{
		id: 'dialog',
		initial: 'closed',
		states: {
			open: {
				on: {
					CLOSE_MOUSEDOWN: 'closed',
					OVERLAY_MOUSEDOWN: 'closed',
					KEYDOWN: [
						// {
						//   actions: 'focusNext',
						//   cond: 'isArrowDown',
						// },
						// {
						//   actions: 'focusPrevious',
						//   cond: 'isArrowUp',
						// },
						{
							target: 'closed',
							cond: 'isEscapeKey'
						}
					]
				}
			},
			closed: {
				on: {
					TRIGGER_CLICK: 'open'
				}
			}
		}
	},
	{
		guards: {
			isArrowDown: (ctx, evt) => evt.key === 'ArrowDown',
			isArrowUp: (ctx, evt) => evt.key === 'ArrowUp',
			isEscapeKey: (ctx, evt) => evt.key === 'Escape',
			isTriggerKey: (ctx, evt) => ['Enter', ' '].includes(evt.key)
		}
	}
);

export { dialogMachine };
