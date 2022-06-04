import { JSX, splitProps } from "solid-js";
import { Range } from "./range";


interface Props extends Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange(value: number): void;
  range: Range;
}

export default function ValueInput(allProps: Props) {
  const [props, inputProps] = splitProps(allProps, ['onChange', 'range']);
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
      value={inputProps.value}
      {...inputProps} />
  )
};
