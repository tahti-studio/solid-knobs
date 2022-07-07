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

/**
 * @group Component Properties
 */
export interface ArcProps extends JSX.PathSVGAttributes<SVGPathElement> {
  /**
   * The X coordinate of the arc's center.
   */
  x: number;

  /**
   * The Y coordinate of the arc's center.
   */
  y: number;

  /**
   * The radius of the arc.
   */
  radius: number;

  /**
   * The start angle of the arc in degrees.
   */
  startAngle: number;

  /**
   * The end angle of the arc in degrees.
   */
  endAngle: number;
}

/**
 * Arc is a simple utility component that returns a `<path />` element for drawing an arc segment in an SVG element.
 * 
 * @group Components
 */
export function Arc(props: ArcProps) {
  const [_, pathProps] = splitProps(props, ['x', 'y', 'radius', 'startAngle', 'endAngle']);
  return (
    <path
      d={describeArc(props.x, props.y, props.radius, props.startAngle, props.endAngle)}
      fill="none"
      {...pathProps} />
  );
};
