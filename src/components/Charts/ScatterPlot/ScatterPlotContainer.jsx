import React, { useState, useEffect, useRef } from 'react';
import ScatterPlotForm from './ScatterPlotForm';
import ScatterPlot from './ScatterPlot';
import ScatterPlotCodePreview from './ScatterPlotCodePreview';

import * as d3 from "d3"
import { getScatterData, getTimelineData } from './Data'

import "./styles.css"

const parseDate = d3.timeParse("%m/%d/%Y")
const dateAccessor = d => parseDate(d.date)
const temperatureAccessor = d => d.temperature
const humidityAccessor = d => d.humidity

const getData = () => ({
  timeline: getTimelineData(),
  scatter: getScatterData(),
})

function ScatterPlotContainer(props) {
  const [data, setData] = useState(getData())

  useInterval(() => {
    setData(getData())
  }, 4000)

  return(
    <div className='ChartContainer'>
      <ScatterPlotForm className='border-2 m-2' />
      <ScatterPlot
          data={data.scatter}
          xAccessor={humidityAccessor} // returns humidity property of an object
          yAccessor={temperatureAccessor}
          xLabel="Humidity"
          yLabel="Temperature"
        />
      <ScatterPlotCodePreview className='border-2 m-2' />
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