[solid-knobs](../README.md) / rangeFunctions

# Namespace: rangeFunctions

## Table of contents

### Functions

- [toNormalised](rangeFunctions.md#tonormalised)
- [fromNormalised](rangeFunctions.md#fromnormalised)
- [fromString](rangeFunctions.md#fromstring)
- [toString](rangeFunctions.md#tostring)
- [snap](rangeFunctions.md#snap)
- [getRandom](rangeFunctions.md#getrandom)
- [limit](rangeFunctions.md#limit)
- [nudge](rangeFunctions.md#nudge)
- [getStart](rangeFunctions.md#getstart)
- [getEnd](rangeFunctions.md#getend)
- [limitValue](rangeFunctions.md#limitvalue)

## Functions

### toNormalised

▸ **toNormalised**(`range`, `value`): `number`

Converts `value` to a normalised value (ranging from 0 to 1) and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../README.md#range) |
| `value` | `number` |

#### Returns

`number`

___

### fromNormalised

▸ **fromNormalised**(`range`, `normalisedValue`): `number`

Converts a normalised `value` (ranging from 0 to 1) to it's natural range and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../README.md#range) |
| `normalisedValue` | `number` |

#### Returns

`number`

___

### fromString

▸ **fromString**(`range`, `value`, `unit`): `number`

Parses `value` from a value and a unit and returns the value as a number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../README.md#range) |
| `value` | `number` |
| `unit` | `string` |

#### Returns

`number`

___

### toString

▸ **toString**(`range`, `value`): `string`

Converts an unnormalised `value` to a user-friendly string representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../README.md#range) |
| `value` | `number` |

#### Returns

`string`

___

### snap

▸ **snap**(`range`, `value`): `number`

Snaps an unnormalised `value` to the closest legal value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../README.md#range) |
| `value` | `number` |

#### Returns

`number`

___

### getRandom

▸ **getRandom**(`range`): `number`

Returns a random un-normalised value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../README.md#range) |

#### Returns

`number`

___

### limit

▸ **limit**(`range`, `value`): `number`

Limits an un-normalised value to be within the range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../README.md#range) |
| `value` | `number` |

#### Returns

`number`

___

### nudge

▸ **nudge**(`range`, `value`, `steps`): `number`

Nudges the un-normalised `value` by `steps`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../README.md#range) |
| `value` | `number` |
| `steps` | `number` |

#### Returns

`number`

___

### getStart

▸ **getStart**(`range`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../README.md#range) |

#### Returns

`number`

___

### getEnd

▸ **getEnd**(`range`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../README.md#range) |

#### Returns

`number`

___

### limitValue

▸ **limitValue**(`value`, `min`, `max`): `number`

Clamps `value` to at least `min` and at most `max`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`
