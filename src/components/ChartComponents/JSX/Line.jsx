import React from "react"
import * as d3 from "d3"

const Line = ({ data, xAccessor, yAccessor, y0Accessor, width, height, /* type, interpolation, ...props */ }) => {
  const lineGenerator = d3.line()
    .x(xAccessor)
    // .y0(d=> Math.min(0, yscale(yAccessor)))
    .y(yAccessor)
    .curve(d3.curveMonotoneX)

  return (
    <path
      // className={`Line Line--type-${type}`}
      className="Line--type-line"
      d={lineGenerator(data)}
    />
  )
}


export default Line