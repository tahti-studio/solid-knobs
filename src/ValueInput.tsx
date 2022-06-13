import { JSX, splitProps } from "solid-js";
import { Range } from "./range";
import { rangeFunctions } from "./range/range";

interface Props extends Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  onChange(value: number): void;
  range: Range;
  value: number;
}

export default function ValueInput(allProps: Props) {
  const [props, inputProps] = splitProps(allProps, ['onChange', 'range', 'value']);

  return (
    <input
      type="text"
      onClick={(e: any) => e.target.select()}
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
