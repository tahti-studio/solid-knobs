import { ParameterGestureHandler, ParameterGestureHandlerProps } from './ParameterGestureHandler';
import { rangeFunctions } from './range';
import { JSX, splitProps } from 'solid-js';

/**
 * @group Component Properties
 */
export interface ControlProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'>, Omit<ParameterGestureHandlerProps, 'children'> {
  /**
   * The label that should be used for the aria label (for accessibility).
   */
  label?: string;

  /**
   * The default value.
   */
  defaultValue?: number;

  /**
   * Called when starting the change gesture.
   */
  onGestureStart?(e: MouseEvent | TouchEvent): void;

  /**
   * Called when ending the change gesture.
   */
  onGestureEnd?(e: MouseEvent | TouchEvent): void;

  children: any;
}

/**
 * The `Control` component implements a higher-level control that covers the most common use cases and takes care of accessibility.
 * It uses {@link ParameterGestureHandler} under the hood and you should probably use `Control` instead of {@link ParameterGestureHandler} for most cases.
 * 
 * @example
 * ```tsx
 * import { Control } from 'solid-knobs';
 * 
 * ...
 * 
 * <Control range={range} value={value()} onChange={setValue}>
 *   // your custom control visualisation goes here
 * </Control>
 * ```
 * 
 * @group Components
 */
export function Control(props: ControlProps) {
  const [_, otherProps] = splitProps(props, ['children', 'label', 'defaultValue']);
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
          onTouchStart={onGestureStart}>
          {props.children}
        </div>
      }
    </ParameterGestureHandler>
  );
}
