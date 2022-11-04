import { onCleanup } from 'solid-js';

/**
 * @group Component Properties
 */
export interface ParameterGestureHandlerProps {
  children: (ref: any) => any;

  /**
   * The normalised value.
   */
  value: number,

  /**
   * Called with the normalised value when it changes.
   * 
   * @param value The normalised value (ranging between 0 and 1).
   * @param fine `true` when the value is adjusted more finely (e.g. when shift is pressed).
   */
  onChange?: (value: number, fine: boolean) => void,

  /**
   * Called when the value is nudged forward or backward with the arrows keys.
   * 
   * @param amount The size of the nudge. Can either be -1 or 1 for a small nudge, or -10 or 10 for a big nudge.
   */
  onNudge?: (amount: number) => void,

  /**
   * Called when starting the change gesture.
   */
  onGestureStart?: (e: MouseEvent | TouchEvent, value: number) => void,

  /**
   * Called when ending the change gesture.
   */
  onGestureEnd?: (e: MouseEvent | TouchEvent, value: number) => void,

  /**
   * The relative speed of the change gesture. The default is 1.
   */
  speed?: number,

  /**
   * Whether the cursor should be hidden while changing the value.
   * Note! This might result in constant annoying pop-ups in certain browsers.
   */
  hideCursor?: boolean
}

let numActiveGestures = 0;
window.addEventListener('selectstart', e => {
  if (numActiveGestures > 0) {
    e.preventDefault();
  }
});

/**
 * The `ParameterGestureHandler` component doesn't render anything itself, it simply wraps an existing element and makes it behave like a control by giving it the following abilities:
 * 
 * - Click and drag the element up/down to change the value.
 * - Scroll on top of the element to change the value.
 * - Hold shift while changing the value to change it more precisely.
 * - After focusing the element, the up/down/left/right arrow keys can be used to nudge the value by different increments.
 * 
 * It also takes care of blocking user selection on the page while dragging.
 * 
 * @example
 * ```jsx
 * import { ParameterGestureHandler } from 'solid-knobs';
 * 
 * ...
 * 
 * <ParameterGestureHandler {...props}>
 *  {ref =>
 *    <div ref={ref}>
 *      // custom visualisation code
 *    </div>
 *  }
 * </ParameterGestureHandler>
 * ```
 * 
 * @group Components
 */
export function ParameterGestureHandler(props: ParameterGestureHandlerProps) {
  let element: HTMLElement | null = null;
  let isDragging: boolean = false;
  let valueOnDragStart: number = 0;
  let valueOnWheelStart = 0;
  let dragValue: number = 0;
  let dragStartValue: number = 0;

  const change = (newValue: number, fine: boolean) => {
    if (props.onChange) {
      if (newValue !== props.value) {
        props.onChange(newValue, fine);
      }
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      if (props.hideCursor && document.pointerLockElement !== element) {
        element?.requestPointerLock();
      }
      dragValue -= e.movementY;
      const speedMultiplier = e.shiftKey ? 0.1 : 1;
      const delta = speedMultiplier * (props.speed || 1) * dragValue / 250;
      change(valueOnDragStart + delta, e.shiftKey);
    }
  }

  const onMouseUp = (e: MouseEvent) => {
    if (!isDragging)
      return;

    numActiveGestures--;
      
    if (props.onGestureEnd) {
      props.onGestureEnd(e, props.value);
    }
    isDragging = false;
    if (props.hideCursor) {
      document.exitPointerLock();
    }
  };

  const onMouseDown = (e: MouseEvent) => {
    if (props.onGestureStart) {
      props.onGestureStart(e, props.value);
    }

    numActiveGestures++;

    valueOnDragStart = props.value;
    dragValue = 0;
    dragStartValue = 0;
    isDragging = true;
  }

  const keyDown = (e: KeyboardEvent) => {
    if (e.shiftKey) {
      valueOnDragStart = props.value;
    }
  }

  const keyUp = () => {
    if (isDragging) {
      valueOnDragStart = props.value;
      dragValue = dragStartValue;
    }
  }

  let isWheeling = false;
  let wheelingTimeout: NodeJS.Timeout;
  const wheel = (e: WheelEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!isWheeling) {
      valueOnWheelStart = props.value;
      isWheeling = true;
    }
    valueOnWheelStart -= e.deltaY / 1500;

    change(valueOnWheelStart, false);

    clearTimeout(wheelingTimeout);
    wheelingTimeout = setTimeout(() => {
      isWheeling = false;
    }, 500);
  }

  const touchStart = (e: TouchEvent) => {
    if (props.onGestureStart) {
      props.onGestureStart(e, props.value);
    }

    numActiveGestures++;

    valueOnDragStart = props.value;
    dragValue = e.touches[0].pageY;
    isDragging = true;
  }

  const touchMove = (e: TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isDragging) {
      dragStartValue = e.touches[0].pageY;
      const delta = (props.speed || 1) * (dragValue - dragStartValue) / 250;
      change(valueOnDragStart + delta, e.shiftKey);
    }
  }

  const touchEnd = (e: TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isDragging = false;

    numActiveGestures--;

    if (props.onGestureEnd) {
      props.onGestureEnd(e, props.value);
    }
  }

  const arrowKeyListener = (e: KeyboardEvent) => {
    if (props.onNudge && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key) && props.onChange) {
      e.preventDefault();
      e.stopPropagation();
      const nudge = (['ArrowDown', 'ArrowUp'].includes(e.key) ? 1 : 10) * (['ArrowLeft', 'ArrowDown'].includes(e.key) ? -1 : 1);
      props.onNudge(nudge);
    }
  }

  const focus = () => {
    element?.addEventListener('keydown', arrowKeyListener);
  }

  const blur = () => {
    element?.removeEventListener('keydown', arrowKeyListener);
  }

  const registerElement = (newElement: HTMLElement) => {
    if (!element && newElement) {
      element = newElement;

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
  
      element.addEventListener('mousedown', onMouseDown);
      element.addEventListener('wheel', wheel, { passive: false });
      element.addEventListener('keyup', keyUp);
      element.addEventListener('keydown', keyDown);

      element.addEventListener('focus', focus);
      element.addEventListener('blur', blur);
  
      (element as any).addEventListener('touchstart', touchStart, { cancelable: true });
      (element as any).addEventListener('touchmove', touchMove, { cancelable: true });
      (element as any).addEventListener('touchend', touchEnd, { cancelable: true });
    }
  }

  onCleanup(() => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);

    if (element) {
      element.removeEventListener('mousedown', onMouseDown);
      element.removeEventListener('wheel', wheel);
      element.removeEventListener('keyup', keyUp);
      element.removeEventListener('keydown', keyDown);
      element.removeEventListener('blur', blur);

      element.removeEventListener('touchstart', touchStart);
      element.removeEventListener('touchmove', touchMove);
      element.removeEventListener('touchend', touchEnd);
    }
  });

  return props.children(registerElement);
}
