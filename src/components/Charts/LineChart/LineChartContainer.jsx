import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import LineChart from './LineChart';
import LineChartForm from "./LineChartForm"
import LineChartCodePreview from "./LineChartCodePreview"
// import { parseDate, dateAccessor, temperatureAccessor, humidityAccessor, getData } from '../../Charts/ScatterPlot/App'
// import * as d3 from "d3"
// import { getScatterData, getTimelineData, getNumbersData, getLineData } from '../../../utils/parseData.js'
import fakeTimelineData from '../../../utils/dummyTimelineData'
// import Line from '../../ChartComponents/JSX/Line.jsx'
// import Axis from '../../ChartComponents/JSX/Axis.jsx'
// import Chart from '../../ChartComponents/JSX/Chart.jsx'
import { ExportDataButton } from '../../ChartComponents/JSX/ExportDataButton';

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
  const [data, setData] = useState(fakeTimelineData());
  const [xKey, setXKey] = useState('x');
  const [yKey, setYKey] = useState('y');
  const [xAxisLabel, setXAxisLabel] = useState('X-axis: Days of Walking');
  const [yAxisLabel, setYAxisLabel] = useState('Y-axis: Steps');
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(500);

  const handleData = (e) => {
    e.preventDefault();
    setData(e.target.value);
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
    if (+e.target.value < 100) {
      console.log('Value must not be less than 100 px. Resetting to default.');
      setWidth(500);
      return;
    }
    setWidth(+e.target.value);
  }

  const handleHeight = (e) => {
    e.preventDefault();
    if (+e.target.value < 100) {
      console.log('Value must not be less than 100 px. Resetting to default.');
      setHeight(500);
      return;
    }
    setHeight(+e.target.value);
  }
  const handlers = { handleData, handleXKey, handleYKey, handleXAxisLabel, handleYAxisLabel, handleWidth, handleHeight };

  const name = 'LineChart';
  const children = ['Chart', 'Axis', 'Line'];

  return (
    <Fragment>
      <div className='glass w-32 text-white text-center'><Link to='/'>Home</Link></div>
      <div className="ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main gap-2 p-2">
        <div className="glass col-start-1 col-span-1 row-span-2 p-2 border-2 rounded">
          <ExportDataButton></ExportDataButton>
          <LineChartForm
            data={data}
            xKey={xKey}
            yKey={yKey}
            xAxisLabel={xAxisLabel}
            yAxisLabel={yAxisLabel}
            height={height}
            width={width}
            handlers={handlers}
          ></LineChartForm>
        </div>
        <div className="glass col-start-2 col-span-1 row-span-1 rounded">
          <LineChart
            data={data}
            xKey={xKey}
            yKey={yKey}
            xAxisLabel={xAxisLabel}
            yAxisLabel={yAxisLabel}
            height={height}
            width={width}
          ></LineChart>
        </div>
        <div className="glass col-start-2 col-span-1 row-span-1 p-2 rounded text-slate-100">
          <LineChartCodePreview />
        </div>
      </div>
    </Fragment>
  );
}

export default LineChartContainer
