import React, { useState, useEffect, useMemo, Fragment } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import {
  useChartDimensions,
  accessorPropsType
} from '../../../../utils/utils.js';
import Axis from '../../../ChartComponents/JSX/Axis.jsx';
import Rectangle from '../../../ChartComponents/JSX/Rectangle.jsx';
import Chart from '../../../ChartComponents/JSX/Chart.jsx';
import '../../../ChartComponents/chartstyles.css';
import '../../../../styles.css';
import { sampleData } from '../../../../utils/dummypenguinsdata.js';


/**
 * Because of the way the user will import data in their customized code
 *    ex. <BarChart data={data} xKey={xKey}.../>
 * the base component template has to be able to take props supplied from MyBarChart.jsx
 */

// = ({ currProps: { data, xKey, yKey, xAxisLabel, yAxisLabel, height, width }}) => {

const BarChart 
= ({ data, xKey, yKey, xAxisLabel, yAxisLabel, height, width, currProps }, ...props) => {
  // = ({ data, currProps, currProps: { xKey, yKey, xAxisLabel, yAxisLabel, height, width }}) => {
/*
Using useMemo for **referential equality** of depedencies: important for React hooks
2 common use cases of useMemo:
  1. When you want to make a slow function wrap inside useMemo so that doesn't re-compute every single time you render your component and it only computed when you acually need the value from that function since the inputs actually change
  2. Whenever you want to make sure the reference of an object or an array is exactly the same as it was the last time you rendered if none of the internal workings changed, you're gonna want to useMemo here to make sure that you only update the reference of that object whenever the actual contents of the object change instead of updating every single time you render
*/
  // Uncomment below to work with current histogram data (working)
  // (oh also useMemo doesn't work so i will get to that later :( )
  // const xAccessor = useMemo(() => (data) => data[xKey], []);
  // const yAccessor = useMemo(() => (data) => data[yKey], []);
  const xAccessor = (data) => data[xKey];
  const yAccessor = (data) => data[yKey];

  // setState input dimensions from Form -> Container passes down updated dims -> Chart passes dims as new args in useChartDimensions
  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
    height: height,
    width: width
  });

  /** For bar charts, it's recommended to use scaleBand() + continuous.rangeRound() fn (since d3 v4) to set the range of the scale to the specified array of values, but in our case, I think either works  */
  // Should we add a form input to control the padding ? 
    // Outer padding: space before the first bar and after the last one.
    // Inner padding: space between bars
  const xScale = d3
  .scaleBand()
  .domain(data.map(xAccessor))
  .paddingInner(0.1)
  .paddingOuter(0.1)
  .rangeRound([0, dimensions.boundedWidth])
  // .padding(0.1)
  // .range([0, dimensions.boundedWidth]);

  // Add a form input for user input to change y-scale min, instead of default to 0?
  let yMax = d3.max(data, yAccessor);
  let yMin = Math.min(0, d3.min(data, yAccessor));
  const yScale = d3
    .scaleLinear()
    // .domain(d3.extent(data, yAccessor))
    .domain([yMin, yMax])
    .range([dimensions.boundedHeight, 0])
    .nice();

  const Bars = data.map((d, i) => {
    return (
      <Rectangle
        key={i}
        data={d}
        x={xScale(xAccessor(d))}
        y={yScale(yAccessor(d))}
        width={xScale.bandwidth()}
        height={dimensions.boundedHeight - yScale(yAccessor(d))}
      />
    );
  });

  return (
    <div className="BarChart w-full top-0 left-0 h-full rounded" ref={ref}>
      <Chart dimensions={dimensions}>
        <Axis
          dimensions={dimensions}
          dimension="xB"
          scale={xScale}
          label={xAxisLabel}
        />
        <Axis
          dimensions={dimensions}
          dimension="y"
          scale={yScale}
          label={yAxisLabel}
        />
        {Bars}
      </Chart>
      
     
    </div>
  );
};

export default BarChart;

// BarChart.propTypes = {
//   data: PropTypes.array,
//   xKey: PropTypes.string,
//   yKey: PropTypes.string,
//   xAxisLabel: PropTypes.string,
//   yAxisLabel: PropTypes.string,
//   height: PropTypes.number,
//   width: PropTypes.number,
//   xAccessor: accessorPropsType,
//   yAccessor: accessorPropsType,
// }

// BarChart.defaultProps = {
//   xAccessor: d => d.x,
//   yAccessor: d => d.y,
// }


  // const BarChartChildren = React.Children.map(children[0].props.children, (child) => child);
  // console.log(React.Children.count(children))

  // React.Children -> children are Chart, Axis_noticks, Axis, Fragment ?

  // const childrenProps = React.Children.map(children[0].props.children,
  //  (child) => React.cloneElement(child, {
  //     data : data,
  //     // properties: properties
  //  }));
  //  console.log(childrenProps)
  // to access you can use this.props.data or this.props.method in child component
