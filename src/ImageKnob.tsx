import { createEffect, createSignal, splitProps } from 'solid-js';
import { Control, ControlProps } from './Control';
import { rangeFunctions } from './range';

export type ImageKnobProps = Omit<ControlProps, 'children'> & {
  imageSrc: string,
  numFrames: number,
  horizontal?: boolean
}

export function ImageKnob(allProps: ImageKnobProps) {
  const [imageSize, setImageSize] = createSignal({ width: 0, height: 0 });
  const [props, controlProps] = splitProps(allProps, ['numFrames', 'horizontal', 'imageSrc']);

  const normalisedValue = () => rangeFunctions.toNormalised(controlProps.range, controlProps.value);
  const frameSize = () => (props.horizontal ? imageSize().width : imageSize().height) / props.numFrames;
  const imageOffset = () => Math.round(normalisedValue() * (props.numFrames - 1)) * frameSize();

  const backgroundPosition = () => props.horizontal ? `${-imageOffset()}px 0` : `0 ${-imageOffset()}px`;
  const width = () => props.horizontal ? frameSize() : imageSize().width;
  const height = () => props.horizontal ? imageSize().height : frameSize();

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
        'background-position': backgroundPosition(),
        'width': `${width()}px`,
        'height': `${height()}px`
      }}>
    </Control>
  );
}
