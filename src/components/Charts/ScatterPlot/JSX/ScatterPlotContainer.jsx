import React, { useState, useEffect, useRef, Fragment } from 'react';
import ScatterPlot from "./ScatterPlot";
import ScatterPlotForm from "./ScatterPlotForm"
import ScatterPlotCodePreview from "./ScatterPlotCodePreview"
import { parseDate, dateAccessor, temperatureAccessor, humidityAccessor, getData } from '../../ScatterPlot/App'
import * as d3 from "d3"
import { getScatterData, getTimelineData } from '../../../../utils/parseData'
import { userEnteredData } from '../../ScatterPlot/EnteredData';
import { sampleData } from '../../../../utils/dummypenguinsdata';
import "../../../ChartComponents/chartstyles.css"

// const getData = () => ({
//   timeline: getTimelineData(),
//   scatter: getScatterData(),
// })


function ScatterPlotContainer(props) {
  const [data, setData] = useState(getScatterData())
  const [xKey, setXKey] = useState('humidity');
  const [yKey, setYKey] = useState('temperature');
  const [xAxisLabel, setXAxisLabel] = useState('X-axis: Humidity');
  const [yAxisLabel, setYAxisLabel] = useState('Y-axis: Temperature');
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(500);
  const [radius, setRadius] = useState(5);

  // useInterval(() => {
  //   setData(getScatterData())
  // }, 4000)

  // Leaving useEffect in here in case we want to add any more/do anything with data-parsing algos in state
  // useEffect(() => {
  //   setData(prevData => getBarChartData2(data, xKey, yKey));
  // }, []);
  
  const handleData = (e) => {
  e.preventDefault();
  setData(JSON.parse(e.target.value));
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
    setWidth(+e.target.value);
  }

  const handleHeight = (e) => {
    e.preventDefault();
    setHeight(+e.target.value);
  }

   const handleRadius = (e) => {
    e.preventDefault();
    setRadius(+e.target.value);
  }

  const handlers = { handleData, handleXKey, handleYKey, handleXAxisLabel, handleYAxisLabel, handleWidth, handleHeight, handleRadius};


  return(
    <div className='ChartContainer'>
      <h1>This is the ScatterPlotContainer.</h1>
      <div className="scatterplot-container" class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <ScatterPlotForm data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width} radius={radius}
          handlers={handlers}></ScatterPlotForm>
          <ScatterPlot data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width} radius={radius}></ScatterPlot>
          {/* <ScatterPlotCodePreview /> */}
      </div>
      </div>
  )
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default ScatterPlotContainer;