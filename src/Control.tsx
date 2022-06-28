import { ParameterGestureHandler, ParameterGestureHandlerProps } from './ParameterGestureHandler';
import { rangeFunctions } from './range/range';
import { JSX, splitProps } from 'solid-js';

export type ControlProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> & Omit<ParameterGestureHandlerProps, 'children'> & {
  label?: string;
  defaultValue?: number;
  onGestureStart?(e: MouseEvent | TouchEvent): void;
  onGestureEnd?(e: MouseEvent | TouchEvent): void;
  children: any;
}

export function Control(allProps: ControlProps) {
  const [props, otherProps] = splitProps(allProps, ['children', 'label', 'defaultValue']);
  const [gestureProps, divProps] = splitProps(otherProps, ['value', 'range', 'onStart', 'onChange']);

  const onGestureStart = (e: MouseEvent | TouchEvent) => {
    if (divProps.onGestureStart instanceof Function) {
      divProps.onGestureStart(e);
    }
    
    const onGestureEnd = (e: MouseEvent) => {
      if (divProps.onGestureEnd instanceof Function)
        divProps.onGestureEnd && divProps.onGestureEnd(e);
        
      window.removeEventListener('mouseup', onGestureEnd);
    };
    window.addEventListener('mouseup', onGestureEnd);
  }

  const resetToDefault = () => {
    if (props.defaultValue && gestureProps.onChange)
      gestureProps.onChange(props.defaultValue);
  }

  return (
    <ParameterGestureHandler {...gestureProps}>
      {ref =>
        <div
          ref={ref}
          onDblClick={resetToDefault}
          tabIndex={0}
          role="slider"
          aria-label={props.label}
          aria-valuemin={rangeFunctions.getStart(gestureProps.range)}
          aria-valuemax={rangeFunctions.getEnd(gestureProps.range)}
          aria-valuenow={gestureProps.value}
          aria-valuetext={rangeFunctions.toString(gestureProps.range, gestureProps.value)}
          {...divProps}
          onMouseDown={onGestureStart}
          onTouchStart={onGestureStart}
          onClick={onGestureStart}>
          {props.children}
        </div>
      }
    </ParameterGestureHandler>
  );
}
