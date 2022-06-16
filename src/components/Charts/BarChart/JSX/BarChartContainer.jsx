import React, { useEffect, Fragment } from 'react';
import * as d3 from 'd3';
import BarChart from './BarChart';
import Form from '../../../ChartComponents/JSX/Form';
import CodeRender from '../../../ChartComponents/JSX/CodeRender';
import '../../../ChartComponents/chartstyles.css';
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
// you should import your specific chart from the chartsSlice here
import {
  barchart,
  scatterplot,
  histogram,
} from "../../../../features/chart/chartsSlice"
import "../../../ChartComponents/chartstyles.css"

/*
This is the generic classful parent component that hosts the chart-specific form and graph 
We update state from the form, which the graph reads and re-renders from

When we chooose a chart, we should go to each chart's container.
The container specifies which props the generic components (Form, CodeRender) need to correctly generate the specific chart's components.

<BarChartContainer>
    <Form /> - does not need any props. can be accessed in store OR <ChartForm /> (generic) that we specify which props to pass in -> map out form inputs for each prop?
    <BarChart /> needs to take in props
    <CodeRender /> - generic comp. needs to take in the specific props SPECIFIED by each chart's container. otherwise, the CodePreview will print out statements for every prop, which wouldn't make sense for <BarChart radius={radius} thresholds={thresholds}...etc.
      // Also, ExportDataButton deprecated, now code/data download functionality bundled together in CodeRender's single button 
</BarChartContainer>
*/

const BarChartContainer = () => {
  // Using property accessors for our dispatch
  const charts = { "barchart": barchart };

  const dispatch = useDispatch();
  const { pathname } = useLocation(); // "/barchart" // useParams();
  const name = pathname.slice(1); // "barchart"

  useEffect(() => {
    console.log("dispatching chart")
    dispatch(charts[name]());
  }, [dispatch]);

  // We select the props we need in each chart's container to specify which props to format/import for CodeRender,
  // and due to the way each chart's component imports props
      // Ex. we shouldn't pass down all of state.props to CodeRender b/c barchart doesn't use thresholds/barpadding/radius
  const { type, children, properties } = useSelector((state) => state.charts);
  const { data, xKey, yKey, xAxisLabel, yAxisLabel, height, width } = useSelector((state) => state.props);
  const props = useSelector((state) => state.props); // object of all current props

  //filtered prop object unique to each chart
  const currProps = properties.reduce((acc, curr) => {
    acc[curr] = props[curr];
    return acc;
  }, {});

  return (
<Fragment>
  {/* {currProps &&  */}
  <div className='glass w-32 text-white text-center'><Link to='/'>Home</Link></div>
    <div className="ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main gap-2 p-2">
      <div className="glass col-start-1 col-span-1 row-span-2 p-2 border-2 rounded">
         <Form 
          properties={properties}/>
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
          currProps={currProps} // currProps to pass only Barchart-specific props to be printed
        />
        {/* <ExportDataButton name={name} data={data} />*/}
      </div>
      <div class=" flex justify-between col-start-1 col-span-2 row-start-3 row-span-3">
        <button class="glass w-32 text-white">Import</button>
      </div>
    </div>
    {/* } */}
    </Fragment>
  );
};

export default BarChartContainer;
