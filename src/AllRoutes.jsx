import React, { lazy, Suspense, Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage";

// import {BarChart} from './components/Charts/BarChart/JSX/BarChart'

export const RouteHook = () => {
  // Select all possible charts from the store
  // const charts = useSelector((state) => state.charts);
  const charts = {
    barchart: {
      type : 'barchart',
      name : 'BarChart',
      children : ['Chart, Axis, Rectangle'],
      properties : [
        'data',
        'xKey',
        'yKey',
        'xAxisLabel',
        'yAxisLabel',
        'height',
        'width'
      ]
    },
    histogram: {
      type : 'histogram',
      name : 'Histogram',
      children : ['Chart, Axis, Bars'],
      properties : [
       'data',
        'xKey',
        'xAxisLabel',
        'yAxisLabel',
        'height',
        'width',
        'thresholds',
        'barPadding'
      ]
    },

     scatterplot: {
      type : 'scatterplot',
      name : 'ScatterPlot',
      children : ['Chart, Axis, Circles'],
      properties : [
        'data',
        'xKey',
        'yKey',
        'xAxisLabel',
        'yAxisLabel',
        'height',
        'width',
        'radius'
      ]
    },

    piechart: {
      type : 'piechart',
      name : 'PieChart',
      children : ['Pie'],
      properties : [
        'data',
        'innerRadius',
        'outerRadius',
        'label',
        'pieValue'
      ]
    },

    linechart: {
      type : 'linechart',
      name : 'LineChart',
      children : ['Chart, Axis, Line'],
      properties : [
        'data',
        'xKey',
        'yKey',
        'xAxisLabel',
        'yAxisLabel',
        'height',
        'width'
      ]
    },
  }
// console.log(Object.values(charts))

const Container = lazy(() => import(`./components/ChartComponents/JSX/Container`))

const routes = Object.values(charts).reduce((acc, { type, name, children, properties } ) => {
          acc.push( <Route key={type} path={type} exact element={<Container name={name} children={children} properties={properties}/>} /> );
          return acc;
        }, [])
  
  // Not possible to pass down props on route in RRv6?
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={ <Homepage />} />
        {routes}
      </Routes>
    </Suspense>
  );
};

export default RouteHook;