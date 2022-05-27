import React, { useState, useEffect, useRef } from "react"
import * as d3 from "d3"
import { getScatterData, getTimelineData } from './Data'

import Timeline from "../Timeline/Timeline"
import ScatterPlot from "../ScatterPlot/ScatterPlot"
import Histogram from "../Histogram/Histogram"

import "./styles.css"

export const parseDate = d3.timeParse("%m/%d/%Y")
export const dateAccessor = d => parseDate(d.date)
export const temperatureAccessor = d => d.temperature
export const humidityAccessor = d => d.humidity

// console.log('humidityAccessor from App.jsx', humidityAccessor)

export const getData = () => ({
  timeline: getTimelineData(),
  scatter: getScatterData(),
})

const App = () => {
  const [data, setData] = useState(getData())

  useInterval(() => {
    setData(getData())
  }, 4000)

  return (
    <div className="App">
      <h1>
        Weather Dashboard
      </h1>
      <div className="App__charts">
        <Timeline
          data={data.timeline}
          xAccessor={dateAccessor}
          yAccessor={temperatureAccessor}
          label="Temperature"
        />
        <ScatterPlot
          data={data.scatter}
          xAccessor={humidityAccessor} // returns humidity property of an object
          yAccessor={temperatureAccessor}
          xLabel="Humidity"
          yLabel="Temperature"
        />
        <Histogram
          data={data.scatter}
          xAccessor={humidityAccessor}
          label="Humidity"
        />
      </div>
    </div>
  )
}

export default App


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