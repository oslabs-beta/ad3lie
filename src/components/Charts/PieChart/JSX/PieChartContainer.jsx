import React, { useState, useEffect, Fragment } from 'react';
import PieChart from './PieChart';
import Form from '../../../ChartComponents/JSX/Form';
import CodeRender from '../../../ChartComponents/JSX/CodeRender';
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { piechart } from "../../../../features/chart/chartsSlice"
import "../../../ChartComponents/chartstyles.css"

const PieChartContainer = () => {

  const charts = { "piechart": piechart };

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const name = pathname.slice(1); 

  useEffect(() => {
    console.log("dispatching chart")
    dispatch(charts[name]());
  }, [dispatch]);
  
  const { type, children, properties } = useSelector((state) => state.charts);
  const { data, innerRadius, outerRadius, label, pieValue } = useSelector((state) => state.props);
  const props = useSelector((state) => state.props);

  const currProps = properties.reduce((acc, curr) => {
    acc[curr] = props[curr];
    return acc;
  }, {});
    console.log(currProps)

    return (
      <Fragment>
  {/* {currProps &&  */}
      <div className='glass w-32 text-white text-center'><Link to='/'>Home</Link></div>
      <div className=" ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main gap-2 p-2">
      <div className="glass col-start-1 col-span-1 row-span-2 p-2 border-2 rounded">
          <Form 
            properties={properties}/>
        </div>
        <div className="glass col-start-2 col-span-1 row-span-1 rounded">
          <PieChart
          data={data}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          label={label}
          pieValue={pieValue}
        ></PieChart>
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
      {/* } */}
    </Fragment>
    );
  };

export default PieChartContainer;