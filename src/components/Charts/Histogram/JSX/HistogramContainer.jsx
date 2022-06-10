import React, { useEffect, Fragment } from 'react';
import * as d3 from "d3"
import Histogram from "./Histogram";
import Form from '../../../ChartComponents/JSX/Form';
import CodeRender from '../../../ChartComponents/JSX/CodeRender';
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from "react-router";
import { histogram } from "../../../../features/chart/chartsSlice"
import "../../../ChartComponents/chartstyles.css"


const HistogramContainer = () => {
  const charts = { "histogram": histogram };

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const name = pathname.slice(1); 
  // console.log(name)

  useEffect(() => {
    console.log("dispatching chart")
    dispatch(charts[name]());
  }, [dispatch]);
  
  const { type, children, properties } = useSelector((state) => state.charts);
  const { data, xKey, xAxisLabel, yAxisLabel, height, width, thresholds, barPadding } = useSelector((state) => state.props);
  const props = useSelector((state) => state.props);

  //filtered prop object unique to each chart
  const currProps = properties.reduce((acc, curr) => {
    acc[curr] = props[curr];
    return acc;
  }, {});
    console.log(currProps)

    return (
      <Fragment>
  {/* {currProps &&  */}
      <div className=" ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main gap-2 p-2">
      <div className="glass col-start-1 col-span-1 row-span-2 p-2 border-2 rounded">
          <Form 
            properties={properties}/>
        </div>
        <div className="glass col-start-2 col-span-1 row-span-1 rounded">
          <Histogram
            data={data}
            xKey={xKey}
            xAxisLabel={xAxisLabel}
            yAxisLabel={yAxisLabel}
            height={height}
            width={width}
            thresholds={thresholds}
            barPadding={barPadding}
          ></Histogram>
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
  }

  export default HistogramContainer;