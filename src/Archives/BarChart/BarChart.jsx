import React from "react"
import PropTypes from "prop-types"
import * as d3 from "d3"


// import Chart from "./Chart/Chart"
import Chart from '../utilities/Chart'
import Bars from '../utilities/Bars'
import Axis from "../utilities/Axis"
import Gradient from "../../components/ChartComponents/JSX/Gradient";
import { useChartDimensions } from "../utilities/utils"
import { accessorPropsType } from "../utilities/utils"
import { useUniqueId } from "../utilities/utils"

const gradientColors = ["#9980FA", "rgb(226, 222, 243)"]

const BarChart = ({ data, xAccessor, label }) => {
  const gradientId = useUniqueId("Histogram-gradient")
  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
  })

  const numberOfThresholds = 9

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth])
    // .nice(numberOfThresholds)

  const binsGenerator = d3.histogram()
    .domain(xScale.domain())
    .value(xAccessor)
    .thresholds(xScale.ticks(numberOfThresholds))

  const bins = binsGenerator(data)

  const yAccessor = d => d.length
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
    <div className="Histogram" ref={ref}>
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
          dimensions={dimensions}
          dimension="x"
          scale={xScale}
          label={label}
        />
        <Axis
          dimensions={dimensions}
          dimension="y"
          scale={yScale}
          label="Count"
        />
        <Bars
          data={bins}
          keyAccessor={keyAccessor}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          widthAccessor={widthAccessorScaled}
          heightAccessor={heightAccessorScaled}
          style={{fill: `url(#${gradientId})`}}
        />
      </Chart>
    </div>
  )
}

BarChart.propTypes = {
  xAccessor: accessorPropsType,
  yAccessor: accessorPropsType,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string,
}

BarChart.defaultProps = {
  xAccessor: d => d.x,
  yAccessor: d => d.y,
}
export default BarChart