[solid-parameter-controls](../README.md) / [Exports](../modules.md) / ChoiceRange

# Class: ChoiceRange

## Implements

- [`Range`](../interfaces/Range.md)

## Table of contents

### Constructors

- [constructor](ChoiceRange.md#constructor)

### Properties

- [choices](ChoiceRange.md#choices)

### Methods

- [fromNormalised](ChoiceRange.md#fromnormalised)
- [fromString](ChoiceRange.md#fromstring)
- [getEnd](ChoiceRange.md#getend)
- [getRandom](ChoiceRange.md#getrandom)
- [getStart](ChoiceRange.md#getstart)
- [limit](ChoiceRange.md#limit)
- [modulationToString](ChoiceRange.md#modulationtostring)
- [nudge](ChoiceRange.md#nudge)
- [setEnd](ChoiceRange.md#setend)
- [setStart](ChoiceRange.md#setstart)
- [snap](ChoiceRange.md#snap)
- [toNormalised](ChoiceRange.md#tonormalised)
- [toString](ChoiceRange.md#tostring)

## Constructors

### constructor

• **new ChoiceRange**(`choices`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `choices` | [`Choice`](../interfaces/Choice.md)[] |

#### Defined in

[range/range.ts:112](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L112)

## Properties

### choices

• **choices**: [`Choice`](../interfaces/Choice.md)[]

#### Defined in

[range/range.ts:110](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L110)

## Methods

### fromNormalised

▸ **fromNormalised**(`value`): `number`

Converts a normalised `value` (ranging from 0 to 1) to it's natural range and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[fromNormalised](../interfaces/Range.md#fromnormalised)

#### Defined in

[range/range.ts:120](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L120)

___

### fromString

▸ **fromString**(`value`, `unit`): `number`

Parses `value` from a value and a unit and returns the value as a number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `unit` | `string` |

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[fromString](../interfaces/Range.md#fromstring)

#### Defined in

[range/range.ts:125](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L125)

___

### getEnd

▸ **getEnd**(): `number`

Returns the end value of the range.

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[getEnd](../interfaces/Range.md#getend)

#### Defined in

[range/range.ts:158](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L158)

___

### getRandom

▸ **getRandom**(): `number`

Returns a random un-normalised value.

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[getRandom](../interfaces/Range.md#getrandom)

#### Defined in

[range/range.ts:133](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L133)

___

### getStart

▸ **getStart**(): `number`

Returns the start value of the range.

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[getStart](../interfaces/Range.md#getstart)

#### Defined in

[range/range.ts:154](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L154)

___

### limit

▸ **limit**(`value`): `number`

Limits an un-normalised value to be within the range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[limit](../interfaces/Range.md#limit)

#### Defined in

[range/range.ts:141](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L141)

___

### modulationToString

▸ **modulationToString**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`string`

#### Implementation of

[Range](../interfaces/Range.md).[modulationToString](../interfaces/Range.md#modulationtostring)

#### Defined in

[range/range.ts:170](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L170)

___

### nudge

▸ **nudge**(`value`, `steps`): `number`

Nudges the un-normalised `value` by `steps`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `steps` | `number` |

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[nudge](../interfaces/Range.md#nudge)

#### Defined in

[range/range.ts:149](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L149)

___

### setEnd

▸ **setEnd**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

[Range](../interfaces/Range.md).[setEnd](../interfaces/Range.md#setend)

#### Defined in

[range/range.ts:166](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L166)

___

### setStart

▸ **setStart**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

[Range](../interfaces/Range.md).[setStart](../interfaces/Range.md#setstart)

#### Defined in

[range/range.ts:162](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L162)

___

### snap

▸ **snap**(`value`): `number`

Snaps an unnormalised `value` to the closest legal value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[snap](../interfaces/Range.md#snap)

#### Defined in

[range/range.ts:137](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L137)

___

### toNormalised

▸ **toNormalised**(`value`): `number`

Converts `value` to a normalised value (ranging from 0 to 1) and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[toNormalised](../interfaces/Range.md#tonormalised)

#### Defined in

[range/range.ts:116](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L116)

___

### toString

▸ **toString**(`value`): `string`

Converts an unnormalised `value` to a user-friendly string representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`string`

#### Implementation of

[Range](../interfaces/Range.md).[toString](../interfaces/Range.md#tostring)

#### Defined in

[range/range.ts:129](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L129)
