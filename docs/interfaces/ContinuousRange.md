[solid-knobs](../README.md) / ContinuousRange

# Interface: ContinuousRange

The most common type of range that is used for continuous numerical values (e.g. frequency, volume, etc).

## Table of contents

### Properties

- [type](ContinuousRange.md#type)
- [start](ContinuousRange.md#start)
- [end](ContinuousRange.md#end)
- [bipolar](ContinuousRange.md#bipolar)
- [stringToValue](ContinuousRange.md#stringtovalue)
- [valueToString](ContinuousRange.md#valuetostring)
- [scale](ContinuousRange.md#scale)
- [snap](ContinuousRange.md#snap)
- [step](ContinuousRange.md#step)
- [snapMargin](ContinuousRange.md#snapmargin)

## Properties

### type

• **type**: [`Continuous`](../enums/RangeType.md#continuous)

The type of a ContinuousRange is always RangeType.Continuous.

#### Defined in

[range/range.ts:27](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L27)

___

### start

• **start**: `number`

The start value of the range.

#### Defined in

[range/range.ts:32](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L32)

___

### end

• **end**: `number`

The end value of the range.

#### Defined in

[range/range.ts:37](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L37)

___

### bipolar

• `Optional` **bipolar**: `boolean`

Whether the range is a bipolar one.

#### Defined in

[range/range.ts:42](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L42)

___

### stringToValue

• `Optional` **stringToValue**: (`value`: `number`, `unit`: `string`) => `number`

#### Type declaration

▸ (`value`, `unit`): `number`

A function for converting a value with a certain unit to a value in the range.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `unit` | `string` |

##### Returns

`number`

#### Defined in

[range/range.ts:47](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L47)

___

### valueToString

• `Optional` **valueToString**: (`value`: `number`) => `string`

#### Type declaration

▸ (`value`): `string`

A function for formatting a value of this range as a string.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

##### Returns

`string`

#### Defined in

[range/range.ts:52](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L52)

___

### scale

• `Optional` **scale**: { `type`: [`Exponential`](../enums/Scale.md#exponential) ; `exp`: `number`  } \| { `type`: [`Logarithmic`](../enums/Scale.md#logarithmic)  } \| { `type`: [`Linear`](../enums/Scale.md#linear)  }

The scaling of the range defines how the value is controlled in a UI. The default is `Scale.Linear`.

#### Defined in

[range/range.ts:57](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L57)

___

### snap

• `Optional` **snap**: `number` \| `number`[]

The values to which the user-interface control should snap.
Note! Always provide these values from smallest to largest.

#### Defined in

[range/range.ts:70](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L70)

___

### step

• `Optional` **step**: `number`

The step between values. If you want a range that allows only integer values, set this to 1.

#### Defined in

[range/range.ts:75](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L75)

___

### snapMargin

• `Optional` **snapMargin**: `number`

How far away a value has to be from a snap point for it to snap.

#### Defined in

[range/range.ts:80](https://github.com/tahti-studio/solid-parameter-controls/blob/750fd72/src/range/range.ts#L80)
