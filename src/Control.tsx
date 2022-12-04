import { ParameterGestureHandler } from './ParameterGestureHandler';
import { rangeFunctions, Range } from './range';
import { JSX, splitProps } from 'solid-js';

/**
 * @group Component Properties
 */
export interface ControlProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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

  /**
   * The un-normalised value.
   */
  value: number;

  /**
   * Called with the un-normalised value when it changes.
   * 
   * @param value The un-normalised value.
   */
  onChange(value: number): void;

  /**
   * The range of the value.
  */
  range: Range,

  /**
  * The relative speed of the change gesture. The default is 1.
  */
  speed?: number,

  /**
  * Whether the cursor should be hidden while changing the value.
  * Note! This might result in constant annoying pop-ups in certain browsers.
  */
  hideCursor?: boolean

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
  const [ownProps, divProps] = splitProps(props, ['children', 'speed', 'hideCursor', 'label', 'defaultValue', 'value', 'range', 'onGestureStart', 'onGestureEnd', 'onChange']);

  const resetToDefault = () => {
    if (props.defaultValue && ownProps.onChange)
      ownProps.onChange(props.defaultValue);
  }

  return (
    <ParameterGestureHandler
      value={rangeFunctions.toNormalised(props.range, props.value)}
      onChange={(value, fine) => {
        if (!ownProps.onChange)
          return;

        value = rangeFunctions.fromNormalised(props.range, value);

        if (!fine) {
          value = rangeFunctions.snap(props.range, value);
        }

        ownProps.onChange(value);
      }}
      speed={ownProps.speed}
      hideCursor={ownProps.hideCursor}
      onGestureStart={props.onGestureStart}
      onGestureEnd={props.onGestureEnd}
      onNudge={amount => ownProps.onChange(rangeFunctions.nudge(props.range, props.value, amount))}>
      {ref =>
        <div
          ref={ref}
          onDblClick={resetToDefault}
          tabIndex={0}
          role="slider"
          aria-label={props.label}
          aria-valuemin={rangeFunctions.getStart(ownProps.range)}
          aria-valuemax={rangeFunctions.getEnd(ownProps.range)}
          aria-valuenow={ownProps.value}
          aria-valuetext={rangeFunctions.toString(ownProps.range, ownProps.value)}
          {...divProps}>
          {props.children}
        </div>
      }
    </ParameterGestureHandler>
  );
}
