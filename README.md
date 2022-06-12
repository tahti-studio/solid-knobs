# solid-knobs

WIP

This library provides primitives for building user-friendly controls for parameters that control audio (or anything else). The components are written for SolidJS and have no external dependencies.

Check out the examples: https://tahti-studio.github.io/solid-knobs/

## Install
`npm install solid-knobs`

## Docs

### Ranges

A `Range` specifies the range and scale of a value, and how a value should be formatted for the user. There are three classes that implement the `Range` interface:

- `ContinuousRange`: the most common type of range used for numerical values that are continous (e.g. frequency, volume etc)
- `ChoiceRange`: a range that represents a finite number of choices with textual labels (e.g. type of filter)
- `ToggleRange`: a simple on/off type of range

Usage:
```tsx
import { ContinousRange, ToggleRange, ChoiceRange, Scale } from 'solid-knobs';

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

### ParameterGestureHandler

The `ParameterGestureHandler` component doesn't render anything itself, it simply wraps an existing element and makes it behave like a control by giving it the following abilities:

- click and drag the element up/down to change the value
- scroll on top of the element to change the value
- hold shift while changing the value to change it more precisely
- after focusing the element, the up/down/left/right arrow keys can be used to nudge the value by different increments

```ts
interface Props {
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

### Control

The `Control` component implements sensible defaults that are needed for an accessible control element. It uses `ParameterGestureHandler` under the hood and you should probably use `Control` instead of `ParameterGestureHandler` for most cases.

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

## TODO
- [ ] docs
- [ ] examples
- [ ] tests

## Contributing

Contributions are most welcome!
