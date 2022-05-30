import React, { useState, useEffect, useMemo, Fragment} from 'react';
import * as d3 from 'd3';
import PropTypes from "prop-types"
import { useChartDimensions, accessorPropsType } from '../../../../utils/utils.js';
import Axis from "../../../ChartComponents/JSX/Axis.jsx"
import Axis_noticks from "../../../ChartComponents/JSX/Axis_noticks.jsx"
import Bars from "../../../ChartComponents/JSX/Bars.jsx"
import Rectangle from "../../../ChartComponents/JSX/Rectangle.jsx"
import Chart from "../../../ChartComponents/JSX/Chart.jsx"
import { parseDate, dateAccessor, temperatureAccessor, humidityAccessor, getData } from '../../ScatterPlot/App'

 const BarChart = ({ data, xKey, yKey, xAxisLabel, yAxisLabel, height, width, barPadding }) => {

// //Uncomment below for BarChart data
//   // 1. Process data. Look at the data structure and declare how to access the values we'll need.
  // const xAccessor = useMemo(() => (data) => data[xKey]);
  // const yAccessor = useMemo(() => (data) => data[yKey]);

//   // 2. Determine chart dimensions
//   const [ref, dimensions] = useChartDimensions({
//     marginBottom: 77,
//   });

//   // 3. Create scales. Create scales for every data-to-physical attribute in our chart
//   const xScale = useMemo(
//     () => d3
//         .scaleBand()
//         .paddingInner(0.1)
//         .paddingOuter(0.1)
//         .domain(data.map(xAccessor))
//         .range([0, dimensions.boundedWidth]),
//     [data, xAccessor],
//   );

//   const yScale = useMemo(
//     () => d3
//         .scaleLinear()
//         .domain(d3.extent(data, yAccessor))
//         .range([dimensions.boundedHeight, 0])
//         .nice(),
//     [data, yAccessor],
//   );

// const Bars = data.map((d, i) => { 
//   return (
//     <Rectangle
//       key={i}
//       data={d}
//       x={xScale(xAccessor(d))}
//       y={yScale(yAccessor(d))}
//       width={xScale.bandwidth()}
//       height={Math.abs(yScale(0) - yScale(yAccessor(d)))}
//     />
// )})
//    return (
//      <div>
//        <h2>This is the BarChart Chart. I should have bars and axes.</h2>
//       <div className="barchart graph" ref={ref}>
//         <Fragment>
//         <Chart dimensions={dimensions}>
//           <Axis_noticks
//             dimensions={dimensions}
//             dimension="x"
//             scale={xScale}
//             label={xAxisLabel}
//           />
//           <Axis
//             dimensions={dimensions}
//             dimension="y"
//             scale={yScale}
//             label={yAxisLabel}
//           />
//           {Bars}
//         </Chart>
//         </Fragment>
//       </div>
//     </div>
//   )
// }

/*
Using useMemo for referential equality of depedencies: important for React hooks
2 common use cases of useMemo:
  1. When you want to make a slow function wrap inside useMemo so that doesn't re-compute every single time you render your component and it only computed when you acually need the value from that function since the inputs actually change
  2. Whenever you want to make sure the reference of an object or an array is exactly the same as it was the last time you rendered if none of the internal workings changed, you're gonna want to useMemo here to make sure that you only update the reference of that object whenever the actual contents of the object change instead of updating every single time you render
*/
// Uncomment below to work with current histogram data (working)
  const xAccessor = useMemo(() => (data) => data[xKey], []);
  const yAccessor = useMemo(() => (data) => data[yKey], []);
    

// setState input dimensions from Form -> Container passes down updated dims -> Chart passes dims as new args in useChartDimensions
  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
    height: height,
    width: width, 
  })

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

    // console.log(yScale)

  // Bar padding defaulted to 2
  // const xAccessorScaled = d => xScale(d.x0) + barPadding
  // const yAccessorScaled = d => yScale(yAccessor(d))
  // const widthAccessorScaled = d => xScale(d.x1) - xScale(d.x0) - barPadding
  // const heightAccessorScaled = d => dimensions.boundedHeight - yScale(yAccessor(d))
  // const keyAccessor = (d, i) => i

const Bars = data.map((d, i) => { 
  return (
    <Rectangle
      key={i}
      data={d}
      x={xScale(xAccessor(d))}
      y={yScale(yAccessor(d))}
      width={xScale.bandwidth()}
      // height={Math.abs(yScale(0) - yScale(yAccessor(d)))}
      height={dimensions.boundedHeight - yScale(yAccessor(d))}
    />
)})

console.log(Bars[0])

  return (
    <Fragment>
      <h1>This is the height: {height}</h1>
      <h1>This is the width: {width}</h1>
    <div className="BarChart" ref={ref}>
      <Chart dimensions={dimensions}>
        <Axis_noticks
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
        {Bars}
      </Chart>
    </div>
    </Fragment>
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

// BarChart.defaultProps = {
//   xAccessor: d => d.x,
//   yAccessor: d => d.y,
// }

 export default BarChart