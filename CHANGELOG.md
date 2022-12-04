# v0.5.2
- fix `Control` not nudging values

# v0.5.1
- fix wrong prop name in `Control`

# v0.5.0
- breaking change: all logic regarding ranges is now moved from `<ParameterGestureHandler />` to `<Control />`. this allows using `ParameterGestureHandler` without the built-in range type.
- breaking change: rename the `onStart` and `onEnd` props on `ParameterGestureHandler` to `onGestureStart` and `onGestureEnd`

# v0.4.5
- fix stepped ranges not respecting range bounds
- add `touchend` event listener to trigger `onGestureEnd` (thanks @eulervoid!)
- improve string to value conversion for choice ranges
- avoid selecting `<ValueInput>` text when releasing the mouse on top the element when it was pressed down elsewhere

# v0.4.3
- the `getStart` and `getEnd` functions now work properly with choice ranges

# v0.4.2
- fix scroll wheel doing nothing when used on controls with stepped ranges
- improve parsing values from `<ValueInput>`

# v0.4.0
- breaking change: remove duplicate `onClick` triggering `onGestureStart` in Control component (thanks @eulervoid!)
- handle selecting all text in the ValueInput component more robustly

# v0.3.1
- properly build the distributed code with Rollup

# v0.3.0
- breaking change: helper functions for creating ranges are now grouped in the `rangeCreators` namespace
- move all documentation directly in the source as TSDoc and generate the Markdown reference automatically

# v0.2.1
- improve the performance of `createSmoothedValue()` and add an optional argument for defining a threshold for when the animation should be stopped

# v0.2.0
- new: easily create knobs from image strips using `<ImageStripControl />`
- new: helper function for creating smoothly animated movement: `createSmoothedValue(value: () => number, speed = 1)`
- fix: the value jumped when pressing shift while already dragging a control

# v0.1.1
- implement alternative, more robust way of blocking user selection while a control is moved
