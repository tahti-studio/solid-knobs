# v0.2.0 (unreleased)
- new: easily create knobs from image strips using `<ImageKnob />`
- new: helper function for creating smoothly animated movement: `createSmoothedValue(value: () => number, speed = 1)`
- fix: the value jumped when pressing shift while already dragging a control

# v0.1.1
- implement alternative, more robust way of blocking user selection while a control is moved
