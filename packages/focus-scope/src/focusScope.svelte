<script>
  export let loop = true
  let container

  // "inspired" by radix ui
  function focus(element, {select = false} = {}) {
    // only focus if that element is focusable
    if (element && element.focus) {
      const previouslyFocusedElement = document.activeElement
      // NOTE: we prevent scrolling on focus, to minimize jarring transitions for users
      element.focus({preventScroll: true})
      // only select if its not the same element, it supports selection and we need to select
      if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select()
    }
  }

  function isHidden(node, {upTo}) {
    if (getComputedStyle(node).visibility === 'hidden') return true
    while (node) {
      // we stop at `upTo` (excluding it)
      if (upTo !== undefined && node === upTo) return false
      if (getComputedStyle(node).display === 'none') return true
      node = node.parentElement
    }
    return false
  }

  function handleKeyDown(e) {
    const isTabKey = e.key === 'Tab' && !e.altKey && !e.ctrlKey && !e.metaKey
    const focusedElement = document.activeElement

    if (isTabKey && focusedElement) {
      const focusableCandidates = container.querySelectorAll(
        'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )

      const candidates = [...focusableCandidates].filter(el => !isHidden(el, {upTo: container}))
      const first = candidates[0]
      const last = candidates[candidates.length - 1]

      const hasTabbableElementsInside = first && last

      // we can only wrap focus if we have tabbable edges
      if (!hasTabbableElementsInside) {
        if (focusedElement === container) e.preventDefault()
      } else {
        if (!e.shiftKey && focusedElement === last) {
          e.preventDefault()
          if (loop) focus(first, {select: true})
        } else if (e.shiftKey && focusedElement === first) {
          e.preventDefault()
          if (loop) focus(last, {select: true})
        }
      }
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div tabindex="-1" bind:this={container}>
  <slot />
</div>

<style>
  div {
    border: 1px solid red;
  }
</style>
