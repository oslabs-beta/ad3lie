import React from 'react';
import * as d3 from 'd3';
import { useChartDimensions } from '../../../../utils/utils.js';
import Axis from "../../../ChartComponents/JSX/Axis.jsx"
import Circles from "../../../ChartComponents/JSX/Circles.jsx"
import Chart from "../../../ChartComponents/JSX/Chart.jsx"
import "../../../ChartComponents/chartstyles.css"

const ScatterPlot = ({ data, xKey, yKey, xAxisLabel, yAxisLabel, height, width, radius }) => {
  const xAccessor = (data) => data[xKey];
  const yAccessor = (data) => data[yKey];

  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
    height: height,
    width: width, 
  })
  
  //Scatterplot x-range data must be numeric
  const xScale = d3
    .scaleLinear() // returns position within domain and range
    .domain(d3.extent(data, xAccessor)) // sets domain with an array [0.2693916329035372, 0.7248443066197088]
    .range([0, dimensions.boundedWidth])
    .nice();

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dimensions.boundedHeight, 0])
    .nice()

  const xAccessorScaled = d => xScale(xAccessor(d)) // returns a position from result of getting humidity in object
  const yAccessorScaled = d => yScale(yAccessor(d))
  const keyAccessor = (d, i) => i

  return (
    <div className="ScatterPlot w-full top-0 left-0 h-full rounded" ref={ref}>
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
        <Circles
          data={data}
          keyAccessor={keyAccessor}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          radius={radius}
        />
      </Chart>
    </div>
  )
}

export default ScatterPlot