import { splitProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

// from: https://stackoverflow.com/a/18473154
function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

// from: https://stackoverflow.com/a/18473154
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

interface ArcProps extends JSX.PathSVGAttributes<SVGPathElement> {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
}

/**
 * Returns an SVG path element that renders an arc segment.
 * The `startAngle` and `endAngle` arguments are expressed in degrees.
 */
export function Arc(allProps: ArcProps) {
  const [props, pathProps] = splitProps(allProps, ['x', 'y', 'radius', 'startAngle', 'endAngle']);
  return (
    <path
      d={describeArc(props.x, props.y, props.radius, props.startAngle, props.endAngle)}
      fill="none"
      {...pathProps} />
  );
};
