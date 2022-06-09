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

  // console.log('data in linechart: ', data)
  const xAccessor = (data) => data[xKey];
  const yAccessor = (data) => data[yKey];
  // console.log('xAccessor in linechart: ', data[xKey])
  // console.log('yAccessor in linechart: ', data[yKey])

  // const [ref, dimensions] = useChartDimensions()
  // const [ref, dimensions] = useChartDimensions({
  //   height: height,
  //   width: width,
  // })

  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
    height: height,
    width: width,
  })

  // For data on x-scale.
  // const xScale = d3.scaleLinear()
  //   .domain(d3.extent(data, xAccessor))
  //   .range([0, dimensions.boundedWidth])
  //   .nice()

  const xScale = d3
    .scaleLinear() // returns position within domain and range
    .domain(d3.extent(data, xAccessor)) // sets domain with an array [0.2693916329035372, 0.7248443066197088]
    .range([0, dimensions.boundedWidth])
    .nice();

  // console.log('xScale: ', xScale)

  // const yScale = d3.scaleLinear()
  //   .domain(d3.extent(data, yAccessor))
  //   .range([dimensions.boundedHeight, 0])
  //   .nice()

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dimensions.boundedHeight, 0])
    .nice()


  const xAccessorScaled = d => xScale(xAccessor(d))
  const yAccessorScaled = d => yScale(yAccessor(d))
  const y0AccessorScaled = yScale(yScale.domain()[0])

  // currently showing as undefined
  // console.log('data in linechart: ', data)
  console.log("xAccessor", xAccessorScaled)
  console.log("yAccessor", yAccessorScaled)

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
          width={width}
          height={height}
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