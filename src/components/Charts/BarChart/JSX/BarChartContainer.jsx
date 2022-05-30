import React, { useState, useEffect, Fragment } from 'react';
import BarChart from "./BarChart";
import BarChartForm from "./BarChartForm"
import BarChartCodePreview from "./BarChartCodePreview"
import { parseDate, dateAccessor, temperatureAccessor, humidityAccessor, getData } from '../../ScatterPlot/App'
import * as d3 from "d3"
import { getScatterData, getTimelineData, getBarChartData } from '../../../../utils/parseData'

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
    scatter: getScatterData(),
  })

  const [data, setData] = useState(getData().scatter);
  const [xKey, setXKey] = useState('humidity');
  const [yKey, setYKey] = useState('length');
  const [xAxisLabel, setXAxisLabel] = useState('X-axis: Humidity');
  const [yAxisLabel, setYAxisLabel] = useState('Y-axis: Temperature');
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(500);
  const [thresholds, setThresholds] = useState(9);
  const [barPadding, setBarPadding] = useState(2);

  //causes infinite loop lmao
  // useEffect(() => {
  //   setData(getBarChartData(xKey, yKey, data));
  // }, [data])

  useEffect(() => {
    setData(prevData => getBarChartData(xKey, yKey, data));
  }, [])

  console.log('You just rerendered the BarChartContainer')

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

  const handleThresholds = (e) => {
    e.preventDefault();
    setThresholds(+e.target.value);
  }

  const handleBarPadding = (e) => {
    e.preventDefault();
    setBarPadding(+e.target.value);
  }

  const handlers = { handleData, handleXKey, handleYKey, handleXAxisLabel, handleYAxisLabel, handleWidth, handleHeight, handleThresholds, handleBarPadding };

    return (
      <div>
      <h1>This is the BarChartContainer. I serve the BarChart form, graph, and code preview.</h1>
      <div className="barchart-container" class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <BarChartForm data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width} thresholds={thresholds} barPadding={barPadding}
          handlers={handlers}></BarChartForm>
          <BarChart data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width} thresholds={thresholds} barPadding={barPadding}></BarChart>
          {/* <BarChartCodePreview /> */}
      </div>
      </div>
    );
  }

  export default BarChartContainer;







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
