[solid-knobs](../README.md) / ParameterGestureHandlerProps

# Interface: ParameterGestureHandlerProps

## Table of contents

### Properties

- [children](ParameterGestureHandlerProps.md#children)
- [value](ParameterGestureHandlerProps.md#value)
- [onChange](ParameterGestureHandlerProps.md#onchange)
- [onNudge](ParameterGestureHandlerProps.md#onnudge)
- [onGestureStart](ParameterGestureHandlerProps.md#ongesturestart)
- [onGestureEnd](ParameterGestureHandlerProps.md#ongestureend)
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

[ParameterGestureHandler.tsx:7](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/ParameterGestureHandler.tsx#L7)

___

### value

• **value**: `number`

The normalised value.

#### Defined in

[ParameterGestureHandler.tsx:12](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/ParameterGestureHandler.tsx#L12)

___

### onChange

• `Optional` **onChange**: (`value`: `number`, `fine`: `boolean`) => `void`

#### Type declaration

▸ (`value`, `fine`): `void`

Called with the normalised value when it changes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The normalised value (ranging between 0 and 1). |
| `fine` | `boolean` | `true` when the value is adjusted more finely (e.g. when shift is pressed). |

##### Returns

`void`

#### Defined in

[ParameterGestureHandler.tsx:20](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/ParameterGestureHandler.tsx#L20)

___

### onNudge

• `Optional` **onNudge**: (`amount`: `number`) => `void`

#### Type declaration

▸ (`amount`): `void`

Called when the value is nudged forward or backward with the arrows keys.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The size of the nudge. Can either be -1 or 1 for a small nudge, or -10 or 10 for a big nudge. |

##### Returns

`void`

#### Defined in

[ParameterGestureHandler.tsx:27](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/ParameterGestureHandler.tsx#L27)

___

### onGestureStart

• `Optional` **onGestureStart**: (`e`: `MouseEvent` \| `TouchEvent`, `value`: `number`) => `void`

#### Type declaration

▸ (`e`, `value`): `void`

Called when starting the change gesture.

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `value` | `number` |

##### Returns

`void`

#### Defined in

[ParameterGestureHandler.tsx:32](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/ParameterGestureHandler.tsx#L32)

___

### onGestureEnd

• `Optional` **onGestureEnd**: (`e`: `MouseEvent` \| `TouchEvent`, `value`: `number`) => `void`

#### Type declaration

▸ (`e`, `value`): `void`

Called when ending the change gesture.

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `value` | `number` |

##### Returns

`void`

#### Defined in

[ParameterGestureHandler.tsx:37](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/ParameterGestureHandler.tsx#L37)

___

### speed

• `Optional` **speed**: `number`

The relative speed of the change gesture. The default is 1.

#### Defined in

[ParameterGestureHandler.tsx:42](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/ParameterGestureHandler.tsx#L42)

___

### hideCursor

• `Optional` **hideCursor**: `boolean`

Whether the cursor should be hidden while changing the value.
Note! This might result in constant annoying pop-ups in certain browsers.

#### Defined in

[ParameterGestureHandler.tsx:48](https://github.com/tahti-studio/solid-parameter-controls/blob/26827f6/src/ParameterGestureHandler.tsx#L48)
