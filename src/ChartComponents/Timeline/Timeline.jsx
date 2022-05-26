import React from "react"
import PropTypes from "prop-types"
import * as d3 from "d3"


import Chart from '../utilities/Chart'
import Line from '../utilities/Line'
import Axis from "../utilities/Axis"
import Gradient from "../utilities/Gradient";
import { useChartDimensions } from "../utilities/useChartDimensions"
import { accessorPropsType } from "../utilities/accessorPropsType"
import { useUniqueId } from "../utilities/useUniqueId"

const formatDate = d3.timeFormat("%-b %-d")
const gradientColors = ["rgb(226, 222, 243)", "#f8f9fa"]

const Timeline = ({ data, xAccessor, yAccessor, label }) => {
  const [ref, dimensions] = useChartDimensions()
  const gradientId = useUniqueId("Timeline-gradient")

  const xScale = d3.scaleTime()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth])

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dimensions.boundedHeight, 0])
    .nice()

  const xAccessorScaled = d => xScale(xAccessor(d))
  const yAccessorScaled = d => yScale(yAccessor(d))
  const y0AccessorScaled = yScale(yScale.domain()[0])

  return (
    <div className="Timeline" ref={ref}>
      <Chart dimensions={dimensions}>
        <defs>
          <Gradient
            id={gradientId}
            colors={gradientColors}
            x2="0"
            y2="100%"
          />
        </defs>
        <Axis
          dimension="x"
          scale={xScale}
          formatTick={formatDate}
        />
        <Axis
          dimension="y"
          scale={yScale}
          label={label}
        />
        <Line
          type="area"
          data={data}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          y0Accessor={y0AccessorScaled}
          style={{fill: `url(#${gradientId})`}}
        />
        <Line
          data={data}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
        />
      </Chart>
    </div>
  )
}

Timeline.propTypes = {
    xAccessor: accessorPropsType,
    yAccessor: accessorPropsType,
    label: PropTypes.string,
}

Timeline.defaultProps = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
}
export default Timeline