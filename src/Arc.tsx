import { splitProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number): string {
  if (startAngle > endAngle) {
    let tmp = startAngle;
    startAngle = endAngle;
    endAngle = tmp;
  }
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
      "M", start.x, start.y, 
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");

  return d;
}

interface Props extends JSX.PathSVGAttributes<SVGPathElement> {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
}

/**
 * Produces an SVG path element that renders an arc segment.
 */
export default function Arc(allProps: Props) {
  const [props, pathProps] = splitProps(allProps, ['x', 'y', 'radius', 'startAngle', 'endAngle']);
  return (
    <path
      d={describeArc(props.x, props.y, props.radius, props.startAngle, props.endAngle)}
      fill="none"
      {...pathProps} />
  );
};
