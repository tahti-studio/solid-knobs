/**
 * @group Helpers
 */

import { ContinuousRange, Range, RangeType, Scale } from "./range";

/**
 * Converts `value` to a normalised value (ranging from 0 to 1) and returns it.
 */
export function toNormalised(range: Range, value: number): number {
  switch (range.type) {
    case RangeType.Choice:
      return range.choices.findIndex(c => c.value === value) / (range.choices.length - 1);
    case RangeType.Continuous: {
      const interpolatedStart = interpolate(range, range.start);
      const interpolatedEnd = interpolate(range, range.end);
      if (range.bipolar) {
        const interpolatedValue = Math.sign(value) * interpolate(range, limitToStep(range, Math.abs(value)));
        return toRange(interpolatedValue, -interpolatedEnd, interpolatedEnd, 0, 1);
      }
      const interpolatedValue = interpolate(range, limitToStep(range, value));
      return toRange(interpolatedValue, interpolatedStart, interpolatedEnd, 0, 1);
    }
      
  }
}

/**
 * Converts a normalised `value` (ranging from 0 to 1) to it's natural range and returns it.
 */
export function fromNormalised(range: Range, normalisedValue: number): number {
  switch (range.type) {
    case RangeType.Continuous: {
      const interpolatedStart = interpolate(range, range.start);
      const interpolatedEnd = interpolate(range, range.end);
      if (range.bipolar) {
        const denormalisedValue = toRange(normalisedValue, 0, 1, -interpolatedEnd, interpolatedEnd);
        return limitToStep(range, Math.sign(denormalisedValue) * inverseInterpolate(range, Math.abs(denormalisedValue)));
      }
      const denormalisedValue = toRange(normalisedValue, 0, 1, interpolatedStart, interpolatedEnd);
      return limitToStep(range, inverseInterpolate(range, denormalisedValue));
    }
    case RangeType.Choice: {
      normalisedValue = limitValue(normalisedValue, 0, 1);
      return range.choices[Math.round(normalisedValue * (range.choices.length - 1))].value;
    }
  }
}

/**
 * Parses `value` from a value and a unit and returns the value as a number.
 */
export function fromString(range: Range, value: number, unit: string): number {
  switch (range.type) {
    case RangeType.Choice: {
      return range.choices.find(c => c.label.match(new RegExp(unit, 'gi')))?.value || 0;
    }
    case RangeType.Continuous: {
      return range.stringToValue ? range.stringToValue(value, unit) : Number(value);
    }
  }
}

/**
 * Converts an unnormalised `value` to a user-friendly string representation.
 */
 export function toString(range: Range, value: number): string {
  switch (range.type) {
    case RangeType.Continuous: {
      return range.valueToString ? range.valueToString(value) : value.toFixed(1);
    }
    case RangeType.Choice: {
      return range.choices.find(d => d.value === value)?.label || '???';
    }
  }
}

/**
 * Snaps an unnormalised `value` to the closest legal value.
 */
 export function snap(range: Range, value: number): number {
  switch (range.type) {
    case RangeType.Continuous: {
      value = toNormalised(range, value);
      if (Array.isArray(range.snap)) {
        for (const step of range.snap) {
          if (Math.abs(value - toNormalised(range, step)) <= (range.snapMargin || 0.025))
            return step;
        }
      } else if (range.snap !== undefined) {
        return Math.round(fromNormalised(range, value) / range.snap) * range.snap;
      }
      return fromNormalised(range, value);
    }
    case RangeType.Choice: {
      return value;
    }
  }
}

/**
 * Returns a random un-normalised value.
 */
export function getRandom(range: Range): number {
  return fromNormalised(range, Math.random());
}

/**
 * Limits an un-normalised value to be within the range.
 */
export function limit(range: Range, value: number): number {
  switch (range.type) {
    case RangeType.Choice: {
      value = Math.round(value);
      if (range.choices.some(c => c.value === value)) {
        return value;
      }
      return -1;
    }
    case RangeType.Continuous: {
      if (range.bipolar) {
        return limitValue(value, -range.end, range.end);
      }
      return limitValue(value, range.start, range.end);
    }
  }
}

/**
 * Nudges the un-normalised `value` by `steps`.
 */
export function nudge(range: Range, value: number, steps: number): number {
  switch (range.type) {
    case RangeType.Choice: {
      const index = limitValue(range.choices.findIndex(c => c.value === value) + steps, 0, range.choices.length - 1);
      return range.choices[index].value;
    }
    case RangeType.Continuous: {
      if (range.step) {
        return limitToStep(range, value + steps);
      }
      return fromNormalised(range, toNormalised(range, value) + steps * 0.01);
    }
  }
}

export function getStart(range: Range) {
  switch (range.type) {
    case RangeType.Choice: {
      return 0;
    }
    case RangeType.Continuous: {
      return range.start;
    }
  }
}

export function getEnd(range: Range) {
  switch (range.type) {
    case RangeType.Choice: {
      return range.choices.length - 1;
    }
    case RangeType.Continuous: {
      return range.end;
    }
  }
}

function interpolate(range: ContinuousRange, value: number) {
  switch (range.scale?.type) {
    case Scale.Exponential:
      return Math.pow(value, 1 / (range.scale.exp || 1));
    case Scale.Logarithmic:
      return Math.log(value);
  }
  return value;
}

function inverseInterpolate(range: ContinuousRange, value: number) {
  switch (range.scale?.type) {
    case Scale.Exponential:
      return Math.pow(value, range.scale.exp || 1);
    case Scale.Logarithmic:
      return Math.exp(value);
  }
  return value;
}

function limitToStep (range: ContinuousRange, value: number) {
  if (range.step) {
    return Math.round(value / range.step) * range.step;
  }
  return value;
}

/**
 * Clamps `value` to at least `min` and at most `max`.
 */
 export function limitValue(value: number, min: number, max: number) {
  return Math.min(Math.max(min, value), max);
}

/**
 * Converts `value` from the range `valueStart`...`valueEnd` to the range `targetStart`...`targetEnd`.
 */
function toRange(value: number, valueStart: number, valueEnd: number, targetStart: number, targetEnd: number) {
  if (valueEnd === valueStart) {
    return targetStart;
  }
  const normalised = (value - valueStart) / (valueEnd - valueStart);
  return limitValue(targetStart + normalised * (targetEnd - targetStart), targetStart, targetEnd);
}
