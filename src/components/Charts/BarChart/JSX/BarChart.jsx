import React, { useState, useEffect, useMemo, Fragment} from 'react';
import * as d3 from 'd3';
import PropTypes from "prop-types"
import { useChartDimensions, accessorPropsType } from '../../../../utils/utils.js';
import Axis_noticks from "../../../ChartComponents/JSX/Axis_noticks.jsx"
import Axis from "../../../ChartComponents/JSX/Axis.jsx"
import Rectangle from "../../../ChartComponents/JSX/Rectangle.jsx"
import Bars from "../../../ChartComponents/JSX/Bars.jsx"
import Chart from "../../../ChartComponents/JSX/Chart.jsx"
import { parseDate, dateAccessor, temperatureAccessor, humidityAccessor, getData } from '../../../../ChartComponents/ScatterPlot/App.jsx'

 const BarChart = ({ data, xKey, yKey, xAxisLabel, yAxisLabel, height, width}) => {
  //  const [xAccessor, setXAccessor] = useState(humidityAccessor)
  //  const [yAccessor, setYAccessor] = useState(temperatureAccessor)
//   on load or when data changes, reset state
//   useEffect(() => {
//     setChartData(data);
//     setXAccessor(humidityAccessor);
//     setYAccessor(temperatureAccessor);
//   }, [data]);


  // 1. Process data. Look at the data structure and declare how to access the values we'll need.
  const xAccessor = useMemo(() => (data) => data[xKey]);
  const yAccessor = useMemo(() => (data) => data[yKey]);

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

//   const xAccessorScaled = d => xScale(xAccessor(d))
//   const yAccessorScaled = d => yScale(yAccessor(d))
//   const keyAccessor = (d, i) => i

//   const barPadding = 2
//   // const xAccessorScaled = d => xScale(d.x0) + barPadding
//   // const yAccessorScaled = d => yScale(yAccessor(d))
//   //   const keyAccessor = (d, i) => i
//   const widthAccessorScaled = d => xScale(d.x1) - xScale(d.x0) - barPadding
//   const heightAccessorScaled = d => dimensions.boundedHeight - yScale(yAccessor(d))
const Bars = data.map((d, i) => { 
  return (
    <Rectangle
      key={i}
      data={d}
      x={xScale(xAccessor(d))}
      y={yScale(yAccessor(d))}
      width={xScale.bandwidth()}
      height={Math.abs(yScale(0) - yScale(yAccessor(d)))}
    />
)})
   return (
     //  <Fragment>
    //    <h1>jesus take the fucking wheel</h1>
    //    <div className="barchart graph" ref={ref}>
    //      <Chart dimensions={dimensions}>
    //        <Axis_noticks
          //   dimensions={dimensions}
          //   dimension="x"
          //   scale={xScale}
          //   label={xAxisLabel}
          // />
          // <Axis
          //   dimensions={dimensions}
          //   dimension="y"
          //   scale={yScale}
          //   label={yAxisLabel}
          // />
    //       {Bars}
    //       </Chart>
    //     </div>
    //   </Fragment>
     <div>
       <h2>This is the BarChart Chart. I should have bars and axes.</h2>
      <div className="barchart graph" ref={ref}>
        <Fragment>
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
        </Fragment>
      </div>
    </div>
  )
}

//uncomment below portion to work with current histogram data
// const xAccessor = humidityAccessor

//   // const gradientId = useUniqueId("Histogram-gradient")
//   const [ref, dimensions] = useChartDimensions({
//     marginBottom: 77,
//   })

//   const numberOfThresholds = 9

//   const xScale = d3.scaleLinear()
//     .domain(d3.extent(data, xAccessor))
//     .range([0, dimensions.boundedWidth])
//     .nice(numberOfThresholds)

//   const binsGenerator = d3.histogram()
//     .domain(xScale.domain())
//     .value(xAccessor)
//     .thresholds(xScale.ticks(numberOfThresholds))

//   const bins = binsGenerator(data)

//   const yAccessor = d => d.length
//   const yScale = d3.scaleLinear()
//     .domain([0, d3.max(bins, yAccessor)])
//     .range([dimensions.boundedHeight, 0])
//     .nice()

//   const barPadding = 2

//   const xAccessorScaled = d => xScale(d.x0) + barPadding
//   const yAccessorScaled = d => yScale(yAccessor(d))
//   const widthAccessorScaled = d => xScale(d.x1) - xScale(d.x0) - barPadding
//   const heightAccessorScaled = d => dimensions.boundedHeight - yScale(yAccessor(d))
//   const keyAccessor = (d, i) => i

//   return (
//     <Fragment>
//       <h1>This is the height: {height}</h1>
//       <h1>This is the width: {width}</h1>
//     <div className="Histogram" ref={ref}>
//       <Chart dimensions={dimensions}>
//         {/* <defs>
//           <Gradient
//             id={gradientId}
//             colors={gradientColors}
//             x2="0"
//             y2="100%"
//           />
//         </defs> */}
//         <Axis
//           dimensions={dimensions}
//           dimension="x"
//           scale={xScale}
//           label={xAxisLabel}
//         />
//         <Axis
//           dimensions={dimensions}
//           dimension="y"
//           scale={yScale}
//           label={yAxisLabel}
//         />
//         <Bars
//           data={bins}
//           keyAccessor={keyAccessor}
//           xAccessor={xAccessorScaled}
//           yAccessor={yAccessorScaled}
//           widthAccessor={widthAccessorScaled}
//           heightAccessor={heightAccessorScaled}
//           // style={{fill: `url(#${gradientId})`}}
//         />
//       </Chart>
//     </div>
//     </Fragment>
//   )
// }


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