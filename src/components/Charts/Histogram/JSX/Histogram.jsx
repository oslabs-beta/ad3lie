import React, { useState, useEffect, useMemo, Fragment} from 'react';
import * as d3 from 'd3';
import PropTypes from "prop-types"
import { useChartDimensions, accessorPropsType } from "../../../../utils/utils.js";
import Axis from "../../../ChartComponents/JSX/Axis"
import Bars from "../../../ChartComponents/JSX/Bars"
import Chart from "../../../ChartComponents/JSX/Chart"

const randomAroundMean = (mean, deviation) => mean + boxMullerRandom() * deviation
const boxMullerRandom = () => (
  Math.sqrt(-2.0 * Math.log(Math.random())) * 
  Math.cos(2.0 * Math.PI * Math.random())
)

export const getScatterData = (count = 100) => (
  new Array(count).fill(0).map((d, i) => ({
    temperature: randomAroundMean(70, 20),
    humidity: randomAroundMean(0.5, 0.1),
  }))
)

const Histogram = ({ data, xKey, yKey, xAxisLabel, yAxisLabel, height, width }) => {

  const xAccessor = useMemo(() => (data) => data[xKey]);
  // const yAccessor = useMemo(() => (data) => data[yKey]);
  // const xAccessor = humidityAccessor
  const yAccessor = d => d.length

  // const gradientId = useUniqueId("Histogram-gradient")
  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
  })

  // useEffect((dimensions) => {
  //   dimensions.height = height;
  //   dimensions.width = width;
  // }, [height, width])

  console.log(dimensions)

  const numberOfThresholds = 9

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth])
    .nice(numberOfThresholds)

  const binsGenerator = d3.bin()
    .domain(xScale.domain())
    .value(xAccessor)
    .thresholds(xScale.ticks(numberOfThresholds))

  const bins = binsGenerator(data)

  
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(bins, yAccessor)])
    .range([dimensions.boundedHeight, 0])
    .nice()

  const barPadding = 2

  const xAccessorScaled = d => xScale(d.x0) + barPadding
  const yAccessorScaled = d => yScale(yAccessor(d))
  const widthAccessorScaled = d => xScale(d.x1) - xScale(d.x0) - barPadding
  const heightAccessorScaled = d => dimensions.boundedHeight - yScale(yAccessor(d))
  const keyAccessor = (d, i) => i

  return (
    <Fragment>
      <h1>This is the height: {height}</h1>
      <h1>This is the width: {width}</h1>
    <div className="Histogram" ref={ref}>
      <Chart dimensions={dimensions}>
        {/* <defs>
          <Gradient
            id={gradientId}
            colors={gradientColors}
            x2="0"
            y2="100%"
          />
        </defs> */}
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
        <Bars
          data={bins}
          keyAccessor={keyAccessor}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          widthAccessor={widthAccessorScaled}
          heightAccessor={heightAccessorScaled}
          // style={{fill: `url(#${gradientId})`}}
        />
      </Chart>
    </div>
    </Fragment>
  )
}


Histogram.propTypes = {
  data: PropTypes.array,
  xKey: PropTypes.string,
  yKey: PropTypes.string,
  xAxisLabel: PropTypes.string,
  yAxisLabel: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  xAccessor: accessorPropsType,
  yAccessor: accessorPropsType,
}

 export default Histogram