import { JSX, splitProps } from "solid-js";
import { Range } from "./range";


interface Props extends Omit<Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'onChange'>, 'value'> {
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
          props.onChange(props.range.fromString(+number, unit));
        }
      }}
      value={props.range.toString(props.value)}
      {...inputProps} />
  )
};
