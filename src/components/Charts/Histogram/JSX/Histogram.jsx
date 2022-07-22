import React, { useMemo, Fragment } from 'react';
import * as d3 from 'd3';
import { useChartDimensions } from '../../../../utils/utils.js';
import Axis from '../../../ChartComponents/JSX/Axis.jsx';
import Bars from '../../../ChartComponents/JSX/Bars.jsx';
import Chart from '../../../ChartComponents/JSX/Chart.jsx';
import '../../../ChartComponents/chartstyles.css';
import '../../../ChartComponents/Chart.css';
import { useUniqueId } from '../../../../utils/utils.js';
import Gradient from "../../../ChartComponents/JSX/Gradient"

const Histogram = ({ data, xKey, xAxisLabel, yAxisLabel, height, width, thresholds, barPadding }) => {
  // Since histograms compare occurences across a population/data, the y-Accessor must be the length of your dataset
  // const yAccessor = d => d.length
  const xAccessor = useMemo(() => (data) => data[xKey]);
  const yAccessor = useMemo(() => (data) => data.length);

  const gradientId = useUniqueId("Histogram-gradient")
  const gradientColors = ["#9980FA", "rgb(226, 222, 243)"]

  // setState input dimensions from Form -> Container passes down updated dims -> Chart passes dims as new args in useChartDimensions
  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
    height: height,
    width: width
  });

  // Thresholds = # scaled bins (user inputs # of bins as thresholds, we scale bins according to their data for them )
  const numberOfThresholds = thresholds;

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth])
    .nice(numberOfThresholds);

  const binsGenerator = d3
    .histogram()
    .domain(xScale.domain())
    .value(xAccessor)
    .thresholds(xScale.ticks(numberOfThresholds));

  const bins = binsGenerator(data);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(bins, yAccessor)])
    .range([dimensions.boundedHeight, 0])
    .nice();

  const xAccessorScaled = (d) => xScale(d.x0) + barPadding;
  const yAccessorScaled = (d) => yScale(yAccessor(d));
  const widthAccessorScaled = (d) => xScale(d.x1) - xScale(d.x0) - barPadding;
  const heightAccessorScaled = (d) =>
    dimensions.boundedHeight - yScale(yAccessor(d));
  const keyAccessor = (d, i) => i;

  return (
    <Fragment>
      <div className="Histogram w-full top-0 left-0 h-full" ref={ref}>
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
            style={{fill: `url(#${gradientId})`}}
          />
        </Chart>
      </div>
    </Fragment>
  );
};

export default Histogram;
