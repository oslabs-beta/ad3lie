import React, { useState, useEffect, useRef } from "react"
import * as d3 from "d3"
import { getScatterData } from "./Data"

import ScatterPlot from "./ScatterPlot"

import "./styles.css"

const parseDate = d3.timeParse("%m/%d/%Y")
const dateAccessor = d => parseDate(d.date)
const temperatureAccessor = d => d.temperature
const humidityAccessor = d => d.humidity

const getData = () => ({
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
        FROM APP.JSX
      </h1>
      <div className="App__charts">
        <ScatterPlot
          data={data.scatter}
          xAccessor={humidityAccessor}
          yAccessor={temperatureAccessor}
          // xLabel="Humidity"
          // yLabel="Temperature"
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