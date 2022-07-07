import { ContinuousRange, ChoiceRange, RangeType, Scale } from "./range";

/**
 * Creates a range for frequency values.
 * 
 * @param start The start frequency in hertz (default = 20).
 * @param end The end frequency in hertz (default = 20000).
 */
 export const createFrequencyRange = (start = 20, end = 20000): ContinuousRange => ({
  type: RangeType.Continuous,
  start,
  end,
  scale: { type: Scale.Logarithmic },
  stringToValue: (value, unit) => {
    if (unit === 'k') {
      return value * 1000;
    }
    return value;
  },
  valueToString: (v: number) => {
    if (v < 10000) {
      return Math.round(v) + ' Hz';
    } else {
      return (v / 1000).toFixed(1) + ' kHz';
    }
  }
});

export const createVolumeRange = (start = 0, end = 1): ContinuousRange => ({
  type: RangeType.Continuous,
  start,
  end,
  scale: {
    type: Scale.Exponential,
    exp: 1.5
  },
  stringToValue: (value: number, unit: string) => {
    return Math.pow(10, value / 20);
  },
  valueToString: (value: number) => {
    if (value === 0) {
      return '-inf';
    }
    if (value < 0.2) {
    return Math.round(20 * Math.log10(value)) + ' dB';
    }
    return (20 * Math.log10(value)).toFixed(1) + ' dB';
  }
});

/**
 * Creates a range for percentage values.
 * 
 * @param start The start value (default = 0).
 * @param end The end value (default = 1).
 */
export const createPercentageRange = (start = 0, end = 1): ContinuousRange => ({
  type: RangeType.Continuous,
  start,
  end,
  stringToValue: value => +value / 100,
  valueToString(value) {
    return Math.round(value * 100) + '%'
  }
});

/**
 * Creates a range for percentages going from `-end` ... `end`.
 * 
 * @param start The start value (default = 0).
 * @param end The end value (default = 1).
 */
export const createBipolarPercentageRange = (start = 0, end = 1): ContinuousRange => ({
  type: RangeType.Continuous,
  start,
  end,
  bipolar: true,
  stringToValue: value => +value / 100,
  valueToString(value) {
    return (value > 0 ? '+' : '') + Math.round(value * 100) + '%'
  }
});

/**
 * Creates a range that displays percentages with more accuracy.
 * 
 * @param start The start value (default = 0).
 * @param end The end value (default = 1).
 */
export const createAccuratePercentageRange = (start = 0, end = 1): ContinuousRange => ({
  type: RangeType.Continuous,
  start,
  end,
  stringToValue: value => +value / 100,
  valueToString: (value: number) => {
    const strValue = (value * 100).toFixed(1);
    if (strValue === '100.0')
      return '100%';
    return strValue + '%';
  }
});

/**
 * Creates a range whose value is either 0 or 1.
 * 
 * @param offLabel The label for when the value is 0.
 * @param onLabel The label for when the value is 1.
 */
export const createToggleRange = (offLabel = 'Off', onLabel = 'On'): ChoiceRange => ({
  type: RangeType.Choice,
  choices: [
    { value: 0, label: offLabel },
    { value: 1, label: onLabel }
  ]
});
