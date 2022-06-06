import React, { useState, useEffect, useMemo, Fragment } from 'react';
import * as d3 from 'd3';
// import PropTypes from "prop-types"
import Chart from '../../ChartComponents/JSX/Chart'
import Line from '../../ChartComponents/JSX/Line'
import Axis from '../../ChartComponents/JSX/Axis'
import { useChartDimensions, accessorPropsType } from '../../../utils/utils.js';

// const formatDate = d3.timeFormat("%-b %-d")

const LineChart = ({ data, xKey, yKey, xAxisLabel, yAxisLabel, height, width }) => {
  // const xAccessor = useMemo(() => (data) => data[xKey]);
  // const xAccessor = useMemo(() =>(data) => data[xKey]);
  // const yAccessor = useMemo(() => (data) => data[yKey]);

  console.log('data in linechart: ', data)
  const xAccessor = (data) => data[xKey];
  const yAccessor = (data) => data[yKey];

  // const [ref, dimensions] = useChartDimensions()
  const [ref, dimensions] = useChartDimensions({
    height: height,
    width: width,
  })

  // For data on x-scale.
  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth])
    .nice()


  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dimensions.boundedHeight, 0])
    .nice()


  const xAccessorScaled = d => xScale(xAccessor(d))
  const yAccessorScaled = d => yScale(yAccessor(d))
  const y0AccessorScaled = d => yScale(yScale.domain()[0])

  // currently showing as undefined
  console.log("xAccessor", xAccessorScaled(data[0]))
  console.log("yAccessor", yAccessorScaled(data[0]))

  return (
    <div className="LineChart w-full top-0 left-0 h-full" ref={ref}>
      <Chart dimensions={dimensions}>
        <Axis
          dimensions={dimensions}
          dimension="x"
          scale={xScale}
          label={xAxisLabel}
        />
        <Axis
          dimensions={dimensions}
          dimension="y"
          scale={yScale}
          label={yAxisLabel}
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

// LineChart.propTypes = {
//     xAccessor: accessorPropsType,
//     yAccessor: accessorPropsType,
//     label: PropTypes.string,
// }

// LineChart.defaultProps = {
//     xAccessor: d => d.x,
//     yAccessor: d => d.y,
// }
export default LineChart