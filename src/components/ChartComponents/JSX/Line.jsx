import React from "react"
import PropTypes from "prop-types"
import * as d3 from "d3"
import { accessorPropsType } from "../../../utils/utils.js";

const Line = ({ type, data, xAccessor, yAccessor, y0Accessor, interpolation, ...props }) => {
  const lineGenerator = d3[type]()
    .x(xAccessor)
    .y(yAccessor)
    .curve(interpolation)
  
  // if (type == "area") {
  //   lineGenerator
  //     .y0(y0Accessor)
  //     .y1(yAccessor)
  // }

  return (
    <path {...props}
      className={`Line Line--type-${type}`}
      d={lineGenerator(data)}
    />
  )
}

Line.propTypes = {
  type: PropTypes.oneOf(["line", "area"]),
  data: PropTypes.array,
  xAccessor: accessorPropsType,
  yAccessor: accessorPropsType,
  y0Accessor: accessorPropsType,
  interpolation: PropTypes.func,
}

Line.defaultProps = {
  type: "line",
  y0Accessor: 0,
  interpolation: d3.curveMonotoneX,
}

export default Line