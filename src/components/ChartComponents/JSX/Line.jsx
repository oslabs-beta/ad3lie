import React from "react"
// import PropTypes from "prop-types"
import * as d3 from "d3"
import { accessorPropsType, useAccessor } from "../../../utils/utils";

const Line = ({ data, xAccessor, yAccessor, /* y0Accessor, interpolation, ...props */ }) => {
  const lineGenerator = d3.line()
    .x((d) => xAccessor(d.x))
    .y((d) => yAccessor(d.y))
    .curve(d3.curveMonotoneX);

  // x = { useAccessor(xAccessor, d, i) }
  // y = { useAccessor(yAccessor, d, i) }
  // width = { d3.max([useAccessor(widthAccessor, d, i), 0]) }
  // height = { d3.max([useAccessor(heightAccessor, d, i), 0]) }

  // if (type == "area") {
  //   lineGenerator
  //     .y0(y0Accessor)
  //     .y1(yAccessor)
  // }

  return (
    <h1>Rendering from Line</h1>


    // <path /* {...props} */
    //   className={`Line Line--type-${type}`}
    //   d={lineGenerator(data)}
    // />
  )
}

// Line.propTypes = {
//   type: PropTypes.oneOf(["line", "area"]),
//   data: PropTypes.array,
//   xAccessor: accessorPropsType,
//   yAccessor: accessorPropsType,
//   y0Accessor: accessorPropsType,
//   interpolation: PropTypes.func,
// }

// Line.defaultProps = {
//   type: "line",
//   y0Accessor: 0,
//   interpolation: d3.curveMonotoneX,
// }

export default Line