# v0.2.1
- improve the performance of `createSmoothedValue()` and add an optional argument for defining a threshold for when the animation should be stopped

# v0.2.0
- new: easily create knobs from image strips using `<ImageStripControl />`
- new: helper function for creating smoothly animated movement: `createSmoothedValue(value: () => number, speed = 1)`
- fix: the value jumped when pressing shift while already dragging a control

# v0.1.1
- implement alternative, more robust way of blocking user selection while a control is moved
