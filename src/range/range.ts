
/**
 * A `Range` specifies the range, scale, and UI behaviours of a controlled value.
 * There are two types of range: {@link ContinuousRange} and {@link ChoiceRange}.
 * 
 * @group Ranges
 */
export type Range = ContinuousRange | ChoiceRange;

/**
 * The type of a range.
 * Currently the only possible types are `Continuous` and `Choice`.
 * 
 * @group Ranges
 */
export enum RangeType { Continuous, Choice }

/**
 * The most common type of range that is used for continuous numerical values (e.g. frequency, volume, etc).
 * 
 * @group Ranges
 */
export interface ContinuousRange {
  /**
   * The type of a ContinuousRange is always RangeType.Continuous.
   */
  type: RangeType.Continuous,

  /**
   * The start value of the range.
   */
  start: number,

  /**
   * The end value of the range.
   */
  end: number,

  /**
   * Whether the range is a bipolar one.
   */  
  bipolar?: boolean,

  /**
   * A function for converting a value with a certain unit to a value in the range.
   */
  stringToValue?: (value: number, unit: string) => number,

  /**
   * A function for formatting a value of this range as a string.
   */
  valueToString?: (value: number) => string,

  /**
   * The scaling of the range defines how the value is controlled in a UI. The default is `Scale.Linear`.
   */
  scale?: {
    type: Scale.Exponential,
    exp: number
  } | {
    type: Scale.Logarithmic
  } | {
    type: Scale.Linear
  },

  /**
   * The values to which the user-interface control should snap.
   * Note! Always provide these values from smallest to largest.
   */
  snap?: number[] | number,

  /**
   * The step between values. If you want a range that allows only integer values, set this to 1.
   */
  step?: number,

  /**
   * How far away a value has to be from a snap point for it to snap.
   */
  snapMargin?: number
}

/**
 * The scaling of a {@link ContinuousRange}.
 * 
 * @group Ranges
 */
 export enum Scale {
  Exponential,
  Logarithmic,
  Linear
}

/**
 * A range that represents a finite number of choices with textual labels (think enums).
 * 
 * @group Ranges
 */
export interface ChoiceRange {
  /**
   * The type of a ChoiceRange is always RangeType.Choice.
   */
  type: RangeType.Choice,

  /**
   * A list of choices that the range contains (see Choice below).
   */
  choices: Choice[]
}

/**
 * Used by {@link ChoiceRange}.
 * 
 * @group Ranges
 */
export interface Choice {
  /**
   * The numerical value of the choice.
   */
  value: number;

  /**
   * The textual (user-friendly) representation of the choice.
   */  
  label: string;

  /**
   * Additional free-form data.
   */
  data?: unknown;
}
