// safer alternative to `element.focus()`
// "inspired" by radix-ui

function isSelectableInput(element) {
	return element instanceof HTMLInputElement && 'select' in element;
}
export function focus(element, { select = false } = {}) {
	// only focus if that element is focusable
	if (element && element.focus) {
		const previouslyFocusedElement = document.activeElement;
		// NOTE: we prevent scrolling on focus, to minimize jarring transitions for users
		element.focus({ preventScroll: true });
		// only select if its not the same element, it supports selection and we need to select
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
			element.select();
	}
}
