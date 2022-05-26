import React, { useState, useEffect, useMemo } from 'react';
import * as d3 from 'd3';
import PropTypes from "prop-types"
import { useChartDimensions, accessorPropsType } from '../../../../utils/utils.js';
import { Axis, Bars, Chart } from '../../../ChartComponents/JSX';

 const BarChart = ({ data, xKey, yKey, xAxisLabel, yAxisLabel }) => {
  
  const [data, setData] = useState([]);

  // on load or when data changes, reset state
  useEffect(() => {
    setData(data);
  }, [data]);

  // 1. Process data. Look at the data structure and declare how to access the values we'll need.
  const xAccessor = (d) = useMemo(() => (d) => d[xKey], []);
  const yAccessor = (d) = useMemo(() => (d) => d[yKey], []);

  // 2. Determine chart dimensions
  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
  });

  // 3. Create scales. Create scales for every data-to-physical attribute in our chart
  const xScale = useMemo(
    () => d3
        .scaleBand()
        .paddingInner(0.1)
        .paddingOuter(0.1)
        .domain(data.map(xAccessor))
        .range([0, dimensions.boundedWidth]),
    [data, xAccessor],
  );

  const yScale = useMemo(
    () => d3
        .scaleLinear()
        .domain(d3.extent(data, yAccessor))
        .range([dimensions.boundedHeight, 0])
        .nice(),
    [data, yAccessor],
  );

  const xAccessorScaled = d => xScale(xAccessor(d))
  const yAccessorScaled = d => yScale(yAccessor(d))
  const keyAccessor = (d, i) => i

  //  const barPadding = 2

  // const xAccessorScaled = d => xScale(d.x0) + barPadding
  // const yAccessorScaled = d => yScale(yAccessor(d))
  const widthAccessorScaled = d => xScale(d.x1) - xScale(d.x0) // - barPadding
  const heightAccessorScaled = d => dimensions.boundedHeight - yScale(yAccessor(d))
  // const keyAccessor = (d, i) => i

   return (
    <div className="barchart" ref={ref}>
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
        <Bars
          data={data}
          keyAccessor={keyAccessor}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          widthAccessor={widthAccessorScaled}
          heightAccessor={heightAccessorScaled}
          // style={{fill: `url(#${gradientId})`}}
        />
      </Chart>
    </div>
  )
}


BarChart.propTypes = {
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

BarChart.defaultProps = {
  xAccessor: d => d.x,
  yAccessor: d => d.y,
}

 export default BarChart