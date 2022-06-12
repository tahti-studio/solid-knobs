export { ContinuousRange, ChoiceRange, ToggleRange, Range, Choice, limit, Scale } from './range'; 

import { Scale, ContinuousRange } from './range';

export const createFrequencyRange = (start = 20, end = 20000) =>
  new ContinuousRange({
    start,
    end,
    scale: { type: Scale.Logarithmic, base: 10 },
    fromString: (value, unit) => {
      if (unit === 'k') {
        return value * 1000;
      }
      return value;
    },
    toString: (v: number) => {
      if (v < 10000) {
        return Math.round(v) + ' Hz';
      } else {
        return (v / 1000).toFixed(1) + ' kHz';
      }
    }
  });
export const createVolumeRange = (start = 0, end = 1) =>
  new ContinuousRange({
    start,
    end,
    scale: {
      type: Scale.Exponential,
      exp: 1.5
    },
    fromString: (value: number, unit: string) => {
      return Math.pow(10, value / 20);
    },
    toString: (value: number) => {
      if (value === 0) {
        return '-inf';
      }
      if (value < 0.2) {
      return Math.round(20 * Math.log10(value)) + ' dB';
      }
      return (20 * Math.log10(value)).toFixed(1) + ' dB';
    }
  });

export const createPercentageRange = (start = 0, end = 1) =>
  new ContinuousRange({
    start,
    end,
    fromString: value => +value / 100,
    toString(value) {
      return Math.round(value * 100) + '%'
    }
  });

export const createBipolarPercentageRange = (start = 0, end = 1) =>
  new ContinuousRange({
    start,
    end,
    bipolar: true,
    fromString: value => +value / 100,
    toString(value) {
      return (value > 0 ? '+' : '') + Math.round(value * 100) + '%'
    }
  });

export const createAccuratePercentageRange = (start = 0, end = 1) =>
  new ContinuousRange({
    start,
    end,
    fromString: value => +value / 100,
    toString: (value: number) => {
      const strValue = (value * 100).toFixed(1);
      if (strValue === '100.0')
        return '100%';
      return strValue + '%';
    }
  });
