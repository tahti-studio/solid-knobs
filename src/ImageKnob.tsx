import { createEffect, createSignal, splitProps } from 'solid-js';
import Control, { Props } from './Control';
import { rangeFunctions } from './range';

export enum KnobOrientation {
  Vertical, Horizontal
}

export function ImageKnob(allProps: Omit<Props, 'children'> & { imageSrc: string, numFrames: number, orientation?: KnobOrientation }) {
  const [loading, setLoading] = createSignal(false);
  const [imageSize, setImageSize] = createSignal({ width: 0, height: 0 });
  const [props, controlProps] = splitProps(allProps, ['numFrames', 'orientation', 'imageSrc']);

  const normalisedValue = () => rangeFunctions.toNormalised(controlProps.range, controlProps.value);
  const frameSize = () => imageSize().height / props.numFrames;
  const imageOffset = () => Math.floor(normalisedValue() * (props.numFrames - 1)) * frameSize();

  createEffect(() => {
    setLoading(true);
    const img = new Image();
    img.onload = () => {
      console.log(img.width, img.height);
      setImageSize({ width: img.width, height: img.height });
      setLoading(false);
    };
    img.src = props.imageSrc;
  });

  return (
    <Control
      {...controlProps}
      style={`background-image: url(${props.imageSrc}); background-repeat: no-repeat; background-position: 0 ${-imageOffset()}px; width: ${imageSize().width}px; height: ${frameSize()}px;`}>
    </Control>
  );
}
