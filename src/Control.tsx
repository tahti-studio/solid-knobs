import ParameterGestureHandler, { Props as GestureHandlerProps } from './ParameterGestureHandler';
import { JSX, splitProps } from 'solid-js';

export type Props = Omit<Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'>, 'onMouseDown'> & GestureHandlerProps & {
  children?: any;
  label?: string;
  defaultValue?: number;
  onMouseDown(e: MouseEvent | TouchEvent): void;
}

export default function Control(allProps: Props) {
  const [props, otherProps] = splitProps(allProps, ['children', 'label', 'defaultValue']);
  const [gestureProps, divProps] = splitProps(otherProps, ['value', 'range', 'onStart', 'onChange']);

  const onMouseDown = (e: MouseEvent | TouchEvent) => {
    if (divProps.onMouseDown instanceof Function) {
      divProps.onMouseDown(e);
    }
    
    const mouseUpListener = (e: MouseEvent) => {
      if (divProps.onMouseUp instanceof Function)
        divProps.onMouseUp && divProps.onMouseUp(e as any);
        
      window.removeEventListener('mouseup', mouseUpListener);
    };
    window.addEventListener('mouseup', mouseUpListener);
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
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
          onClick={onMouseDown}>
          {props.children}
        </div>
      }
    </ParameterGestureHandler>
  );
}
