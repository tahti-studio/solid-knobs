import { createEffect, onCleanup } from 'solid-js';
import { Range } from './range';

export interface Props {
  children: (ref: any) => any;
  value: number,
  onChange?: (value: number) => void,
  onStart?: (value: number) => void,
  onEnd?: (value: number) => void,
  range: Range,
  speed?: number,
  hideCursor?: boolean
}

export default function ParameterGestureHandler(props: Props) {
  let element: HTMLElement | null = null;
  let isDragging: boolean = false;
  let valueOnDragStart: number = 0;
  let dragValue: number = 0;
  let dragStartValue: number = 0;
  let value: number = 0;

  const change = (newValue: number, snap: boolean) => {
    if (props.onChange) {

      if (newValue !== value) {
        newValue = props.range.fromNormalised(newValue);
        if (snap) {
          newValue = props.range.snap(newValue);
        }
        props.onChange(newValue);
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
      change(valueOnDragStart + delta, !e.shiftKey);
    }
  }

  const onMouseUp = () => {
    if (!isDragging)
      return;
      
    if (props.onEnd) {
      props.onEnd(props.value);
    }
    isDragging = false;
    if (props.hideCursor) {
      document.exitPointerLock();
    }
  };

  const mouseDown = (e: MouseEvent) => {
    if (props.onStart) {
      props.onStart(props.value);
    }

    valueOnDragStart = value;
    dragValue = 0;
    dragStartValue = 0;
    isDragging = true;
  }

  const keyUp = () => {
    if (isDragging) {
      valueOnDragStart = value;
      dragValue = dragStartValue;
    }
  }

  const wheel = (e: WheelEvent) => {
    e.stopPropagation();
    e.preventDefault();
    change(value - e.deltaY / 2000, false);
  }

  const touchStart = (e: TouchEvent) => {
    if (props.onStart) {
      props.onStart(props.value);
    }

    valueOnDragStart = value;
    dragValue = e.touches[0].pageY;
    isDragging = true;
  }

  const touchMove = (e: TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isDragging) {
      dragStartValue = e.touches[0].pageY;
      const delta = (props.speed || 1) * (dragValue - dragStartValue) / 250;
      change(valueOnDragStart + delta, !e.shiftKey);
    }
  }

  const touchEnd = (e: TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isDragging = false;

    if (props.onEnd) {
      props.onEnd(props.value);
    }
  }

  const arrowKeyListener = (e: KeyboardEvent) => {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key) && props.onChange) {
      e.preventDefault();
      e.stopPropagation();
      const nudge = (['ArrowDown', 'ArrowUp'].includes(e.key) ? 1 : 10) * (['ArrowLeft', 'ArrowDown'].includes(e.key) ? -1 : 1);
      props.onChange(props.range.nudge(props.value, nudge));
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
  
      element.addEventListener('mousedown', mouseDown);
      element.addEventListener('wheel', wheel, { passive: false });
      element.addEventListener('keyup', keyUp);

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
      element.removeEventListener('mousedown', mouseDown);
      element.removeEventListener('wheel', wheel);
      element.removeEventListener('keyup', keyUp);
      element.removeEventListener('blur', blur);

      element.removeEventListener('touchstart', touchStart);
      element.removeEventListener('touchmove', touchMove);
      element.removeEventListener('touchend', touchEnd);
    }
  });

  createEffect(() => {
    value = props.range.toNormalised(props.value);
  });

  return props.children(registerElement);
}
