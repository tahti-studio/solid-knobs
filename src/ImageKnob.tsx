import { createEffect, createSignal, splitProps } from 'solid-js';
import { Control, Props } from './Control';
import { rangeFunctions } from './range';

export function ImageKnob(allProps: Omit<Props, 'children'> & { imageSrc: string, numFrames: number }) {
  const [imageSize, setImageSize] = createSignal({ width: 0, height: 0 });
  const [props, controlProps] = splitProps(allProps, ['numFrames', 'imageSrc']);

  const normalisedValue = () => rangeFunctions.toNormalised(controlProps.range, controlProps.value);
  const frameSize = () => imageSize().height / props.numFrames;
  const imageOffset = () => Math.round(normalisedValue() * (props.numFrames - 1)) * frameSize();

  createEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSize({ width: img.width, height: img.height });
    };
    img.src = props.imageSrc;
  });

  return (
    <Control
      {...controlProps}
      style={{
        'background-image': `url(${props.imageSrc})`,
        'background-repeat': 'no-repeat',
        'background-position': `0 ${-imageOffset()}px`,
        'width': `${imageSize().width}px`,
        'height': `${frameSize()}px`
      }}>
    </Control>
  );
}
