import React from "react"
import PropTypes from "prop-types"
import * as d3 from "d3"


import Chart from '../../../ChartComponents/utilities/Chart'
import Line from '../../../ChartComponents/utilities/Line'
import Axis from "../../../ChartComponents/utilities/Axis"

import { useChartDimensions } from "../../../ChartComponents/utilities/utils"
import { accessorPropsType } from "../../../ChartComponents/utilities/utils"

const formatDate = d3.timeFormat("%-b %-d")


const LineGraph = ({ data, xAccessor, yAccessor, label }) => {
  const [ref, dimensions] = useChartDimensions()

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
    <div className="LineGraph" ref={ref}>
      <Chart dimensions={dimensions}>
        <Axis
          dimension="x"
          scale={xScale}
        />
        <Axis
          dimension="y"
          scale={yScale}
          label={label}
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

LineGraph.propTypes = {
    xAccessor: accessorPropsType,
    yAccessor: accessorPropsType,
    label: PropTypes.string,
}

LineGraph.defaultProps = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
}
export default LineGraph