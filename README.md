# solid-knobs

[![npm version](https://badge.fury.io/js/solid-knobs.svg)](https://badge.fury.io/js/solid-knobs)

WIP

This library provides a set of utilities for building user-friendly controls for audio parameters and the like. The utilities come without any styling, they only provide means for setting up most commonly used functionalities. The components are written for SolidJS and have no external dependencies. 

Check out the examples at https://tahti-studio.github.io/solid-knobs/

## Install
`npm install solid-knobs`

## Docs

### Ranges

A `Range` specifies the range and scale of a value, and how a value should be formatted for the user. Currently there are two classes that implement the `Range` interface:

- `ContinuousRange`: the most common type of range used for numerical values that are continous (e.g. frequency, volume etc)
- `ChoiceRange`: a range that represents a finite number of choices with textual labels (e.g. type of filter)

A couple of helpers are also exported for creating some of the most common range types: `createFrequencyRange`, `createVolumeRange`, `createPercentageRange` and `createAccuratePercentageRange`.

The range utilities do not depend on SolidJS and they can be imported separately from `solid-knobs/range`.

#### ContinousRange

TODO

#### ChoiceRange

TODO

Usage:
```tsx
import { ContinousRange, ChoiceRange, Scale } from 'solid-knobs';

const percentageRange = new ContinuousRange({
  start: 0,
  end: 1,
  toString: v => `${(100 * v).toFixed(2)}%`
});

const frequencyRange = new ContinuousRange({
  start: 20,
  end: 20000,
  scale: { type: Scale.Logarithmic, base: 10 },
  toString: v => `${v.toPrecision(2)} Hz`
});

const filterTypeRange = new ChoiceRange([
  { value: 0, label: 'Low-pass' }
  { value: 1, label: 'High-pass' },
  { value: 2, label: 'Band-pass' }
]);

```

### ParameterGestureHandler (SolidJS component)

The `ParameterGestureHandler` component doesn't render anything itself, it simply wraps an existing element and makes it behave like a control by giving it the following abilities:

- click and drag the element up/down to change the value
- scroll on top of the element to change the value
- hold shift while changing the value to change it more precisely
- after focusing the element, the up/down/left/right arrow keys can be used to nudge the value by different increments

```ts
interface ParameterGestureHandlerProps {
  children: (ref: any) => any;

  // un-normalised
  value: number,

  // called with the un-normalised valye
  onChange?: (value: number) => void,

  // called when starting the change gesture
  onStart?: (value: number) => void,

  // called when ending the change gesture
  onEnd?: (value: number) => void,

  // the range of the value
  range: Range,

  // the relative speed of the change gesture, the default is 1
  speed?: number,

  // whether the cursor should be hidden while changing the value
  // note: this might result in constant annoying pop-ups in certain browsers
  hideCursor?: boolean
}
```

Usage:
```jsx
import { ParameterGestureHandler } from 'solid-knobs';

function MyControl(props) {
  return (
    <ParameterGestureHandler {...props}>
      {ref =>
        <div ref={ref}>
          // custom visualisation code
        </div>
      }
    </ParameterGestureHandler>
  );
}
```

### Control (SolidJS component)

The `Control` component implements a higher level control that covers most common use-cases and takes care of accessibility. It uses `ParameterGestureHandler` under the hood and you should probably use `Control` instead of `ParameterGestureHandler` for most cases.

```ts
type ControlProps =
Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> &
Omit<ParameterGestureHandlerProps, 'children'> &
{
  // the label that should be used for the aria label (for accessibility)
  label?: string;

  // the default value of the parameter value
  defaultValue?: number;

  // called when starting the change gesture
  onGestureStart?(e: MouseEvent | TouchEvent): void;

  // called when ending the change gesture
  onGestureEnd?(e: MouseEvent | TouchEvent): void;

  children: any;
}
```

Usage:
```tsx
function Knob(props) {
  return (
    <Control range={props.range} value={value()} onChange={setValue}>
      // your custom control visualisation goes here
    </Control>
  );
}
```

### ValueInput (SolidJS component)

A glorified input element that formats the value according to a range and properly handles user input.

```ts
interface ValueInputProps extends Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  // called when the value is changed by the user
  onChange(value: number): void;

  // the range of the value
  range: Range;

  // the un-normalised value
  value: number;
}
```

### Arc (SolidJS component)

Arc is a simple utility component that returns a `<path />` element for drawing an arc segment in an SVG element.

```ts
interface ArcProps extends JSX.PathSVGAttributes<SVGPathElement> {
  // the X coordinate of the arc's center
  x: number;

  // the Y coordinate of the arc's center
  y: number;

  // the radius of the arc
  radius: number;

  // the start angle of the arc in degrees
  startAngle: number;

  // the end angle of the arc in degrees
  endAngle: number;
}
```

See the `examples` folder for usage examples.

## TODO
- [ ] docs
- [ ] examples
- [ ] tests

## Contributing

Contributions are most welcome!
