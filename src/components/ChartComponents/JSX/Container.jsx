import React, { lazy, useEffect, useCallback, Fragment } from 'react';
import * as d3 from 'd3';
import Form from './Form'
import CodeRender from './CodeRender'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import '../chartstyles.css'
// container is passed down type ('barchart'), name ('BarChart'), children, and properties

  // Upon navigation to specified route, we first identify our chart using useLocation, then, we will dispatch action using specified chart
    // Can we do this with useParams as well? --> grab name direclty without slicing and reassigning weirdly

const Container = () => {

const dict = {
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



  const dispatch = useDispatch();
  let { pathname } = useLocation(); 
  console.log(pathname) // "/barchart"
  let type = pathname.slice(1); 
  console.log(type) // "barchart"

  const dict1 = { type : `${type}` };
  console.log(dict1)

  const MyChart = lazy(() => import(`../../Charts/${type}/JSX/${type}.jsx`));
  console.log(MyChart)

  const charts = useSelector((state) => state.charts)
  // console.log(charts)
  // useCallback(() => {
    console.log(`Dispatching ${type}`)
    console.log(dict1[type])
    dispatch(dict1[type]());
  // }, []);

  const { children, properties } = useSelector((state) => state.charts);
  const props = useSelector((state) => state.props); // object of all current props

  const currProps = properties.reduce((acc, curr) => {
    acc[curr] = props[curr];
    return acc;
  }, {});

  return (
  <Fragment>
  <div className='glass w-32 text-white text-center'><Link to='/'>Home</Link></div>
    <div className=" ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main gap-2 p-2">
      <div className="glass col-start-1 col-span-1 row-span-2 p-2 border-2 rounded">
         <Form 
          properties={properties}/>
      </div>
      <div className="glass col-start-2 col-span-1 row-span-1 rounded">
        <MyChart 
        currProps={currProps} />
      </div>
      <div className="glass col-start-2 col-span-1 row-span-1 p-2 rounded text-slate-100">
        <CodeRender
          name={name}
          children={children}
          currProps={currProps}
        />
      </div>
      <div class=" flex justify-between col-start-1 col-span-2 row-start-3 row-span-3">
        <button class="glass w-32 text-white">Import</button>
      </div>
    </div>
    </Fragment>
  );
};

export default Container;
