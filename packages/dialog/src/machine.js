import { createMachine, assign } from 'xstate';

const dialogMachine = createMachine(
	{
		context: {
			elements: null
		},
		id: 'dialog',
		initial: 'closed',
		states: {
			open: {
				on: {
					CLOSE_MOUSEDOWN: 'closed',
					OVERLAY_MOUSEDOWN: 'closed',
					KEYDOWN: [
						{
							target: 'closed',
							cond: 'isEscapeKey'
						}
					],
					ELEM_INIT: {
						actions: assign({
							elements: (ctx, evt) => ({ ...ctx.elements, [evt.name]: evt.element })
						})
					}
				}
			},
			closed: {
				on: {
					TRIGGER_CLICK: 'open',
					ELEM_INIT: {
						actions: assign({
							elements: (ctx, evt) => ({ ...ctx.elements, [evt.name]: evt.element })
						})
					}
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
