import React, { useState, useEffect, Fragment } from 'react';
import BarChart from './BarChart';
import BarChartForm from './BarChartForm';
import BarChartCodePreview from './BarChartCodePreview';
import {
  parseDate,
  dateAccessor,
  temperatureAccessor,
  humidityAccessor,
  getData
} from '../../ScatterPlot/App';
import * as d3 from 'd3';
import {
  getScatterData,
  getTimelineData,
  getBarChartData2
} from '../../../../utils/parseData';
import { userEnteredData } from '../../ScatterPlot/EnteredData';
import { sampleData } from '../../../../utils/dummypenguinsdata';
import '../../../ChartComponents/chartstyles.css';
import { generateChartCode } from '../../../../utils/CodePreview';
import { ExportDataButton } from '../../../ChartComponents/JSX/ExportDataButton';
import { useSelector, useDispatch } from 'react-redux'

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
  // const [data, setData] = useState(sampleData);
  // const [xKey, setXKey] = useState('');
  // const [yKey, setYKey] = useState('');
  // const [xAxisLabel, setXAxisLabel] = useState('X-axis: Species');
  // const [yAxisLabel, setYAxisLabel] = useState('Y-axis: Body Mass');
  // const [height, setHeight] = useState(500);
  // const [width, setWidth] = useState(500);
  // const [stateCodeRef, setStateCodeRef] = useState(null);

  const data = useSelector((state) => state.data.value);
  const xKey = useSelector((state) => state.xKey.value);
  const yKey = useSelector((state) => state.yKey.value);
  const xAxisLabel = useSelector((state) => state.xAxisLabel.value);
  const yAxisLabel = useSelector((state) => state.yAxisLabel.value);
  const height = useSelector((state) => state.height.value);
  const width = useSelector((state) => state.width.value);

  
  // Data must be input in JSON format
  const handleData = (e) => {
    e.preventDefault();
    //Input data works for JSON format - see jsonpenguins.txt
    setData(JSON.parse(e.target.value));
  };
  // Data needs to be re-input as key changes, since grouped data is already set in state
  const handleXKey = (e) => {
    e.preventDefault();
    setXKey(e.target.value);
  };

  const handleYKey = (e) => {
    e.preventDefault();
    setYKey(e.target.value);
  };

  const handleXAxisLabel = (e) => {
    e.preventDefault();
    setXAxisLabel(e.target.value);
  };

  const handleYAxisLabel = (e) => {
    e.preventDefault();
    setYAxisLabel(e.target.value);
  };

  const handleWidth = (e) => {
    e.preventDefault();
    if (+e.target.value < 100) {
      console.log('Value must not be less than 100 px. Resetting to default.');
      setWidth(500);
      return;
    }
    setWidth(+e.target.value);
  };

  const handleHeight = (e) => {
    e.preventDefault();
    if (+e.target.value < 100) {
      console.log('Value must not be less than 100 px. Resetting to default.');
      setHeight(500);
      return;
    }
    setHeight(+e.target.value);
  };
 

  const handlers = {
    handleData,
    handleXKey,
    handleYKey,
    handleXAxisLabel,
    handleYAxisLabel,
    handleWidth,
    handleHeight
  };

  const name = 'BarChart';
  const children = ['Chart', 'Axis', 'Rectangle'];
  // const codeProperties=[ data, xKey, yKey, xAxisLabel, yAxisLabel, height, width ]
  // everything placed between opening/closing tags is considered children


  return (
    <div className=" ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main gap-2 p-2">
      <div className="glass col-start-1 col-span-1 row-span-2 p-2 border-2 rounded">
        <BarChartForm
          data={data}
          xKey={xKey}
          yKey={yKey}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          height={height}
          width={width}
          handlers={handlers}
        ></BarChartForm>
      </div>
      <div className="glass col-start-2 col-span-1 row-span-1 rounded">
        <BarChart
          data={data}
          xKey={xKey}
          yKey={yKey}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          height={height}
          width={width}
        ></BarChart>
      </div>
      <div className="glass col-start-2 col-span-1 row-span-1 p-2 rounded text-slate-100">
        <BarChartCodePreview
          name={name}
          data={data}
          children={children}
          xKey={xKey}
          yKey={yKey}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          height={height}
          width={width}
        />
        {/* <ExportDataButton data={data} name={name}/> */}
      </div>
      <div class=" flex justify-between col-start-1 col-span-2 row-start-3 row-span-3">
        <button class="glass w-32 text-white">Import</button>
      </div>
    </div>
  );
};

export default BarChartContainer;