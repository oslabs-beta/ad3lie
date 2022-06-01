import React, { useState, useEffect, Fragment } from 'react';
import BarChart from "./BarChart";
import BarChartForm from "./BarChartForm"
import BarChartCodePreview from "./BarChartCodePreview"
import { parseDate, dateAccessor, temperatureAccessor, humidityAccessor, getData } from '../../ScatterPlot/App'
import * as d3 from "d3"
import { getScatterData, getTimelineData, getBarChartData2 } from '../../../../utils/parseData'
import { userEnteredData } from '../../ScatterPlot/EnteredData';
import { sampleData } from '../../../../utils/dummypenguinsdata';
import "../../../ChartComponents/styles.css"
import { generateChartCode } from '../../../../utils/CodePreview';
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
  // const [data, setData] = useState(JSON.parse(JSON.stringify(userEnteredData)));
  // sampleData in Javascript format - see dummypenguinsdata.js
  const [data, setData] = useState(sampleData)
  const [xKey, setXKey] = useState('');
  const [yKey, setYKey] = useState('');
  const [xAxisLabel, setXAxisLabel] = useState('X-axis: Species');
  const [yAxisLabel, setYAxisLabel] = useState('Y-axis: Body Mass');
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(500);

  // useEffect not currently utilized - input data is kept the same so that changes in xkey/ykey can access whole original dataset
    // ex. can't change keys after getBarChartData2 since data is already filtered
  // do we want to use this to return a filtered/grouped data set for something else ?
  // useEffect(() => {
  //   console.log('New set data is:')
  //   console.log(getBarChartData2(data, xKey, yKey))
  //   setData(prevData => getBarChartData2(data, xKey, yKey));
  // }, []);

  // console.log('You just rerendered the BarChartContainer')

  // What format is data going to be input? Currently Javascript object[], or if JSON format, we have to JSON parse/stringify input before setting state
  //inputting custom data -> data.map is not a function
  const handleData = (e) => {
    e.preventDefault();
    //Input data works for JSON format - see jsonpenguins.txt
    setData(JSON.parse(e.target.value));
  }

  // Data needs to be re-input as key changes, since grouped data is already set in state
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

  const handlers = { handleData, handleXKey, handleYKey, handleXAxisLabel, handleYAxisLabel, handleWidth, handleHeight};

  const name = 'BarChart';
  const children = ['Chart', 'Axis_noticks', 'Axis', 'Rectangle'];
  // const codeProperties=[ data, xKey, yKey, xAxisLabel, yAxisLabel, height, width ] 
  // everything placed between opening/closing tags is considered children
  

    return (
      <div className='ChartContainer'>
      <h1>This is the BarChartContainer.</h1>
      <div className="barchart-container" class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <BarChartForm data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width}
          handlers={handlers}></BarChartForm>
          <BarChart data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width}></BarChart>
          <BarChartCodePreview name={name} data={data} children={children} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width}/>
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
