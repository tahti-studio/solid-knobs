solid-knobs

# solid-knobs

## Table of contents

### Component Properties

- [ArcProps](interfaces/ArcProps.md)
- [ControlProps](interfaces/ControlProps.md)
- [ImageStripControlProps](interfaces/ImageStripControlProps.md)
- [ParameterGestureHandlerProps](interfaces/ParameterGestureHandlerProps.md)
- [ValueInputProps](interfaces/ValueInputProps.md)

### Components

- [Arc](README.md#arc)
- [Control](README.md#control)
- [ImageStripControl](README.md#imagestripcontrol)
- [ParameterGestureHandler](README.md#parametergesturehandler)
- [ValueInput](README.md#valueinput)

### Functions

- [createSmoothedValue](README.md#createsmoothedvalue)

### Ranges

- [Range](README.md#range)
- [RangeType](enums/RangeType.md)
- [ContinuousRange](interfaces/ContinuousRange.md)
- [Scale](enums/Scale.md)
- [ChoiceRange](interfaces/ChoiceRange.md)
- [Choice](interfaces/Choice.md)

### Namespaces

- [rangeCreators](modules/rangeCreators.md)
- [rangeFunctions](modules/rangeFunctions.md)

## Components

### Arc

▸ **Arc**(`props`): `Element`

Arc is a simple utility component that returns a `<path />` element for drawing an arc segment in an SVG element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ArcProps`](interfaces/ArcProps.md) |

#### Returns

`Element`

___

### Control

▸ **Control**(`props`): `Element`

The `Control` component implements a higher-level control that covers the most common use cases and takes care of accessibility.
It uses [ParameterGestureHandler](README.md#parametergesturehandler) under the hood and you should probably use `Control` instead of [ParameterGestureHandler](README.md#parametergesturehandler) for most cases.

**`Example`**

```tsx
import { Control } from 'solid-knobs';

...

<Control range={range} value={value()} onChange={setValue}>
  // your custom control visualisation goes here
</Control>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ControlProps`](interfaces/ControlProps.md) |

#### Returns

`Element`

___

### ImageStripControl

▸ **ImageStripControl**(`props`): `Element`

Builds on top of the `Control` component, bringing easy-to-use support for image strip control graphics as generated by e.g. [KnobMan](https://www.g200kg.com/en/webknobman/gallery.php).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ImageStripControlProps`](interfaces/ImageStripControlProps.md) |

#### Returns

`Element`

___

### ParameterGestureHandler

▸ **ParameterGestureHandler**(`props`): `any`

The `ParameterGestureHandler` component doesn't render anything itself, it simply wraps an existing element and makes it behave like a control by giving it the following abilities:

- Click and drag the element up/down to change the value.
- Scroll on top of the element to change the value.
- Hold shift while changing the value to change it more precisely.
- After focusing the element, the up/down/left/right arrow keys can be used to nudge the value by different increments.

It also takes care of blocking user selection on the page while dragging.

**`Example`**

```jsx
import { ParameterGestureHandler } from 'solid-knobs';

...

<ParameterGestureHandler {...props}>
 {ref =>
   <div ref={ref}>
     // custom visualisation code
   </div>
 }
</ParameterGestureHandler>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ParameterGestureHandlerProps`](interfaces/ParameterGestureHandlerProps.md) |

#### Returns

`any`

___

### ValueInput

▸ **ValueInput**(`props`): `JSX.Element`

A glorified input element that formats the value according to a range and properly handles user input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ValueInputProps`](interfaces/ValueInputProps.md) |

#### Returns

`JSX.Element`

## Functions

### createSmoothedValue

▸ **createSmoothedValue**(`value`, `speed?`, `threshold?`): `Accessor`<`number`\>

A utility function that smoothly animates the changes of a numerical value.

**`Example`**

```ts
const [value, setValue] = createSignal(0.5);

const smoothedValue = createSmoothedValue(value);

createEffect(() =>
  console.log(smoothedValue())
);
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | () => `number` | `undefined` | The value to animate. |
| `speed` | `number` | `1` | The relative speed at which to animate the value (optional, default = 1). |
| `threshold` | `number` | `0.001` | How close the value has to be to the target for the animation to stop (optional, default = 0.001). |

#### Returns

`Accessor`<`number`\>

A SolidJS signal that contains the animated value.

## Ranges

### Range

Ƭ **Range**: [`ContinuousRange`](interfaces/ContinuousRange.md) \| [`ChoiceRange`](interfaces/ChoiceRange.md)

A `Range` specifies the range, scale, and UI behaviours of a controlled value.
There are two types of range: [ContinuousRange](interfaces/ContinuousRange.md) and [ChoiceRange](interfaces/ChoiceRange.md).

#### Defined in

[range/range.ts:8](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L8)

___

• **RangeType**: `Object`

The type of a range.
Currently the only possible types are `Continuous` and `Choice`.

#### Defined in

[range/range.ts:16](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L16)

• **ContinuousRange**: `Object`

The most common type of range that is used for continuous numerical values (e.g. frequency, volume, etc).

#### Defined in

[range/range.ts:23](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L23)

• **Scale**: `Object`

The scaling of a [ContinuousRange](interfaces/ContinuousRange.md).

#### Defined in

[range/range.ts:88](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L88)

• **ChoiceRange**: `Object`

A range that represents a finite number of choices with textual labels (think enums).

#### Defined in

[range/range.ts:99](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L99)

• **Choice**: `Object`

Used by [ChoiceRange](interfaces/ChoiceRange.md).

#### Defined in

[range/range.ts:116](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L116)