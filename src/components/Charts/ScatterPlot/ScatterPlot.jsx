import React from "react"
import PropTypes from "prop-types"
import * as d3 from "d3"

import Chart from '../../../ChartComponents/utilities/Chart'
import Circles from '../../../ChartComponents/utilities/Circles'
import Axis from "../../../ChartComponents/utilities/Axis"
import { useChartDimensions } from "../../../ChartComponents/utilities/utils"
import { accessorPropsType } from "../../../ChartComponents/utilities/utils"

const ScatterPlot = ({ data, xAccessor, yAccessor, xLabel, yLabel }) => {
  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
  })
  // const extend = d3.extent(data, xAccessor)
  // console.log('extend: ', extend)
  // console.log("dimensions", dimensions);
  // console.log("dimensions.boundedWidth", dimensions.boundedWidth);

  const xScale = d3
    .scaleLinear() // returns position within domain and range
    .domain(d3.extent(data, xAccessor)) // sets domain with an array [0.2693916329035372, 0.7248443066197088]
    .range([0, dimensions.boundedWidth])
    .nice();

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dimensions.boundedHeight, 0])
    .nice()

  // console.log('xAccessor in ScatterPlot: ', xAccessor) // returns humidity of an object
  // const checking = data.map((d, i) => {
  //   console.log('d, i: ', d, i)
  //   console.log('humidity: ', xAccessor(d))
  //   console.log('xScale: ', xScale(xAccessor(d)))
  // })


  const xAccessorScaled = d => xScale(xAccessor(d)) // returns a position from result of getting humidity in object
  const yAccessorScaled = d => yScale(yAccessor(d))
  const keyAccessor = (d, i) => i

  return (
    <div className="ScatterPlot" ref={ref}>
      <h1>FROM SCATTERPLOT.JSX</h1>
      <Chart dimensions={dimensions}>
        <Axis
          dimensions={dimensions}
          dimension="x"
          scale={xScale}
          label={xLabel}
        />
        <Axis
          dimensions={dimensions}
          dimension="y"
          scale={yScale}
          label={yLabel}
        />
        <Circles
          data={data}
          keyAccessor={keyAccessor}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          radius={5}
        />
      </Chart>
    </div>
  )
}

ScatterPlot.propTypes = {
  xAccessor: accessorPropsType,
  yAccessor: accessorPropsType,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string,
}

ScatterPlot.defaultProps = {
  xAccessor: d => d.x,
  yAccessor: d => d.y,
}
export default ScatterPlot