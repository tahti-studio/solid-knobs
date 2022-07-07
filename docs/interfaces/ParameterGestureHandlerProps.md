[solid-knobs](../README.md) / ParameterGestureHandlerProps

# Interface: ParameterGestureHandlerProps

## Table of contents

### Properties

- [children](ParameterGestureHandlerProps.md#children)
- [value](ParameterGestureHandlerProps.md#value)
- [onChange](ParameterGestureHandlerProps.md#onchange)
- [onStart](ParameterGestureHandlerProps.md#onstart)
- [onEnd](ParameterGestureHandlerProps.md#onend)
- [range](ParameterGestureHandlerProps.md#range)
- [speed](ParameterGestureHandlerProps.md#speed)
- [hideCursor](ParameterGestureHandlerProps.md#hidecursor)

## Properties

### children

• **children**: (`ref`: `any`) => `any`

#### Type declaration

▸ (`ref`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

##### Returns

`any`

#### Defined in

[ParameterGestureHandler.tsx:8](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ParameterGestureHandler.tsx#L8)

___

### value

• **value**: `number`

The un-normalised value.

#### Defined in

[ParameterGestureHandler.tsx:13](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ParameterGestureHandler.tsx#L13)

___

### onChange

• `Optional` **onChange**: (`value`: `number`) => `void`

#### Type declaration

▸ (`value`): `void`

Called with the un-normalised value.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

##### Returns

`void`

#### Defined in

[ParameterGestureHandler.tsx:18](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ParameterGestureHandler.tsx#L18)

___

### onStart

• `Optional` **onStart**: (`value`: `number`) => `void`

#### Type declaration

▸ (`value`): `void`

Called when starting the change gesture.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

##### Returns

`void`

#### Defined in

[ParameterGestureHandler.tsx:23](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ParameterGestureHandler.tsx#L23)

___

### onEnd

• `Optional` **onEnd**: (`value`: `number`) => `void`

#### Type declaration

▸ (`value`): `void`

Called when ending the change gesture.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

##### Returns

`void`

#### Defined in

[ParameterGestureHandler.tsx:28](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ParameterGestureHandler.tsx#L28)

___

### range

• **range**: [`Range`](../README.md#range)

The range of the value.

#### Defined in

[ParameterGestureHandler.tsx:33](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ParameterGestureHandler.tsx#L33)

___

### speed

• `Optional` **speed**: `number`

The relative speed of the change gesture. The default is 1.

#### Defined in

[ParameterGestureHandler.tsx:38](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ParameterGestureHandler.tsx#L38)

___

### hideCursor

• `Optional` **hideCursor**: `boolean`

Whether the cursor should be hidden while changing the value.
Note! This might result in constant annoying pop-ups in certain browsers.

#### Defined in

[ParameterGestureHandler.tsx:44](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ParameterGestureHandler.tsx#L44)
