[solid-knobs](../README.md) / ImageStripControlProps

# Interface: ImageStripControlProps

## Hierarchy

- `Omit`<[`ControlProps`](ControlProps.md), ``"children"``\>

  ↳ **`ImageStripControlProps`**

## Table of contents

### Properties

- [label](ImageStripControlProps.md#label)
- [defaultValue](ImageStripControlProps.md#defaultvalue)
- [imageSrc](ImageStripControlProps.md#imagesrc)
- [numFrames](ImageStripControlProps.md#numframes)
- [horizontal](ImageStripControlProps.md#horizontal)
- [value](ImageStripControlProps.md#value)
- [onChange](ImageStripControlProps.md#onchange)
- [onStart](ImageStripControlProps.md#onstart)
- [onEnd](ImageStripControlProps.md#onend)
- [range](ImageStripControlProps.md#range)
- [speed](ImageStripControlProps.md#speed)
- [hideCursor](ImageStripControlProps.md#hidecursor)

### Methods

- [onGestureStart](ImageStripControlProps.md#ongesturestart)
- [onGestureEnd](ImageStripControlProps.md#ongestureend)

## Properties

### label

• `Optional` **label**: `string`

The label that should be used for the aria label (for accessibility).

#### Inherited from

Omit.label

#### Defined in

[Control.tsx:12](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/Control.tsx#L12)

___

### defaultValue

• `Optional` **defaultValue**: `number`

The default value.

#### Inherited from

Omit.defaultValue

#### Defined in

[Control.tsx:17](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/Control.tsx#L17)

___

### imageSrc

• **imageSrc**: `string`

The path to the image strip to use.

#### Defined in

[ImageStripControl.tsx:12](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ImageStripControl.tsx#L12)

___

### numFrames

• **numFrames**: `number`

The number of frames in the image strip.

#### Defined in

[ImageStripControl.tsx:17](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ImageStripControl.tsx#L17)

___

### horizontal

• `Optional` **horizontal**: `boolean`

Set to true if the image strip is laid out horizontally. Will be interpreted as vertical otherwise.

#### Defined in

[ImageStripControl.tsx:22](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ImageStripControl.tsx#L22)

___

### value

• **value**: `number`

The un-normalised value.

#### Inherited from

Omit.value

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

#### Inherited from

Omit.onChange

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

#### Inherited from

Omit.onStart

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

#### Inherited from

Omit.onEnd

#### Defined in

[ParameterGestureHandler.tsx:28](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ParameterGestureHandler.tsx#L28)

___

### range

• **range**: [`Range`](../README.md#range)

The range of the value.

#### Inherited from

Omit.range

#### Defined in

[ParameterGestureHandler.tsx:33](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ParameterGestureHandler.tsx#L33)

___

### speed

• `Optional` **speed**: `number`

The relative speed of the change gesture. The default is 1.

#### Inherited from

Omit.speed

#### Defined in

[ParameterGestureHandler.tsx:38](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ParameterGestureHandler.tsx#L38)

___

### hideCursor

• `Optional` **hideCursor**: `boolean`

Whether the cursor should be hidden while changing the value.
Note! This might result in constant annoying pop-ups in certain browsers.

#### Inherited from

Omit.hideCursor

#### Defined in

[ParameterGestureHandler.tsx:44](https://github.com/tahti-studio/solid-knobs/blob/4144996/src/ParameterGestureHandler.tsx#L44)

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

#### Inherited from

Omit.onGestureStart

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

#### Inherited from

Omit.onGestureEnd
