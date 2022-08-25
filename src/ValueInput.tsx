import { JSX, splitProps } from "solid-js";
import { Range, rangeFunctions, RangeType } from "./range";

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
      onMouseUp={(e: any) => {
        if (e.target.selectionStart === e.target.selectionEnd) {
          e.target.select();
        }
      }}
      onKeyDown={(e: any) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();

          let number, unit;
          if (props.range.type === RangeType.Choice) {
            number = 0;
            unit = e.target.value;
          } else {
            const match = e.target.value.match(/^\-?[0-9]+(\.[0-9]+)?/g, '');
            if (!match) {
              return;
            }
            number = match[0];
            unit = e.target.value.replace(number, '');
            console.log(number, unit);
          }
          props.onChange(
            rangeFunctions.limit(props.range, rangeFunctions.fromString(props.range, +number, unit))
          );
          e.target.value = rangeFunctions.toString(props.range, props.value);
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
