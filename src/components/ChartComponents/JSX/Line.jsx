import React from "react"
// import PropTypes from "prop-types"
import * as d3 from "d3"
import { accessorPropsType, useAccessor } from "../../../utils/utils";

const Line = ({ data, xAccessor, yAccessor, y0Accessor, /* type, interpolation, ...props */ }) => {
  // const lineGenerator = d3[type]()
  const lineGenerator = d3.line()
    .x(xAccessor)
    .y(yAccessor)
    .curve(d3.curveMonotoneX)

  // console.log(lineGenerator)
  // console.log(data)
  // console.log(xAccessor)
  // console.log(yAccessor)

  // if (type == "area") {
  //   lineGenerator
  //     .y0(y0Accessor)
  //     .y1(yAccessor)
  // }

  return (
    <path /* {...props} */
      // className={`Line Line--type-${type}`}
      d={lineGenerator(data)}
    />
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