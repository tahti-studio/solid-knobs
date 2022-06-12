import { Control, Arc, Range, ContinuousRange, ValueInput, Scale } from 'solid-knobs';
import { render } from 'solid-js/web';
import { createSignal } from 'solid-js';

interface ControlProps {
  range: Range;
  defaultValue: number;
}

function Knob(props: ControlProps) {
  const [value, setValue] = createSignal(props.defaultValue);

  const normalisedValue = () => props.range.toNormalised(value());

  const baseAngle = 135;
  return (
    <Control class="knob" range={props.range} value={value()} onChange={setValue}>
      <svg style="width: 5rem;" viewBox="0 0 100 100">
        <circle cx={50} cy={50} r={25} fill="#555" />
        <Arc
          x={50}
          y={50}
          radius={38}
          startAngle={-baseAngle}
          endAngle={baseAngle}
          stroke="#eee"
          stroke-width={10} />
        <Arc
          x={50}
          y={50}
          radius={38}
          startAngle={props.range.args.bipolar ? 0 : -baseAngle}
          endAngle={-baseAngle + baseAngle * 2 * normalisedValue()}
          stroke="black"
          stroke-width={10} />
      </svg>
      <ValueInput class="value-input" range={props.range} value={value()} onChange={setValue} />
    </Control>
  );
}

const percentageRange = new ContinuousRange({
  start: 0,
  end: 1,
  toString: v => `${(100 * v).toFixed(2)}%`
});

const steppedRange = new ContinuousRange({
  start: 1,
  end: 10,
  step: 1,
  toString: v => String(Math.round(v))
});

const frequencyRange = new ContinuousRange({
  start: 20,
  end: 20000,
  scale: { type: Scale.Logarithmic, base: 10 },
  fromString: (value, unit) => {
    if (unit === 'k') {
      return value * 1000;
    }
    return value;
  },
  toString: (v: number) => {
    if (v < 10000) {
      return Math.round(v) + ' Hz';
    } else {
      return (v / 1000).toFixed(1) + ' kHz';
    }
  }
});

const snappingRange = new ContinuousRange({
  start: -50,
  end: 50,
  bipolar: true,
  snap: [0, 10, 25, 40]
});

function ExampleApp() {
  return <>
    <h1>solid-knobs examples</h1>
    <h2>Basic knob</h2>
    <Knob defaultValue={0.5} range={percentageRange} />
    <h2>Knob with stepped range</h2>
    <Knob defaultValue={7} range={steppedRange} />
    <h2>Knob with logarithmic scale</h2>
    <Knob defaultValue={1000} range={frequencyRange} />
    <h2>Knob that snaps to specified values</h2>
    <Knob defaultValue={10} range={snappingRange} />
  </>;
}

render(ExampleApp, document.getElementById('container')!);
