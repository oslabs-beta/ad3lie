import React, { lazy, Suspense, useEffect, useMemo, useLayoutEffect, useCallback, Fragment } from 'react';
import * as d3 from 'd3';
import Form from './Form.jsx'
import CodeRender from './CodeRender.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import '../chartstyles.css'
// you should import your specific chart from the chartsSlice here
import {
  barchart,
  scatterplot,
  histogram,
  piechart,
  linechart,
} from "../../../features/chart/chartsSlice"

  const BarChart = lazy(() => import('../../Charts/BarChart/JSX/BarChart.jsx'));
  const Histogram = lazy(() => import('../../Charts/Histogram/JSX/Histogram.jsx'))
  const LineChart = lazy(() => import('../../Charts/LineChart/JSX/LineChart.jsx'))
  const ScatterPlot = lazy(() => import('../../Charts/ScatterPlot/JSX/ScatterPlot.jsx'))
  const PieChart = lazy(() => import('../../Charts/PieChart/JSX/PieChart.jsx'))

  // Upon navigation to specified route, we first identify our chart using useLocation, then, we will dispatch action using specified chart
    // Can we do this with useParams as well? --> grab name direclty without slicing and reassigning weirdly

const Container = ({ type, name, children, properties }) => {
// use property accessors for our dispatch
  const charts = {
    "barchart": barchart,
    "histogram": histogram,
    "scatterplot": scatterplot,
    "piechart": piechart,
    "linechart": linechart,
  } 

  //Dispatching chart sets the chart type, props, children, and default props in state
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("dispatching chart action type: ")
    dispatch(charts[type]());
  }, [dispatch]);


  const props = useSelector((state) => state.props); // object of all current props
  const currProps = properties.reduce((acc, curr) => {
    acc[curr] = props[curr];
    return acc;
  }, {});

  // Memoizing the import
  // We want to rerender of chart as state props changes, but import the actual component only once (unless type change during dispatch)
    const MyChart = useMemo(() => lazy(() => import(`../../Charts/${name}/JSX/${name}.jsx`)), [dispatch]);
  // const MyChart = useCallback(() => {
  //   console.log('hi from mychart')
  //   lazy(() => import(`../../Charts/${name}/JSX/${name}.jsx`));
  // }, [currProps]);
  // const MyChart = lazy(() => import(`../../Charts/${name}/JSX/${name}.jsx`));
return (
  <Fragment>
    {/* <Suspense fallback={<h1> </h1>}> */}
  <div className='glass w-32 text-white text-center'><Link to='/'>Home</Link></div>

    <div className=" ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main gap-2 p-2">

      <div className="glass col-start-1 col-span-1 row-span-2 p-2 border-2 rounded">
         <Form 
          key={`Form-${name}`}
          properties={properties}/>
      </div>
      
      <div className="glass col-start-2 col-span-1 row-span-1 rounded">
        <Suspense fallback={<h1> </h1>}>
        <MyChart 
        key={`Chart-${name}`}
        {...currProps} />      
        </Suspense>
      </div>

      <div className="glass col-start-2 col-span-1 row-span-1 p-2 rounded text-slate-100">
        <CodeRender
          key={`CodeRender-${name}`}
          name={name}
          children={children}
          {...currProps}
        />
      </div>

      <div class=" flex justify-between col-start-1 col-span-2 row-start-3 row-span-3">
        <button class="glass w-32 text-white">Import</button>
      </div>

    </div>
    {/* </Suspense> */}
    </Fragment>
  );
};

export default Container;
