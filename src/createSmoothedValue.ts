import { createEffect, createSignal, untrack } from 'solid-js';

/**
 * A utility function that smoothly animates the changes of a numerical value.
 * 
 * @param value The value to animate.
 * @param speed The relative speed at which to animate the value (optional, default = 1).
 * @param threshold How close the value has to be to the target for the animation to stop (optional, default = 0.001).
 * @returns A SolidJS signal that contains the animated value.
 * 
 * @example
 * ```ts
 * const [value, setValue] = createSignal(0.5);
 * 
 * const smoothedValue = createSmoothedValue(value);
 * 
 * createEffect(() =>
 *   console.log(smoothedValue())
 * );
 * ```
 */
export function createSmoothedValue(value: () => number, speed = 1, threshold = 0.001) {
  const [animatedValue, setAnimatedValue] = createSignal(value());

  let target = 0;
  let animating = false;
  let lastFrameStart = 0;
  createEffect(() => {
    target = value();
    if (!animating) {
      animating = true;
      lastFrameStart = Date.now();
      untrack(() => animate());
    }
  });

  function animate() {
    const deltaTime = Date.now() - lastFrameStart;
    lastFrameStart += deltaTime;

    const currentValue = animatedValue();
    const newValue = currentValue + (target - currentValue) * deltaTime / 40 * speed;
    setAnimatedValue(newValue);
    if (Math.abs(target - newValue) < threshold) {
      animating = false;
      setAnimatedValue(target);
    } else {
      requestAnimationFrame(animate);
    }
  }

  return animatedValue;
}
