[solid-parameter-controls](../README.md) / [Exports](../modules.md) / ContinuousRange

# Class: ContinuousRange

## Implements

- [`Range`](../interfaces/Range.md)

## Table of contents

### Constructors

- [constructor](ContinuousRange.md#constructor)

### Properties

- [args](ContinuousRange.md#args)
- [fromString](ContinuousRange.md#fromstring)
- [interpolatedEnd](ContinuousRange.md#interpolatedend)
- [interpolatedStart](ContinuousRange.md#interpolatedstart)
- [snapMargin](ContinuousRange.md#snapmargin)

### Methods

- [asBipolar](ContinuousRange.md#asbipolar)
- [asModulationRange](ContinuousRange.md#asmodulationrange)
- [fromNormalised](ContinuousRange.md#fromnormalised)
- [getEnd](ContinuousRange.md#getend)
- [getRandom](ContinuousRange.md#getrandom)
- [getStart](ContinuousRange.md#getstart)
- [interpolate](ContinuousRange.md#interpolate)
- [inverseInterpolate](ContinuousRange.md#inverseinterpolate)
- [limit](ContinuousRange.md#limit)
- [limitToStep](ContinuousRange.md#limittostep)
- [modulationToString](ContinuousRange.md#modulationtostring)
- [nudge](ContinuousRange.md#nudge)
- [setEnd](ContinuousRange.md#setend)
- [setStart](ContinuousRange.md#setstart)
- [snap](ContinuousRange.md#snap)
- [toNormalised](ContinuousRange.md#tonormalised)
- [toString](ContinuousRange.md#tostring)
- [withEnd](ContinuousRange.md#withend)
- [withInterpolation](ContinuousRange.md#withinterpolation)
- [withSnap](ContinuousRange.md#withsnap)
- [withStart](ContinuousRange.md#withstart)

## Constructors

### constructor

• **new ContinuousRange**(`args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Partial`<`Args`\> |

#### Defined in

[range/range.ts:251](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L251)

## Properties

### args

• **args**: `Args`

#### Defined in

[range/range.ts:235](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L235)

___

### fromString

• **fromString**: (`value`: `number`, `unit`: `string`) => `number`

#### Type declaration

▸ (`value`, `unit`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `unit` | `string` |

##### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[fromString](../interfaces/Range.md#fromstring)

#### Defined in

[range/range.ts:271](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L271)

___

### interpolatedEnd

• **interpolatedEnd**: `number`

#### Defined in

[range/range.ts:249](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L249)

___

### interpolatedStart

• **interpolatedStart**: `number`

#### Defined in

[range/range.ts:248](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L248)

___

### snapMargin

• **snapMargin**: `number` = `0.025`

#### Defined in

[range/range.ts:247](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L247)

## Methods

### asBipolar

▸ **asBipolar**(): [`ContinuousRange`](ContinuousRange.md)

#### Returns

[`ContinuousRange`](ContinuousRange.md)

#### Defined in

[range/range.ts:284](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L284)

___

### asModulationRange

▸ **asModulationRange**(): [`ContinuousRange`](ContinuousRange.md)

#### Returns

[`ContinuousRange`](ContinuousRange.md)

#### Defined in

[range/range.ts:365](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L365)

___

### fromNormalised

▸ **fromNormalised**(`normalisedValue`): `number`

Converts a normalised `value` (ranging from 0 to 1) to it's natural range and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `normalisedValue` | `number` |

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[fromNormalised](../interfaces/Range.md#fromnormalised)

#### Defined in

[range/range.ts:336](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L336)

___

### getEnd

▸ **getEnd**(): `number`

Returns the end value of the range.

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[getEnd](../interfaces/Range.md#getend)

#### Defined in

[range/range.ts:390](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L390)

___

### getRandom

▸ **getRandom**(): `number`

Returns a random un-normalised value.

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[getRandom](../interfaces/Range.md#getrandom)

#### Defined in

[range/range.ts:316](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L316)

___

### getStart

▸ **getStart**(): `number`

Returns the start value of the range.

#### Returns

`number`

#### Implementation of

[Range](../interfaces/Range.md).[getStart](../interfaces/Range.md#getstart)

#### Defined in

[range/range.ts:386](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L386)

___

### interpolate

▸ **interpolate**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[range/range.ts:345](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L345)

___

### inverseInterpolate

▸ **inverseInterpolate**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[range/range.ts:355](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L355)

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

[range/range.ts:320](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L320)

___

### limitToStep

▸ **limitToStep**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[range/range.ts:296](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L296)

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

[range/range.ts:404](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L404)

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

[range/range.ts:379](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L379)

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

[range/range.ts:399](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L399)

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

[range/range.ts:394](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L394)

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

[range/range.ts:303](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L303)

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

[range/range.ts:327](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L327)

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

[range/range.ts:375](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L375)

___

### withEnd

▸ **withEnd**(`newEnd`): [`ContinuousRange`](ContinuousRange.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newEnd` | `number` |

#### Returns

[`ContinuousRange`](ContinuousRange.md)

#### Defined in

[range/range.ts:280](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L280)

___

### withInterpolation

▸ **withInterpolation**(`interpolation`): [`ContinuousRange`](ContinuousRange.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interpolation` | { `exp`: `number` ; `type`: [`Exponential`](../enums/Scale.md#exponential)  } \| { `base`: `number` ; `type`: [`Logarithmic`](../enums/Scale.md#logarithmic)  } \| { `type`: [`Linear`](../enums/Scale.md#linear)  } |

#### Returns

[`ContinuousRange`](ContinuousRange.md)

#### Defined in

[range/range.ts:288](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L288)

___

### withSnap

▸ **withSnap**(`values`): [`ContinuousRange`](ContinuousRange.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

[`ContinuousRange`](ContinuousRange.md)

#### Defined in

[range/range.ts:292](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L292)

___

### withStart

▸ **withStart**(`newStart`): [`ContinuousRange`](ContinuousRange.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newStart` | `number` |

#### Returns

[`ContinuousRange`](ContinuousRange.md)

#### Defined in

[range/range.ts:273](https://github.com/tahti-studio/solid-parameter-controls/blob/f68cfd3/src/range/range.ts#L273)
