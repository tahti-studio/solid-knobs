import ParameterGestureHandler, { Props as GestureHandlerProps } from './ParameterGestureHandler';
import { JSX, splitProps } from 'solid-js';

export type Props = Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> & Omit<GestureHandlerProps, 'children'> & {
  label?: string;
  defaultValue?: number;
  onGestureStart?(e: MouseEvent | TouchEvent): void;
  onGestureEnd?(e: MouseEvent | TouchEvent): void;
  children: any;
}

export default function Control(allProps: Props) {
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
          aria-valuemin={gestureProps.range.getStart()}
          aria-valuemax={gestureProps.range.getEnd()}
          aria-valuenow={gestureProps.value}
          aria-valuetext={gestureProps.range.toString(gestureProps.value)}
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
