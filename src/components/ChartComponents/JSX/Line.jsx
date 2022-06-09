import React from "react"
// import PropTypes from "prop-types"
import * as d3 from "d3"
import { accessorPropsType, useAccessor } from "../../../utils/utils";

const Line = ({ data, xAccessor, yAccessor, y0Accessor, width, height, /* type, interpolation, ...props */ }) => {
  // const lineGenerator = d3[type]()

  // const walkX = d3.scaleLinear()
  //   .domain([0, 49])
  //   .range([0, width])

  // const walkY = d3.scaleLinear()
  //   .domain([0, 1])
  //   .range([height, 0])

  // const line = d3.line()
  //   .x(d => walkX(d.step))
  //   .y(d => walkY(d.value))


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

  // const line = d3.line()
  //   .x(function (d) { return xScale(d[0]); })
  //   .y(function (d) { return yScale(d[1]); })
  //   .curve(d3.curveMonotoneX)

  // svg.append("path")
  //   .datum(dataset1)
  // .attr("class", "line")
  // .attr("transform", "translate(" + 100 + "," + 100 + ")")
  // .attr("d", line)
  // .style("fill", "none")
  // .style("stroke", "#CC0000")
  // .style("stroke-width", "2");

  return (
    <path /* {...props} */
      // className={`Line Line--type-${type}`}
      // className={`Line `}
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