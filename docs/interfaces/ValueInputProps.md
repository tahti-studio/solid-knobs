[solid-knobs](../README.md) / ValueInputProps

# Interface: ValueInputProps

## Hierarchy

- `Omit`<`JSX.InputHTMLAttributes`<`HTMLInputElement`\>, ``"onChange"`` \| ``"value"``\>

  ↳ **`ValueInputProps`**

## Table of contents

### Methods

- [onChange](ValueInputProps.md#onchange)

### Properties

- [range](ValueInputProps.md#range)
- [value](ValueInputProps.md#value)

## Methods

### onChange

▸ **onChange**(`value`): `void`

Called when the value is changed by the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

## Properties

### range

• **range**: [`Range`](../README.md#range)

The range of the value.

#### Defined in

[ValueInput.tsx:16](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ValueInput.tsx#L16)

___

### value

• **value**: `number`

The un-normalised value.

#### Defined in

[ValueInput.tsx:21](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ValueInput.tsx#L21)
