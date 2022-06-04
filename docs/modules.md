[solid-parameter-controls](README.md) / Exports

# solid-parameter-controls

## Table of contents

### Enumerations

- [Scale](enums/Scale.md)

### Classes

- [ChoiceRange](classes/ChoiceRange.md)
- [ContinuousRange](classes/ContinuousRange.md)
- [ToggleRange](classes/ToggleRange.md)

### Interfaces

- [Choice](interfaces/Choice.md)
- [Range](interfaces/Range.md)

### Functions

- [Arc](modules.md#arc)
- [Control](modules.md#control)
- [ParameterGestureHandler](modules.md#parametergesturehandler)
- [ValueInput](modules.md#valueinput)
- [limit](modules.md#limit)

## Functions

### Arc

▸ **Arc**(`allProps`): `Element`

Produces an SVG path element that renders an arc segment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `allProps` | `Props` |

#### Returns

`Element`

#### Defined in

[Arc.tsx:42](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/Arc.tsx#L42)

___

### Control

▸ **Control**(`allProps`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `allProps` | `Props` |

#### Returns

`Element`

#### Defined in

[Control.tsx:12](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/Control.tsx#L12)

___

### ParameterGestureHandler

▸ **ParameterGestureHandler**(`props`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Props` |

#### Returns

`any`

#### Defined in

[ParameterGestureHandler.tsx:15](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/ParameterGestureHandler.tsx#L15)

___

### ValueInput

▸ **ValueInput**(`allProps`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `allProps` | `Props` |

#### Returns

`Element`

#### Defined in

[ValueInput.tsx:10](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/ValueInput.tsx#L10)

___

### limit

▸ **limit**(`value`, `min`, `max`): `number`

Clamps `value` to at least `min` and at most `max`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

[range/range.ts:4](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L4)
