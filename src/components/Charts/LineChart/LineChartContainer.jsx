import React, { useState, useEffect, Fragment } from 'react';
import LineChart from './LineChart';
import LineChartForm from "./LineChartForm"
import LineChartCodePreview from "./LineChartCodePreview"
import { parseDate, dateAccessor, temperatureAccessor, humidityAccessor, getData } from '../../Charts/ScatterPlot/App'
import * as d3 from "d3"
import { getScatterData, getTimelineData, getNumbersData, getUONumData } from '../../../utils/parseData.js'
import Line from '../../ChartComponents/JSX/Line.jsx'
import Axis from '../../ChartComponents/JSX/Axis.jsx'
import Chart from '../../ChartComponents/JSX/Chart.jsx'

/*
This is the generic classful parent component that hosts the chart-specific form and graph 
We update state from the form, which the graph reads and re-renders from
<LineChartContainer>
    <LineChartForm />
    <LineChartCustomizer />
    <LineChartCodePreview />
</LineChartContainer>
*/
const LineChartContainer = (props) => {
  const getData = () => ({
    line: getNumbersData(), // see ScatterPlot/App.jsx
  })

  

  const [data, setData] = useState(getData().line);
  const [xKey, setXKey] = useState('species');
  const [yKey, setYKey] = useState('body_mass_g');
  const [xAxisLabel, setXAxisLabel] = useState('X-axis: Humidity');
  const [yAxisLabel, setYAxisLabel] = useState('Y-axis: Temperature');
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(500);

  console.log('Data is')
   console.log (data)

  useEffect(() => {
    setData(prevData => getNumbersData());
  }, [])

  console.log('You just rerendered the LineChartContainer')

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
    <div>
    <h1>This is the LineChartContainer. I serve the LineChart form, graph, and code preview.</h1>
    <div className="LineChart-container" class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        {/* <LineChartForm data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width} 
        handlers={handlers}></LineChartForm> */}
        <LineChart data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width}></LineChart>
        {/* <LineChartCodePreview /> */}
    </div>
    </div>
  );
}

export default LineChartContainer







// class LineChartContainer extends Component {
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
//             <div className="LineChartcontainer">
//                 <LineChartForm data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width}></LineChartForm>
//                 <LineChart data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel}></LineChart>
//             </div>
//             );
//         }
// }
