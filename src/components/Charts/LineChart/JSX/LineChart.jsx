import React, { useMemo, Fragment } from 'react';
import * as d3 from 'd3';
import { useChartDimensions } from '../../../../utils/utils.js';
import Chart from '../../../ChartComponents/JSX/Chart.jsx';
import Line from '../../../ChartComponents/JSX/Line.jsx';
import Axis from '../../../ChartComponents/JSX/Axis.jsx';
import '../../../ChartComponents/chartstyles.css';
import '../../../../styles.css';

export default function LineChart ({ data, xKey, yKey, xAxisLabel, yAxisLabel, height, width }) {
  const xAccessor = (data) => data[xKey];
  const yAccessor = (data) => data[yKey];

  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
    height: height,
    width: width,
  })

  const xScale = d3
    .scaleLinear() // returns position within domain and range
    .domain(d3.extent(data, xAccessor)) // sets domain with an array [0.2693916329035372, 0.7248443066197088]
    .range([0, dimensions.boundedWidth])
    .nice();

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dimensions.boundedHeight, 0])
    .nice()

  const xAccessorScaled = d => xScale(xAccessor(d))
  const yAccessorScaled = d => yScale(yAccessor(d))
  const y0AccessorScaled = yScale(yScale.domain()[0])

  return (
  <Fragment>
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
          y0Accessor={y0AccessorScaled}
          width={width}
          height={height}
        />
      </Chart>
    </div>
  </Fragment>
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
// export default LineChart