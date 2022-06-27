// '../src' would be 'solid-knobs' in a real-life scenario
import { rangeFunctions, RangeType, Control, Arc, Range, ContinuousRange, ValueInput, createFrequencyRange, createVolumeRange, ChoiceRange, Scale, ImageKnob, createSmoothedValue } from '../src';
import { render } from 'solid-js/web';
import { createSignal } from 'solid-js';

interface ControlProps {
  range: Range;
  defaultValue: number;
}

// simple SVG knob showcasing how to use solid-knobs' primitives to build vectorised controls
function SVGKnob(props: ControlProps) {
  const [value, setValue] = createSignal(props.defaultValue);
  
  const normalisedValue = () => rangeFunctions.toNormalised(props.range, value());

  const baseAngle = 135;
  return (
    <>
      <Control
        defaultValue={props.defaultValue}
        range={props.range}
        value={value()}
        onChange={setValue}>
        <svg style="width: 5rem;" viewBox="0 0 100 100">
          <circle cx={50} cy={50} r={25} fill="#555" />
          <Arc
            x={50}
            y={50}
            radius={38}
            startAngle={-baseAngle}
            endAngle={baseAngle}
            stroke="#ccc"
            stroke-width={10} />
          <Arc
            x={50}
            y={50}
            radius={38}
            startAngle={props.range.type === RangeType.Continuous && props.range.bipolar ? 0 : -baseAngle}
            endAngle={-baseAngle + baseAngle * 2 * normalisedValue()}
            stroke="black"
            stroke-width={10} />
        </svg>
      </Control>
      <ValueInput class="value-input" range={props.range} value={value()} onChange={setValue} />
    </>
  );
}

const steppedRange: ContinuousRange = {
  type: RangeType.Continuous,
  start: 1,
  end: 11,
  step: 1,
  valueToString: v => String(Math.round(v))
};

const snappingRange: ContinuousRange = {
  type: RangeType.Continuous,
  start: -50,
  end: 50,
  bipolar: true,
  snap: [0, 10, 25, 40]
};

const choiceRange: ChoiceRange = {
  type: RangeType.Choice,
  choices: [
    { value: 0, label: 'LP 12dB' },
    { value: 1, label: 'LP 24dB' },
    { value: 2, label: 'HP 12dB' },
    { value: 3, label: 'HP 24dB' },
    { value: 4, label: 'BP 12dB' },
    { value: 5, label: 'BP 24dB' }
  ]
};

const exponentialScale: ContinuousRange = {
  type: RangeType.Continuous,
  start: 0,
  end: 5,
  scale: {
    type: Scale.Exponential,
    exp: 3
  },
  valueToString: v => {
    if (v < 1) {
      return Math.round(v * 1000) + ' ms';
    }
    return v.toFixed(2) + ' s';
  }
};

const imageKnobRange: ContinuousRange = {
  type: RangeType.Continuous,
  start: 0,
  end: 11
}

function ExampleApp() {
  const [imageKnobValue, setImageKnobValue] = createSignal(0.5);
  const smoothedValue = createSmoothedValue(imageKnobValue, 0.01);

  return <>
    <h1>solid-knobs examples</h1>

    <p>
      <a href="https://github.com/tahti-studio/solid-knobs/">Learn more</a>
      &nbsp;&bull;&nbsp;
      <a href="https://github.com/tahti-studio/solid-knobs/blob/master/examples/index.tsx">See the code</a>
    </p>
    
    <div class="showcase-list">
      <div class="showcase">
        <h2>Basic knob</h2>
        <SVGKnob defaultValue={0.5} range={createVolumeRange()} />
      </div>

      <div class="showcase">
        <h2>Knob with stepped range</h2>
        <SVGKnob defaultValue={7} range={steppedRange} />
      </div>
      
      <div class="showcase">
        <h2>Knob with logarithmic scale</h2>
        <SVGKnob defaultValue={1000} range={createFrequencyRange()} />
      </div>
      
      <div class="showcase">
        <h2>Knob with exponential scale</h2>
        <SVGKnob defaultValue={1.25} range={exponentialScale} />
      </div>
      
      <div class="showcase">
        <h2>Knob that snaps to specific values</h2>
        <SVGKnob defaultValue={10} range={snappingRange} />
      </div>
      
      <div class="showcase">
        <h2>Knob with choices</h2>
        <SVGKnob defaultValue={3} range={choiceRange} />
      </div>
      
      <div class="showcase">
        <h2>Knob using image-strip</h2>
        <ImageKnob
          style="display: inline-block;"
          value={smoothedValue()}
          onChange={setImageKnobValue}
          range={imageKnobRange}
          imageSrc={require('./knob.png')}
          numFrames={79} />
      </div>
    </div>
  </>;
}

render(ExampleApp, document.getElementById('container')!);
