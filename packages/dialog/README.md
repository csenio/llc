## Dialog spec

- wai aria: https://www.w3.org/TR/wai-aria-practices-1.2/#alertdialog

## Requirements

- [] mouse interactions
  - [] opens dialog window in portal on trigger click
  - [] closes on close button click
- [] keyboard interactions
  - []
- [] focus management
  - [] places focus inside the dialog on open
    - [] focus least destructive element by default (close button)
    - [] allow user to choose focus element
  - [] dialog contains tab sequence
  - [] focus returns to trigger once dialog is closed
- [] side effect
  - [] should disable scroll on body
  - [] should possibly allow pinch zoom on mobile devices
- [] use cases & considerations
  - [] dialog can be styled to be centered
  - [] dialog can be styled to be scrollable
  - [] dialog position can shift between mobile / desktop view
  - [] dialog can be styled to be larger than the screen
  - [] dialog can have an entry and exit animation
- [] wai aria roles
  - [] dialog container has `dialog` role
  - [] dialog container has `aria-modal` set to true
  - [] dialog has `aria-label` with the title
