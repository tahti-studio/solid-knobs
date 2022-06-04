[solid-parameter-controls](../README.md) / [Exports](../modules.md) / Range

# Interface: Range

## Implemented by

- [`ChoiceRange`](../classes/ChoiceRange.md)
- [`ContinuousRange`](../classes/ContinuousRange.md)
- [`ToggleRange`](../classes/ToggleRange.md)

## Table of contents

### Methods

- [fromNormalised](Range.md#fromnormalised)
- [fromString](Range.md#fromstring)
- [getEnd](Range.md#getend)
- [getRandom](Range.md#getrandom)
- [getStart](Range.md#getstart)
- [limit](Range.md#limit)
- [modulationToString](Range.md#modulationtostring)
- [nudge](Range.md#nudge)
- [setEnd](Range.md#setend)
- [setStart](Range.md#setstart)
- [snap](Range.md#snap)
- [toNormalised](Range.md#tonormalised)
- [toString](Range.md#tostring)

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

#### Defined in

[range/range.ts:32](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L32)

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

#### Defined in

[range/range.ts:37](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L37)

___

### getEnd

▸ **getEnd**(): `number`

Returns the end value of the range.

#### Returns

`number`

#### Defined in

[range/range.ts:72](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L72)

___

### getRandom

▸ **getRandom**(): `number`

Returns a random un-normalised value.

#### Returns

`number`

#### Defined in

[range/range.ts:52](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L52)

___

### getStart

▸ **getStart**(): `number`

Returns the start value of the range.

#### Returns

`number`

#### Defined in

[range/range.ts:67](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L67)

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

#### Defined in

[range/range.ts:57](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L57)

___

### modulationToString

▸ **modulationToString**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`string`

#### Defined in

[range/range.ts:75](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L75)

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

#### Defined in

[range/range.ts:62](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L62)

___

### setEnd

▸ **setEnd**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[range/range.ts:74](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L74)

___

### setStart

▸ **setStart**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[range/range.ts:73](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L73)

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

#### Defined in

[range/range.ts:47](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L47)

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

#### Defined in

[range/range.ts:27](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L27)

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

#### Defined in

[range/range.ts:42](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L42)
