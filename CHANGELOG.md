# v0.4.1
- fix scroll whell doing nothing when used on controls with stepped ranges

# v0.4.0
- breaking change: remove duplicate onClick triggering onGestureStart in Control component (thanks @eulervoid!)
- handle selecting all text in the ValueInput component more robustly

# v0.3.1
- properly build the distributed code with Rollup

# v0.3.0
- BREAKING: helper functions for creating ranges are now grouped in the `rangeCreators` namespace
- move all documentation directly in the source as TSDoc and generate the Markdown reference automatically

# v0.2.1
- improve the performance of `createSmoothedValue()` and add an optional argument for defining a threshold for when the animation should be stopped

# v0.2.0
- new: easily create knobs from image strips using `<ImageStripControl />`
- new: helper function for creating smoothly animated movement: `createSmoothedValue(value: () => number, speed = 1)`
- fix: the value jumped when pressing shift while already dragging a control

# v0.1.1
- implement alternative, more robust way of blocking user selection while a control is moved
