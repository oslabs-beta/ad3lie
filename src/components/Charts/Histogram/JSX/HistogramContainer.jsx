import React, { useState, useEffect, Fragment } from 'react';
import Histogram from "./Histogram";
import HistogramForm from "./HistogramForm"
import HistogramCodePreview from "./HistogramCodePreview"
import { parseDate, dateAccessor, temperatureAccessor, humidityAccessor, getData } from '../../ScatterPlot/App'
import * as d3 from "d3"
import { getScatterData, getTimelineData, getBarChartData } from '../../../../utils/parseData'

/*
This is the generic classful parent component that hosts the chart-specific form and graph 
We update state from the form, which the graph reads and re-renders from
<HistogramContainer>
    <HistogramForm />
    <HistogramCustomizer />
    <HistogramCodePreview />
</HistogramContainer>
*/
const HistogramContainer = (props) => {
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


  const parseDate = d3.timeParse("%m/%d/%Y")
  const dateAccessor = d => parseDate(d.date)
  const temperatureAccessor = d => d.temperature
  const humidityAccessor = d => d.humidity

  console.log(data)


  //causes infinite loop lmao
  // useEffect(() => {
  //   setData(getHistogramData(xKey, yKey, data));
  // }, [data])

  useEffect(() => {
    setData(prevData => getBarChartData(data, xKey, yKey));
  }, [])

  console.log('You just rerendered the HistogramContainer')

  const handleData = (e) => {
    e.preventDefault();
    setData(JSON.parse(e.target.value));
  }

  const handleXKey = (e) => {
    e.preventDefault();
    setXKey(e.target.value);
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

  const handlers = { handleData, handleXKey, handleXAxisLabel, handleYAxisLabel, handleWidth, handleHeight, handleThresholds, handleBarPadding };

    return (
      <div className="ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main border-2 rounded  gap-2 p-2">
      <div className="col-start-1 col-span-1 row-span-2 p-2 border-2 rounded">
        <HistogramForm data={data} xKey={xKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width} thresholds={thresholds} barPadding={barPadding}
        handlers={handlers}></HistogramForm>
      </div>
      <div className="col-start-2 col-span-1 row-span-1 p-2 border-2 rounded">
        <Histogram data={data} xKey={xKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width} thresholds={thresholds} barPadding={barPadding}></Histogram>
      </div>
      <div className="col-start-2 col-span-1 row-span-1 p-2 border-2 rounded text-slate-100">
        {/* <HistogramCodePreview /> */}
      </div>
      </div>
    );
  }

  export default HistogramContainer;







// class HistogramContainer extends Component {
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
//             <div className="Histogramcontainer">
//                 <HistogramForm data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width}></HistogramForm>
//                 <Histogram data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel}></Histogram>
//             </div>
//             );
//         }
// }
