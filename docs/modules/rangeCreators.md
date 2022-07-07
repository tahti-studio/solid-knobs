[solid-knobs](../README.md) / rangeCreators

# Namespace: rangeCreators

## Table of contents

### Functions

- [createFrequencyRange](rangeCreators.md#createfrequencyrange)
- [createVolumeRange](rangeCreators.md#createvolumerange)
- [createPercentageRange](rangeCreators.md#createpercentagerange)
- [createBipolarPercentageRange](rangeCreators.md#createbipolarpercentagerange)
- [createAccuratePercentageRange](rangeCreators.md#createaccuratepercentagerange)
- [createToggleRange](rangeCreators.md#createtogglerange)

## Functions

### createFrequencyRange

▸ **createFrequencyRange**(`start?`, `end?`): [`ContinuousRange`](../interfaces/ContinuousRange.md)

Creates a range for frequency values.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `start` | `number` | `20` | The start frequency in hertz (default = 20). |
| `end` | `number` | `20000` | The end frequency in hertz (default = 20000). |

#### Returns

[`ContinuousRange`](../interfaces/ContinuousRange.md)

___

### createVolumeRange

▸ **createVolumeRange**(`start?`, `end?`): [`ContinuousRange`](../interfaces/ContinuousRange.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | `number` | `0` |
| `end` | `number` | `1` |

#### Returns

[`ContinuousRange`](../interfaces/ContinuousRange.md)

___

### createPercentageRange

▸ **createPercentageRange**(`start?`, `end?`): [`ContinuousRange`](../interfaces/ContinuousRange.md)

Creates a range for percentage values.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `start` | `number` | `0` | The start value (default = 0). |
| `end` | `number` | `1` | The end value (default = 1). |

#### Returns

[`ContinuousRange`](../interfaces/ContinuousRange.md)

___

### createBipolarPercentageRange

▸ **createBipolarPercentageRange**(`start?`, `end?`): [`ContinuousRange`](../interfaces/ContinuousRange.md)

Creates a range for percentages going from `-end` ... `end`.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `start` | `number` | `0` | The start value (default = 0). |
| `end` | `number` | `1` | The end value (default = 1). |

#### Returns

[`ContinuousRange`](../interfaces/ContinuousRange.md)

___

### createAccuratePercentageRange

▸ **createAccuratePercentageRange**(`start?`, `end?`): [`ContinuousRange`](../interfaces/ContinuousRange.md)

Creates a range that displays percentages with more accuracy.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `start` | `number` | `0` | The start value (default = 0). |
| `end` | `number` | `1` | The end value (default = 1). |

#### Returns

[`ContinuousRange`](../interfaces/ContinuousRange.md)

___

### createToggleRange

▸ **createToggleRange**(`offLabel?`, `onLabel?`): [`ChoiceRange`](../interfaces/ChoiceRange.md)

Creates a range whose value is either 0 or 1.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `offLabel` | `string` | `'Off'` | The label for when the value is 0. |
| `onLabel` | `string` | `'On'` | The label for when the value is 1. |

#### Returns

[`ChoiceRange`](../interfaces/ChoiceRange.md)
