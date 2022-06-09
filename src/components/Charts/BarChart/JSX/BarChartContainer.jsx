import React, { useState, useEffect, Fragment } from 'react';
import * as d3 from 'd3';
import BarChart from './BarChart';
import BarChartForm from './BarChartForm';
import BarChartCodePreview from './BarChartCodePreview';
import CodeRender from '../../../ChartComponents/JSX/CodeRender';
import { userEnteredData } from '../../ScatterPlot/EnteredData';
import { sampleData } from '../../../../utils/dummypenguinsdata';
import '../../../ChartComponents/chartstyles.css';
import { ExportDataButton } from '../../../ChartComponents/JSX/ExportDataButton';
import { changeName } from '../../../../features/chart/nameSlice';
import { useSelector, useDispatch } from 'react-redux'
import Form from '../../../ChartComponents/JSX/Form';

/*
This is the generic classful parent component that hosts the chart-specific form and graph 
We update state from the form, which the graph reads and re-renders from

When we chooose a chart, we should go to each chart's container.
The container specifies which props the generic components (Form, CodeRender) need to correctly generate the specific chart's components.

<BarChartContainer>
    <BarChartForm /> - does not need any props. can be accessed in store OR <ChartForm /> (generic) that we specify which props to pass in -> map out form inputs for each prop?
    <BarChart /> needs to take in props
    <CodeRender /> - generic comp. needs to take in the specific props SPECIFIED by each chart's container. otherwise, the CodePreview will print out statements for every prop, which wouldn't make sense for <BarChart radius={radius} thresholds={thresholds}...etc.
</BarChartContainer>
*/

const BarChartContainer = () => {
  // access store here if we want to use container to pass down props.
  // or have each comp separately access state

  const data = useSelector((state) => state.props.data);
  const xKey = useSelector((state) => state.props.xKey);
  const yKey = useSelector((state) => state.props.yKey);
  const xAxisLabel = useSelector((state) => state.props.xAxisLabel);
  const yAxisLabel = useSelector((state) => state.props.yAxisLabel);
  const height = useSelector((state) => state.props.height);
  const width = useSelector((state) => state.props.width);
  const name = useSelector((state) => state.charts.type);
  const children = useSelector((state) => state.charts.children);

  return (
    <div className=" ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main gap-2 p-2">
      <div className="glass col-start-1 col-span-1 row-span-2 p-2 border-2 rounded">
         <Form />
        {/* <BarChartForm /> */}
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
        {/* <CodeRender></CodeRender> */}
        {/* <ExportDataButton data={data} name={name}/> */}
      </div>
      <div class=" flex justify-between col-start-1 col-span-2 row-start-3 row-span-3">
        <button class="glass w-32 text-white">Import</button>
      </div>
    </div>
  );
};

export default BarChartContainer;


  // const [data, setData] = useState(sampleData);
  // const [xKey, setXKey] = useState('');
  // const [yKey, setYKey] = useState('');
  // const [xAxisLabel, setXAxisLabel] = useState('X-axis: Species');
  // const [yAxisLabel, setYAxisLabel] = useState('Y-axis: Body Mass');
  // const [height, setHeight] = useState(500);
  // const [width, setWidth] = useState(500);
  // const [stateCodeRef, setStateCodeRef] = useState(null);

  // <BarChartForm
          // data={data}
          // xKey={xKey}
          // yKey={yKey}
          // xAxisLabel={xAxisLabel}
          // yAxisLabel={yAxisLabel}
          // height={height}
          // width={width}
          // handlers={handlers}
        // ></BarChartForm>