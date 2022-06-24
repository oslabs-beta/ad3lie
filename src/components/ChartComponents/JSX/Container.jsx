import React, { lazy, Suspense, useEffect, useMemo, useLayoutEffect, useCallback, Fragment, useState } from 'react';
import * as d3 from 'd3';
import Form from './Form.jsx'
import CodeRender from './CodeRender.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import '../chartstyles.css'
// Remember to import your specific chart from the chartsSlice here
import {
  barchart,
  histogram,
  scatterplot,
  piechart,
  linechart,
} from "../../../features/chart/chartsSlice"
import ErrorBoundary from './ErrorBoundary.jsx';

/* webpackChunkName: "LineChart" */
const BarChart = lazy(() => import('../../Charts/BarChart/JSX/BarChart.jsx'));
const Histogram = lazy(() => import('../../Charts/Histogram/JSX/Histogram.jsx'))
const ScatterPlot = lazy(() => import('../../Charts/ScatterPlot/JSX/ScatterPlot.jsx'))
const PieChart = lazy(() => import('../../Charts/PieChart/JSX/PieChart.jsx'))
const LineChart = lazy(() => import('../../Charts/LineChart/JSX/LineChart.jsx'))

// Upon navigation to specified route, we first identify our chart using useLocation, then, we will dispatch action using specified chart
// Can we do this with useParams as well? --> grab name direclty without slicing and reassigning

/**
 * 
 * @param { type, name, children, properties } Container
 * @returns Form, MyChart, CodeRender
 * 
 * Container is the general component which contains all of our other modularized components.
 * On route selection, we use property accesors for our dispatch (chart selection), to programmatically set the chart-unique type, props, children, etc. in state
 * This selection allows us to:
 * - dynamically lazy() load in the required chart file when needed
 * - filter out chart-specific props to pass/populate the modular child components
 * 
 */


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

  //Filtering chart-specific props
  const props = useSelector((state) => state.props); // object of all current props
  const currProps = properties.reduce((acc, curr) => {
    acc[curr] = props[curr];
    return acc;
  }, {});

  // Need to implement a unique key that increases every time state changes. 
  // This is then passed to error boundary so that it rerenders when state chagnes.
  // This is necessary in order to recover from errors. Without Changing the error boundaries key won't reset. 
  const [errorKey, setErrorKey] = useState(0);
  useEffect(() => {
    setErrorKey(Date.now());
  }, [currProps.data])

  // Memoizing the import
  // We want to rerender of chart as state props changes, but import the actual component only once (unless type change during dispatch)
  const MyChart = useMemo(() => lazy(() => import(`../../Charts/${name}/JSX/${name}.jsx`)), [dispatch]);

  return (
    <Fragment>
      {/* <Suspense fallback={<h1> </h1>}> */}
      <div className='glass w-32 text-white text-center'><Link to='/'>Home</Link></div>

      <div className=" ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main gap-2 p-2">

        <div className="glass col-start-1 col-span-1 row-span-2 p-2 border-2 rounded overflow-scroll h-full">
          <Form
            key={`Form-${name}`}
            properties={properties}
            data={currProps.data}
            currProps={currProps} />
        </div>

        <div className="glass33 col-start-2 col-span-1 row-span-1 rounded">
          <ErrorBoundary key={errorKey}>
            <Suspense fallback={<h1> </h1>}>
              <MyChart
                key={`Chart-${name}`}
                {...currProps} />
            </Suspense>
          </ErrorBoundary>
        </div>

        <CodeRender
          key={`CodeRender-${name}`}
          name={name}
          children={children}
          {...currProps}
        />

        <div class=" flex justify-start col-start-1 col-span-1 row-start-3 row-span-1">
          <button class="glass glassglow w-32 text-white">Import</button>
        </div>

      </div>
      {/* </Suspense> */}
    </Fragment>
  );
};

export default Container;
