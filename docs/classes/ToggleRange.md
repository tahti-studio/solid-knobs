[solid-parameter-controls](../README.md) / [Exports](../modules.md) / ToggleRange

# Class: ToggleRange

## Implements

- [`Range`](../interfaces/Range.md)

## Table of contents

### Constructors

- [constructor](ToggleRange.md#constructor)

### Methods

- [fromNormalised](ToggleRange.md#fromnormalised)
- [fromString](ToggleRange.md#fromstring)
- [getEnd](ToggleRange.md#getend)
- [getRandom](ToggleRange.md#getrandom)
- [getStart](ToggleRange.md#getstart)
- [limit](ToggleRange.md#limit)
- [modulationToString](ToggleRange.md#modulationtostring)
- [nudge](ToggleRange.md#nudge)
- [setEnd](ToggleRange.md#setend)
- [setStart](ToggleRange.md#setstart)
- [snap](ToggleRange.md#snap)
- [toNormalised](ToggleRange.md#tonormalised)
- [toString](ToggleRange.md#tostring)

## Constructors

### constructor

• **new ToggleRange**()

## Methods

### fromNormalised

▸ **fromNormalised**(`value`): ``1`` \| ``0``

Converts a normalised `value` (ranging from 0 to 1) to it's natural range and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

``1`` \| ``0``

#### Implementation of

[Range](../interfaces/Range.md).[fromNormalised](../interfaces/Range.md#fromnormalised)

#### Defined in

[range/range.ts:180](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L180)

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

[range/range.ts:184](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L184)

___

### getEnd

▸ **getEnd**(): `number`

Returns the end value of the range.

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[getEnd](../interfaces/Range.md#getend)

#### Defined in

[range/range.ts:217](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L217)

___

### getRandom

▸ **getRandom**(): ``1`` \| ``0``

Returns a random un-normalised value.

#### Returns

``1`` \| ``0``

#### Implementation of

[Range](../interfaces/Range.md).[getRandom](../interfaces/Range.md#getrandom)

#### Defined in

[range/range.ts:188](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L188)

___

### getStart

▸ **getStart**(): `number`

Returns the start value of the range.

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[getStart](../interfaces/Range.md#getstart)

#### Defined in

[range/range.ts:213](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L213)

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

[range/range.ts:196](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L196)

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

[range/range.ts:229](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L229)

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

[range/range.ts:204](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L204)

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

[range/range.ts:225](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L225)

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

[range/range.ts:221](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L221)

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

[range/range.ts:192](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L192)

___

### toNormalised

▸ **toNormalised**(`value`): ``1`` \| ``0``

Converts `value` to a normalised value (ranging from 0 to 1) and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

``1`` \| ``0``

#### Implementation of

[Range](../interfaces/Range.md).[toNormalised](../interfaces/Range.md#tonormalised)

#### Defined in

[range/range.ts:176](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L176)

___

### toString

▸ **toString**(`value`): ``"off"`` \| ``"on"``

Converts an unnormalised `value` to a user-friendly string representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

``"off"`` \| ``"on"``

#### Implementation of

[Range](../interfaces/Range.md).[toString](../interfaces/Range.md#tostring)

#### Defined in

[range/range.ts:200](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L200)
