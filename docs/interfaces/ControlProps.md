[solid-knobs](../README.md) / ControlProps

# Interface: ControlProps

## Hierarchy

- `Omit`<`JSX.HTMLAttributes`<`HTMLDivElement`\>, ``"onChange"``\>

  ↳ **`ControlProps`**

## Table of contents

### Properties

- [label](ControlProps.md#label)
- [defaultValue](ControlProps.md#defaultvalue)
- [value](ControlProps.md#value)
- [range](ControlProps.md#range)
- [speed](ControlProps.md#speed)
- [hideCursor](ControlProps.md#hidecursor)
- [children](ControlProps.md#children)

### Methods

- [onGestureStart](ControlProps.md#ongesturestart)
- [onGestureEnd](ControlProps.md#ongestureend)
- [onChange](ControlProps.md#onchange)

## Properties

### label

• `Optional` **label**: `string`

The label that should be used for the aria label (for accessibility).

#### Defined in

[Control.tsx:12](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/Control.tsx#L12)

___

### defaultValue

• `Optional` **defaultValue**: `number`

The default value.

#### Defined in

[Control.tsx:17](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/Control.tsx#L17)

___

### value

• **value**: `number`

The un-normalised value.

#### Defined in

[Control.tsx:32](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/Control.tsx#L32)

___

### range

• **range**: [`Range`](../README.md#range)

The range of the value.

#### Defined in

[Control.tsx:44](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/Control.tsx#L44)

___

### speed

• `Optional` **speed**: `number`

The relative speed of the change gesture. The default is 1.

#### Defined in

[Control.tsx:49](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/Control.tsx#L49)

___

### hideCursor

• `Optional` **hideCursor**: `boolean`

Whether the cursor should be hidden while changing the value.
Note! This might result in constant annoying pop-ups in certain browsers.

#### Defined in

[Control.tsx:55](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/Control.tsx#L55)

___

### children

• **children**: `any`

#### Overrides

Omit.children

#### Defined in

[Control.tsx:57](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/Control.tsx#L57)

## Methods

### onGestureStart

▸ `Optional` **onGestureStart**(`e`): `void`

Called when starting the change gesture.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |

#### Returns

`void`

___

### onGestureEnd

▸ `Optional` **onGestureEnd**(`e`): `void`

Called when ending the change gesture.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |

#### Returns

`void`

___

### onChange

▸ **onChange**(`value`): `void`

Called with the un-normalised value when it changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The un-normalised value. |

#### Returns

`void`
