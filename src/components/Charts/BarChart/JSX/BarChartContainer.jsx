import React, { useState, useEffect, Fragment } from 'react';
import BarChart from "./BarChart";
import BarChartForm from "./BarChartForm"
import BarChartCodePreview from "./BarChartCodePreview"
import { parseDate, dateAccessor, temperatureAccessor, humidityAccessor, getData } from '../../../../ChartComponents/ScatterPlot/App.jsx'
import * as d3 from "d3"
import { getScatterData, getTimelineData } from '../../../../ChartComponents/ScatterPlot/Data'

/*
This is the generic classful parent component that hosts the chart-specific form and graph 
We update state from the form, which the graph reads and re-renders from
<BarChartContainer>
    <BarChartForm />
    <BarChartCustomizer />
    <BarChartCodePreview />
</BarChartContainer>
*/
const BarChartContainer = (props) => {
const getData = () => ({
  // timeline: getTimelineData(),
  scatter: getScatterData(),
})

  const [data, setData] = useState(getData().scatter);
  const [xKey, setXKey] = useState('humidity');
  const [yKey, setYKey] = useState('temperature');
  const [xAxisLabel, setXAxisLabel] = useState('X-axis: Humidity');
  const [yAxisLabel, setYAxisLabel] = useState('Y-axis: Temperature');
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  // const [xAccessor, setXAccessor] = useState(humidityAccessor)
  // const [yAccessor, setYAccessor] = useState(temperatureAccessor)
const parseDate = d3.timeParse("%m/%d/%Y")
const dateAccessor = d => parseDate(d.date)
const temperatureAccessor = d => d.temperature
const humidityAccessor = d => d.humidity

console.log('You just rerendered the BarChartContainer')
  // // on load or when data changes, reset state
  // useEffect(() => {
  //   setData(getData().scatter);
  //   setXKey('humidity');
  //   setYKey('temperature');
  //   setXAxisLabel('X-axis: Humidity');
  //   setYAxisLabel('Y-axis: Temperature');
  //   setHeight(100);
  //   setWidth(100);
  // }, []);
  // Event Handlers to update
    // Call some fn getData() to import? or pull from whereever we import the data from
const handleData = (e) => {
  e.preventDefault();
  setData(JSON.parse(e.target.value));
}

const handleXKey = (e) => {
  e.preventDefault();
  setXKey(e.target.value);
}

const handleYKey = (e) => {
  e.preventDefault();
  setYKey(e.target.value);
}

const handleXAxisLabel = (e) => {
  e.preventDefault();
  setXAxisLabel(e.target.value);
}

const handleYAxisLabel = (e) => {
  e.preventDefault();
  setYAxisLabel(e.target.value);
}

const handleWidth = (e) => {
  e.preventDefault();
  setWidth(+e.target.value);
}

const handleHeight = (e) => {
  e.preventDefault();
  setHeight(+e.target.value);
}

const handlers = { handleData, handleXKey, handleYKey, handleXAxisLabel, handleYAxisLabel, handleWidth, handleHeight };

  return (
    <Fragment>
    <h1>This is the BarChartContainer. I serve the BarChart form, graph, and code preview.</h1>
    <div className="barchart-container">
        <BarChartForm data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width} 
        handlers={handlers}></BarChartForm>
        <BarChart data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width}></BarChart>
        {/* <BarChartCodePreview /> */}
    </div>
    </Fragment>
  );
}

export default BarChartContainer







// class BarChartContainer extends Component {
//   constructor() {
//     super(props);
//     this.state = {
//       data: [],
//       xKey: 'xKey',
//       yKey: 'yKey',
//       xAxisLabel: 'xAxisLabel',
//       yAxisLabel: 'yAxisLabel',
//       height: '100',
//       width: '100'
//     }
// }
//     render() {
//             return (
//             <div className="barchartcontainer">
//                 <BarChartForm data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width}></BarChartForm>
//                 <BarChart data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel}></BarChart>
//             </div>
//             );
//         }
// }