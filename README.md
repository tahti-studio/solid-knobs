# solid-knobs

[![npm version](https://badge.fury.io/js/solid-knobs.svg)](https://badge.fury.io/js/solid-knobs)

This library provides a set of utilities for building user-friendly controls for audio parameters and the like. The utilities come without any visual styling, they only try to make the task of setting up commonly needed functionalities easier. The included JSX components are written for SolidJS and have no external dependencies.

Demo: https://tahti-studio.github.io/solid-knobs/

## Install

`npm install solid-knobs`

## Docs

Below is a reference of all the different utilities provided by `solid-knobs`. However, to get a feel for how they're actually used, please [take a look at the examples](examples/index.tsx). The examples are hosted at: https://tahti-studio.github.io/solid-knobs/

### Ranges

A `Range` specifies the range, scale and UI behaviours of a controlled value. Currently there are two types of `Range`:

#### ContinousRange

The most common type of range used for numerical values that are continous (e.g. frequency, volume etc).

```ts
interface ContinuousRange {
  // The type of a ContinuousRange is always RangeType.Continuous.
  type: RangeType.Continuous,

  // The start value of the range.
  start: number,

  // The end value of the range.
  end: number,

  // Whether the range is a bipolar one.
  bipolar?: boolean,

  // A function for converting a value with a certain unit to a value in the range.
  stringToValue?: (value: number, unit: string) => number,

  // A function for formatting a value of this range as a string.
  valueToString?: (value: number) => string,

  // The scaling of the range defines how the value is controlled in a UI.
  scale?: {
    type: Scale.Exponential,
    exp: number
  } | {
    type: Scale.Logarithmic
  } | {
    type: Scale.Linear // this is the default
  },
  
  // The values to which the user-interface control should snap.
  // Note! Always provide these values from smallest to largest.
  snap?: number[] | number,

  // How far away a value has to be from a snap point for it to snap.
  snapMargin?: number,

  // The step between values. If you want a range that allows only integer values, set this to 1.
  step?: number
}
```

#### ChoiceRange

A range that represents a finite number of choices with textual labels (think enums).

```ts
interface ChoiceRange {
  // The type of a ChoiceRange is always RangeType.Choice.
  type: RangeType.Choice,

  // A list of choices that the range contains (see Choice below).
  choices: Choice[]
}

interface Choice {
  // The numerical value of the choice.
  value: number,

  // The textual (user-friendly) representation of the choice.
  label: string,

  // Additional free-form data.
  data?: unknown
}
```

A couple of helpers are also exported for creating common ranges:

```ts
const createFrequencyRange: (start?: number, end?: number) => ContinuousRange;
const createVolumeRange: (start?: number, end?: number) => ContinuousRange;
const createPercentageRange: (start?: number, end?: number) => ContinuousRange;
const createBipolarPercentageRange: (start?: number, end?: number) => ContinuousRange;
const createAccuratePercentageRange: (start?: number, end?: number) => ContinuousRange;
const createToggleRange: (offLabel?: string, onLabel?: string) => ChoiceRange;
```

`solid-knobs` also exports a set of functions as `rangeFunctions` for working with ranges. These functions are:

```ts
/**
 * Converts `value` to a normalised value (ranging from 0 to 1) and returns it.
 */
toNormalised(range: Range, value: number): number;

/**
 * Converts a normalised `value` (ranging from 0 to 1) to it's natural range and returns it.
 */
fromNormalised(range: Range, normalisedValue: number): number;

/**
 * Parses `value` from a value and a unit and returns the value as a number.
 */
fromString(range: Range, value: number, unit: string): number;

/**
 * Converts an unnormalised `value` to a user-friendly string representation.
 */
toString(range: Range, value: number): string;

/**
 * Snaps an unnormalised `value` to the closest legal value.
 */
snap(range: Range, value: number): number;

/**
 * Returns a random un-normalised value.
 */
getRandom(range: Range): number;

/**
 * Limits an un-normalised value to be within the range.
 */
limit(range: Range, value: number): number;

/**
 * Nudges the un-normalised `value` by `steps`.
 */
nudge(range: Range, value: number, steps: number): number;

getStart(range: Range): number;
getEnd(range: Range): number;
```

The range utilities do not depend on SolidJS and they can be imported separately from `solid-knobs/range`.

Usage:
```tsx
import { ContinousRange, ChoiceRange, Scale, RangeType, createVolumeRange } from 'solid-knobs';

const frequencyRange: ContinousRange = {
  type: RangeType.Continuous,
  start: 20,
  end: 20000,
  scale: { type: Scale.Logarithmic },
  toString: v => `${v.toPrecision(2)} Hz`
};

const filterTypeRange: ChoiceRange = {
  type: RangeType.Choice,
  choices: [
    { value: 0, label: 'Low-pass' }
    { value: 1, label: 'High-pass' },
    { value: 2, label: 'Band-pass' }
  ]
};

const volumeRange = createVolumeRange(0, 1.5);
```

### ParameterGestureHandler (SolidJS component)

The `ParameterGestureHandler` component doesn't render anything itself, it simply wraps an existing element and makes it behave like a control by giving it the following abilities:

- click and drag the element up/down to change the value
- scroll on top of the element to change the value
- hold shift while changing the value to change it more precisely
- after focusing the element, the up/down/left/right arrow keys can be used to nudge the value by different increments

It also takes care of blocking user-selection on the page while dragging.

```ts
interface ParameterGestureHandlerProps {
  children: (ref: any) => any;

  // The un-normalised value.
  value: number,

  // Called with the un-normalised value.
  onChange?: (value: number) => void,

  // Called when starting the change gesture.
  onStart?: (value: number) => void,

  // Called when ending the change gesture.
  onEnd?: (value: number) => void,

  // The range of the value.
  range: Range,

  // The relative speed of the change gesture. The default is 1.
  speed?: number,

  // Whether the cursor should be hidden while changing the value.
  // Note! This might result in constant annoying pop-ups in certain browsers.
  hideCursor?: boolean
}
```

Usage:
```jsx
import { ParameterGestureHandler } from 'solid-knobs';
```

```jsx
<ParameterGestureHandler {...props}>
  {ref =>
    <div ref={ref}>
      // custom visualisation code
    </div>
  }
</ParameterGestureHandler>
```

### Control (SolidJS component)

The `Control` component implements a higher level control that covers most common use-cases and takes care of accessibility. It uses `ParameterGestureHandler` under the hood and you should probably use `Control` instead of `ParameterGestureHandler` for most cases.

```ts
// Note that ControlProps extends the ParameterGestureHandlerProps defined above.
type ControlProps =
Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> &
Omit<ParameterGestureHandlerProps, 'children'> &
{
  // The label that should be used for the aria label (for accessibility).
  label?: string;

  // The default value.
  defaultValue?: number;

  // Called when starting the change gesture.
  onGestureStart?(e: MouseEvent | TouchEvent): void;

  // Called when ending the change gesture.
  onGestureEnd?(e: MouseEvent | TouchEvent): void;

  children: any;
}
```

Usage:
```tsx
import { Control } from 'solid-knobs';
```

```tsx
<Control range={range} value={value()} onChange={setValue}>
  // your custom control visualisation goes here
</Control>
```

### ValueInput (SolidJS component)

A glorified input element that formats the value according to a range and properly handles user input.

```ts
interface ValueInputProps extends Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  // Called when the value is changed by the user.
  onChange(value: number): void;

  // The range of the value.
  range: Range;

  // The un-normalised value.
  value: number;
}
```

### Arc (SolidJS component)

Arc is a simple utility component that returns a `<path />` element for drawing an arc segment in an SVG element.

```ts
interface ArcProps extends JSX.PathSVGAttributes<SVGPathElement> {
  // The X coordinate of the arc's center.
  x: number;

  // The Y coordinate of the arc's center.
  y: number;

  // The radius of the arc.
  radius: number;

  // The start angle of the arc in degrees.
  startAngle: number;

  // The end angle of the arc in degrees.
  endAngle: number;
}
```

## Contributing

Contributions are most welcome!
