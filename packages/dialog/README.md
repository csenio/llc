## Dialog spec

- wai aria: https://www.w3.org/TR/wai-aria-practices-1.2/#alertdialog

## Requirements

- [x] mouse interactions
  - [x] opens dialog window in portal on trigger click
  - [x] closes on close button click
  - [x] closes on overlay click
- [x] keyboard interactions
  - [x] space / enter on trigger opens the dialog
  - [x] esc while in dialog closes the dialog
- [x] focus management
  - [x] places focus inside the dialog on open
    - [x] focus least destructive element by default (close button)
    - [x] allow user to choose focus element
  - [x] dialog contains tab sequence
  - [x] focus returns to trigger once dialog is closed
- [ ] side effect
  - [ ] should disable scroll on body
  - [ ] should possibly allow pinch zoom on mobile devices
- [ ] use cases & considerations
  - [ ] dialog can be styled to be centered
  - [ ] dialog can be styled to be scrollable
  - [ ] dialog position can shift between mobile / desktop view
  - [ ] dialog can be styled to be larger than the screen
  - [ ] allow all events to be triggered from the outside
  - [ ] dialog should be in front of all other elements (portal)
- [ ] animation
  - [ ] backdrop can have fade in and fade out animation
  - [ ] content can have fade in and fade out animation
  - [ ] content can have a crossfade animation
  - [ ] should not be able to interact with dialog while in closing animation
- [ ] wai aria roles
  - [ ] dialog container has `dialog` role
  - [ ] dialog container has `aria-modal` set to true
  - [ ] dialog has `aria-label` with the title
