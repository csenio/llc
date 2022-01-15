<script>
  import {onDestroy, onMount, tick} from 'svelte'
  import {focus} from 'utils'
  export let loop = true
  export let autoFocusOnMount = true
  export let autoFocusOnUnMount
  let container

  function getFocusEdges() {
    const focusableCandidates = container.querySelectorAll(
      'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )

    const candidates = [...focusableCandidates].filter(el => !isHidden(el, {upTo: container}))
    const first = candidates[0]
    const last = candidates[candidates.length - 1]

    return {first, last}
  }

  onMount(async () => {
    await tick()
    const {first} = getFocusEdges()
    const shouldAutoFocus = autoFocusOnMount !== false
    // focus first child by default
    let autoFocusCandidate = first
    if (autoFocusOnMount && autoFocusOnMount.focus) {
      autoFocusCandidate = autoFocusOnMount
    }
    if (shouldAutoFocus && autoFocusCandidate) {
      focus(autoFocusCandidate, {select: true})
    }
  })

  onDestroy(() => {
    if (autoFocusOnUnMount && autoFocusOnUnMount.focus) {
      focus(autoFocusOnUnMount, {select: true})
    }
  })

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
      const {first, last} = getFocusEdges()
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
