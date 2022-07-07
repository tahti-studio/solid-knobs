import { JSX, splitProps } from "solid-js";
import { Range, rangeFunctions } from "./range";

/**
 * @group Component Properties
 */
export interface ValueInputProps extends Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  /**
   * Called when the value is changed by the user.
   */
  onChange(value: number): void;

  /**
   * The range of the value.
   */
  range: Range;

  /**
   * The un-normalised value.
   */
  value: number;
}

/**
 * A glorified input element that formats the value according to a range and properly handles user input.
 * 
 * @group Components
 */
export function ValueInput(props: ValueInputProps): JSX.Element {
  const [_, inputProps] = splitProps(props, ['onChange', 'range', 'value']);

  return (
    <input
      type="text"
      onFocus={(e: any) => e.target.select()}
      onKeyDown={(e: any) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();
          const number = e.target.value.replace(/[^0-9\.\-]/g, '');
          const unit = e.target.value.replace(number, '');
          props.onChange(
            rangeFunctions.limit(props.range, rangeFunctions.fromString(props.range, +number, unit))
          );
          e.target.select();
        }
      }}
      onBlur={(e: any) => {
        e.target.value = rangeFunctions.toString(props.range, props.value);
      }}
      value={rangeFunctions.toString(props.range, props.value)}
      {...inputProps} />
  )
};
