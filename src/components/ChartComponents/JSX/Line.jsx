import React from "react"
// import PropTypes from "prop-types"
import * as d3 from "d3"
// import { accessorPropsType, useAccessor } from "../../../utils/utils";

const Line = ({ data, xAccessor, yAccessor, y0Accessor, width, height, /* type, interpolation, ...props */ }) => {
  const lineGenerator = d3.line()
    .x(xAccessor)
    // .y0(d=> Math.min(0, yscale(yAccessor)))
    .y(yAccessor)
    .curve(d3.curveMonotoneX)

  // svg.append("path")
  //   .datum(dataset1)
  // .attr("class", "line")
  // .attr("transform", "translate(" + 100 + "," + 100 + ")")
  // .attr("d", line)
  // .style("fill", "none")
  // .style("stroke", "#CC0000")
  // .style("stroke-width", "2");

  return (
    <path
      // className={`Line Line--type-${type}`}
      className="Line--type-line"
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