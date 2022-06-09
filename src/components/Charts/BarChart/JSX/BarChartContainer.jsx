import React, { useState, useEffect, Fragment } from 'react';
import * as d3 from 'd3';
import BarChart from './BarChart';
import Form from '../../../ChartComponents/JSX/Form';
import CodeRender from '../../../ChartComponents/JSX/CodeRender';
import { userEnteredData } from '../../ScatterPlot/EnteredData';
import { sampleData } from '../../../../utils/dummypenguinsdata';
import '../../../ChartComponents/chartstyles.css';
import { ExportDataButton } from '../../../ChartComponents/JSX/ExportDataButton';
import { changeName } from '../../../../features/chart/nameSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useLocation } from "react-router";

import {
  barchart,
  scatterplot,
  histogram,
} from "../../../../features/chart/chartsSlice"



/*
This is the generic classful parent component that hosts the chart-specific form and graph 
We update state from the form, which the graph reads and re-renders from

When we chooose a chart, we should go to each chart's container.
The container specifies which props the generic components (Form, CodeRender) need to correctly generate the specific chart's components.

<BarChartContainer>
    <Form /> - does not need any props. can be accessed in store OR <ChartForm /> (generic) that we specify which props to pass in -> map out form inputs for each prop?
    <BarChart /> needs to take in props
    <CodeRender /> - generic comp. needs to take in the specific props SPECIFIED by each chart's container. otherwise, the CodePreview will print out statements for every prop, which wouldn't make sense for <BarChart radius={radius} thresholds={thresholds}...etc.
</BarChartContainer>
*/

const BarChartContainer = () => {

  // Using property accessors for our dispatch
  const charts = { "barchart": barchart, "scatterplot": scatterplot, "histogram": histogram };

  const dispatch = useDispatch();
  const { pathname } = useLocation(); // "/barchart" // useParams();
  const name = pathname.slice(1); // "barchart"
  console.log(name)

  useEffect(() => {
    console.log("dispatching chart")
    dispatch(charts[name]());
  }, [dispatch]);

  const { type, children, properties } = useSelector((state) => state.charts);



  // We select the props we need in each chart's container to specify which props to format/import for CodeRender,
  // and due to the way each chart's component imports props
      // Ex. we shouldn't pass down all of state.props to CodeRender b/c barchart doesn't use thresholds/barpadding/radius
  const chart = useSelector((state) => state.charts);
  // const name = useSelector((state) => state.charts.type);
  // const children = useSelector((state) => state.charts.children);
  const data = useSelector((state) => state.props.data);
  const xKey = useSelector((state) => state.props.xKey);
  const yKey = useSelector((state) => state.props.yKey);
  const xAxisLabel = useSelector((state) => state.props.xAxisLabel);
  const yAxisLabel = useSelector((state) => state.props.yAxisLabel);
  const height = useSelector((state) => state.props.height);
  const width = useSelector((state) => state.props.width);

  const props =  useSelector((state) => state.props); // object of all current props
  const chartProps = useSelector((state) => state.charts.properties); // array of props<string[]> unique to current chart

  console.log('All props:')
  console.log(props)

  console.log('Barchart props:')
  console.log(chartProps)

  //filtered prop object unique to each chart
  const currProps = chartProps.reduce((acc, curr) => {
    acc[curr] = props[curr];
    return acc;
  }, {});

  console.log('Barchart current props:')
  console.log(currProps)
  

  return (
<Fragment>
  {chart && currProps && 
    <div className=" ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main gap-2 p-2">
      <div className="glass col-start-1 col-span-1 row-span-2 p-2 border-2 rounded">
         <Form />
        {/* <BarChartForm /> */}
      </div>
      <div className="glass col-start-2 col-span-1 row-span-1 rounded">
        <BarChart
          // pass down currProps, destructure needed vars in BarChart component?
          // currProps={currProps} // barchart action not dispatched? 
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
        <CodeRender
          name={name}
          children={children}
          currProps={currProps}
          // data={data}
          // xKey={xKey}
          // yKey={yKey}
          // xAxisLabel={xAxisLabel}
          // yAxisLabel={yAxisLabel}
          // height={height}
          // width={width}
        />
        {/* <ExportDataButton data={data} name={name}/> */}
      </div>
      <div class=" flex justify-between col-start-1 col-span-2 row-start-3 row-span-3">
        <button class="glass w-32 text-white">Import</button>
      </div>
    </div>
    }
    </Fragment>
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