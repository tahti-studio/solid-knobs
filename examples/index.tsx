import { render } from 'solid-js/web';
import { createSignal } from 'solid-js';

// '../src' would be 'solid-knobs' in a real-life scenario
import { 
  Arc,
  ContinuousRange,
  Control,
  rangeCreators,
  createSmoothedValue,
  ImageStripControl,
  Range,
  rangeFunctions,
  RangeType,
  Scale,
  ValueInput
} from '../src';

interface DemoKnobProps {
  range: Range;
  defaultValue: number;
  smoothed?: boolean;
}

// simple SVG knob showcasing how to use solid-knobs' primitives to build vectorised controls
function SVGKnobDemo(props: DemoKnobProps) {
  const [value, setValue] = createSignal(props.defaultValue);
  
  const normalisedValue = () => rangeFunctions.toNormalised(props.range, value());

  const smoothedValue = createSmoothedValue(normalisedValue, 0.7);

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
            endAngle={-baseAngle + baseAngle * 2 * (props.smoothed ? smoothedValue() : normalisedValue())}
            stroke="black"
            stroke-width={10} />
        </svg>
      </Control>
      <ValueInput
        class="value-input"
        range={props.range}
        value={value()}
        onChange={setValue} />
    </>
  );
}

function ImageStripControlDemo() {
  const [value, setValue] = createSignal(0.5);

  const range: ContinuousRange = {
    type: RangeType.Continuous,
    start: 0,
    end: 1,
    valueToString: v => v.toFixed(2)
  };

  return (
    <>
      <ImageStripControl
        value={value()}
        defaultValue={0.5}
        onChange={setValue}
        range={range}
        imageSrc={require('./knob.png')}
        numFrames={79} />
      <ValueInput
        class="value-input"
        value={value()}
        onChange={setValue}
        range={range} />
    </>
  );
}

function ExampleApp() {
  return <>
    <h1>solid-knobs examples</h1>

    <p>
      <a href="https://github.com/tahti-studio/solid-knobs/">Learn more</a>
      &nbsp;&bull;&nbsp;
      <a href="https://github.com/tahti-studio/solid-knobs/blob/master/examples/index.tsx">See the code</a>
    </p>
    
    <div class="showcase-list">
      <div class="showcase">
        <h2>Basic</h2>
        <SVGKnobDemo
          defaultValue={0.5}
          range={rangeCreators.createVolumeRange()} />
      </div>

      <div class="showcase">
        <h2>With stepped range</h2>
        <SVGKnobDemo
          defaultValue={7}
          range={{
            type: RangeType.Continuous,
            start: 1,
            end: 11,
            step: 1,
            valueToString: v => String(Math.round(v))
          }} />
      </div>
      
      <div class="showcase">
        <h2>With logarithmic scale</h2>
        <SVGKnobDemo
          defaultValue={1000}
          range={rangeCreators.createFrequencyRange()} />
      </div>
      
      <div class="showcase">
        <h2>With exponential scale</h2>
        <SVGKnobDemo
          defaultValue={1.25}
          range={{
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
          }} />
      </div>
      
      <div class="showcase">
        <h2>Snapping to specific values</h2>
        <SVGKnobDemo
          defaultValue={10}
          range={{
            type: RangeType.Continuous,
            start: -50,
            end: 50,
            bipolar: true,
            snap: [0, 10, 25, 40]
          }} />
      </div>
      
      <div class="showcase">
        <h2>With discrete choices</h2>
        <SVGKnobDemo
          defaultValue={3}
          range={{
            type: RangeType.Choice,
            choices: [
              { value: 0, label: 'LP 12dB' },
              { value: 1, label: 'LP 24dB' },
              { value: 2, label: 'HP 12dB' },
              { value: 3, label: 'HP 24dB' },
              { value: 4, label: 'BP 12dB' },
              { value: 5, label: 'BP 24dB' }
            ]
          }} />
      </div>
      
      <div class="showcase">
        <h2>Using image strip</h2>
        <ImageStripControlDemo />
      </div>

      <div class="showcase">
        <h2>With smoothed movement</h2>
        <SVGKnobDemo
          smoothed
          defaultValue={0.5}
          range={rangeCreators.createVolumeRange()} />
      </div>
    </div>
  </>;
}

render(ExampleApp, document.getElementById('container')!);
