export function limit(value: number, min: number, max: number) {
  return Math.min(Math.max(min, value), max);
}

function log(n: number, base: number) {
  return Math.log(n) / Math.log(base);
}

function toRange(value: number, valueStart: number, valueEnd: number, targetStart: number, targetEnd: number) {
  if (valueEnd === valueStart) {
    return targetStart;
  }
  const normalised = (value - valueStart) / (valueEnd - valueStart);
  return limit(targetStart + normalised * (targetEnd - targetStart), targetStart, targetEnd);
}

export interface Range {
  toNormalised(value: number): number;
  fromNormalised(value: number): number;
  fromString(value: number, unit: string): number;
  toString(value: number): string;
  snap(value: number): number;
  getRandom(): number;
  limit(value: number): number;
  nudge(value: number, steps: number): number;
  getStart(): number;
  getEnd(): number;
  setStart(value: number): void;
  setEnd(value: number): void;
  modulationToString(value: number): string;
}

interface Args {
  start: number,
  end: number,
  bipolar?: boolean,
  fromString: (value: number, unit: string) => number,
  toString: (value: number) => string,
  interpolation: {
    type: 'exp',
    exp: number
  } | {
    type: 'log',
    base: number
  } | {
    type: 'none'
  },
  snap?: number[] | number,
  step?: number
}

export type Choice = {
  value: number;
  label: string;
  group?: string;
};

export class ChoiceRange implements Range {
  choices: Choice[];

  constructor(choices: Choice[]) {
    this.choices = choices;
  }

  toNormalised(value: number) {
    return this.choices.findIndex(c => c.value === value) / (this.choices.length - 1);
  }

  fromNormalised(value: number) {
    value = limit(value, 0, 1);
    return this.choices[Math.round(value * (this.choices.length - 1))].value;
  }

  fromString(value: number, unit: string) {
    return value;
  }

  toString(value: number) {
    return this.choices.find(d => d.value === value)?.label || '???';
  }

  getRandom() {
    return this.choices[Math.floor(Math.random() * this.choices.length)].value;
  }

  snap(value: number) {
    return value;
  }

  limit(value: number) {
    value = Math.round(value);
    if (this.choices.some(c => c.value === value)) {
      return value;
    }
    return -1;
  }

  nudge(value: number, steps: number) {
    const index = limit(this.choices.findIndex(c => c.value === value) + steps, 0, this.choices.length - 1);
    return this.choices[index].value;
  }

  getStart() {
    return this.choices[0].value;
  }

  getEnd() {
    return this.choices[this.choices.length - 1].value;
  }

  setStart(value: number) {
    throw new Error('not applicable');
  }

  setEnd(value: number) {
    throw new Error('not applicable');
  }

  modulationToString(value: number): string {
    return `${(100 * value).toPrecision(1)}%`;
  }
}

export class ToggleRange implements Range {
  toNormalised(value: number) {
    return value > 0.5 ? 1 : 0;
  }

  fromNormalised(value: number) {
    return value > 0.5 ? 1 : 0;
  }

  fromString(value: number, unit: string) {
    return value;
  }

  getRandom() {
    return Math.random() > 0.5 ? 1 : 0;
  }

  snap(value: number) {
    return value;
  }

  limit(value: number) {
    return limit(Math.round(value), 0, 1);
  }

  toString(value: number) {
    return value > 0.5 ? 'on' : 'off';
  }

  nudge(value: number, steps: number) {
    if (value === 0 && steps > 0) {
      return 1;
    } else if (value === 1 && steps < 0) {
      return 0;
    }
    return value;
  }

  getStart() {
    return 0;
  }

  getEnd() {
    return 1;
  }

  setStart(value: number) {
    throw new Error('not applicable');
  }

  setEnd(value: number) {
    throw new Error('not applicable');
  }

  modulationToString(value: number): string {
    return `${(100 * value).toPrecision(1)}%`;
  }
}

export class ContinuousRange implements Range {
  args: Args = {
    start: 0,
    end: 1,
    fromString: (value: number, unit: string) => {
      return value;
    },
    toString: (value: number) => {
      return value.toFixed(1);
    },
    interpolation: { type: 'none' }
  };

  snapMargin = 0.025;
  interpolatedStart: number;
  interpolatedEnd: number;

  constructor(args: Partial<Args>) {
    this.args = {
      ...this.args,
      ...args
    };
    this.interpolatedStart = this.interpolate(this.args.start);
    this.interpolatedEnd = this.interpolate(this.args.end);
    this.fromString = this.args.fromString;

    if (this.args.bipolar && this.args.snap && Array.isArray(this.args.snap)) {
      for (const snap of [...this.args.snap]) {
        if (snap !== 0)
          this.args.snap.push(-snap);
      }
    }
    if (Array.isArray(this.args.snap)) {
      this.args.snap.sort();
    }
  }

  fromString: Args['fromString'];

  withStart(newStart: number) {
    return new ContinuousRange({
      ...this.args,
      start: newStart
    });
  }

  withEnd(newEnd: number) {
    return new ContinuousRange({ ...this.args, end: newEnd });
  }

  asBipolar() {
    return new ContinuousRange({ ...this.args, bipolar: true });
  }

  withInterpolation(interpolation: Args['interpolation']) {
    return new ContinuousRange({ ...this.args, interpolation });
  }

  withSnap(values: number[]) {
    return new ContinuousRange({ ...this.args, snap: values });
  }

  limitToStep(value: number) {
    if (this.args.step) {
      return Math.round(value / this.args.step) * this.args.step;
    }
    return value;
  }

  snap(value: number) {
    value = this.toNormalised(value);
    if (Array.isArray(this.args.snap)) {
      for (const step of this.args.snap) {
        if (Math.abs(value - this.toNormalised(step)) <= this.snapMargin)
          return step;
      }
    } else if (this.args.snap !== undefined) {
      return Math.round(this.fromNormalised(value) / this.args.snap) * this.args.snap;
    }
    return this.fromNormalised(value);
  }

  getRandom() {
    return this.fromNormalised(Math.random());
  }

  limit(value: number) {
    if (this.args.bipolar) {
      return limit(value, -this.args.end, this.args.end);
    }
    return limit(value, this.args.start, this.args.end);
  }

  toNormalised(value: number) {
    if (this.args.bipolar) {
      const interpolatedValue = Math.sign(value) * this.interpolate(this.limitToStep(Math.abs(value)));
      return toRange(interpolatedValue, -this.interpolatedEnd, this.interpolatedEnd, 0, 1);
    }
    const interpolatedValue = this.interpolate(this.limitToStep(value));
    return toRange(interpolatedValue, this.interpolatedStart, this.interpolatedEnd, 0, 1);
  }

  fromNormalised(normalisedValue: number) {
    if (this.args.bipolar) {
      const denormalisedValue = toRange(normalisedValue, 0, 1, -this.interpolatedEnd, this.interpolatedEnd);
      return this.limitToStep(Math.sign(denormalisedValue) * this.inverseInterpolate(Math.abs(denormalisedValue)));
    }
    const denormalisedValue = toRange(normalisedValue, 0, 1, this.interpolatedStart, this.interpolatedEnd);
    return this.limitToStep(this.inverseInterpolate(denormalisedValue));
  }

  interpolate(value: number) {
    switch (this.args.interpolation.type) {
      case 'exp':
        return Math.pow(value, 1 / (this.args.interpolation.exp || 1));
      case 'log':
        return log(value, this.args.interpolation.base);
    }
    return value;
  }

  inverseInterpolate(value: number) {
    switch (this.args.interpolation.type) {
      case 'exp':
        return Math.pow(value, this.args.interpolation.exp || 1);
      case 'log':
        return Math.pow(this.args.interpolation.base, value);
    }
    return value;
  }

  asModulationRange(): ContinuousRange {
    const span = Math.abs(this.args.end - this.args.start);
    return new ContinuousRange({
      ...this.args,
      start: 0,
      bipolar: true,
      end: span
    });
  }

  toString(value: number) {
    return this.args.toString(value);
  }

  nudge(value: number, steps: number) {
    if (this.args.step) {
      return this.limitToStep(value + steps);
    }
    return this.fromNormalised(this.toNormalised(value) + steps * 0.01);
  }

  getStart() {
    return this.args.start;
  }

  getEnd() {
    return this.args.end;
  }

  setStart(value: number) {
    this.args.start = value;
    this.interpolatedStart = this.interpolate(this.args.start);
  }

  setEnd(value: number) {
    this.args.end = value;
    this.interpolatedEnd = this.interpolate(this.args.end);
  }

  modulationToString = (value: number): string => {
    return this.toString(value * (this.args.end - this.args.start));
  }
}
