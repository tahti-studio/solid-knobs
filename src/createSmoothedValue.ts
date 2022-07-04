import { createEffect, createSignal, untrack } from 'solid-js';

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
