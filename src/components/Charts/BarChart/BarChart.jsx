import React, { useState, useEffect, useMemo } from 'react';
import * as d3 from 'd3';
import { Data, BarChartProps } from './BarChartForm';
import { useChartDimensions } from '../../../utils/utils';
import { Axis, Bars, Chart } from './Chart';

export default function BarChart({
  data,
  xKey,
  yKey,
  xAxisLabel,
  yAxisLabel,
  height, // `${height}%`,
  width, // `${width}%`,
}: BarChartProps<string | number>): JSX.Element {
  const [chartData, setChartData] = useState<Data[]>([]);

  // on load or when data changes, reset state
  useEffect(() => {
    setChartData(data);
  }, [data]);

  // 1. Process data. Look at the data structure and declare how to access the values we'll need.
  const xAccessor: (d: any) => string = useMemo(() => (d) => d[xKey], []);

  const yAccessor: (d: any) => string = useMemo(() => (d) => d[yKey], []);

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

  const xAccessorScaled = (d: any) => xScale(xAccessor(d));
  const yAccessorScaled = (d: any) => yScale(yAccessor(d));
  const keyAccessor = (d: any, i: number) => i;

  return (
    <div className="barchart" ref={ref}>
      <Chart dimensions={dimensions}>
        <Axis
          dimensions={dimensions}
          dimension="x"
          scale={xScale}
          label={xKey}
        />
        <Axis
          dimensions={dimensions}
          dimension="y"
          scale={yScale}
          label={yKey}
        />
        {/* <Bars /> */}
      </Chart>
    </div>
  );
}
