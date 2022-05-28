import React, { useState, useEffect, useRef } from "react"
import * as d3 from "d3"
import { getScatterData, getTimelineData, getNumbersData, getUONumData, getBarChartData } from './Data'
import { userAxisData } from "./EnteredData"

import Timeline from "../Timeline/Timeline" // wrong file path
import ScatterPlot from "../ScatterPlot/ScatterPlot" // I dont know which scatterplot to pull from
import Histogram from "../Histogram/Histogram" // wrong file path
import LineGraph from "../LineGraph/LineGraph" // wrong file path
import BarChart from "../BarChart/BarChart" // should be fine
//------------------------------------------------------------------
import Timeline from "../../../ChartComponents/Timeline/Timeline"
import ScatterPlot from "./ScatterPlot"
import Histogram from "../../../ChartComponents/Histogram/Histogram"

import "./styles.css"

const parseDate = d3.timeParse("%m/%d/%Y")
const dateAccessor = d => parseDate(d.date)
const temperatureAccessor = d => d.temperature
const humidityAccessor = d => d.humidity

const xUserAccessor = d => d[userAxisData["x"]];
const yUserAccessor = d => d[userAxisData["y"]];

const getData = () => ({
  timeline: getTimelineData(),
  scatter: getScatterData(),
  line: getNumbersData(),
  uonum: getUONumData(),
  barchart: getBarChartData(),
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
          data={data.uonum}
          xAccessor={xUserAccessor} // returns humidity property of an object
          yAccessor={yUserAccessor}
          xLabel="Humidity"
          yLabel="Temperature"
        />
        <Histogram
          data={data.scatter}
          xAccessor={humidityAccessor}
          label="Humidity"
        />
        <LineGraph
          data={data.line}
          xAccessor={xUserAccessor}
          yAccessor={yUserAccessor}
          label="Efficiency"
        />
        {/* <BarChart
          data={data.barchart}
          xAccessor={humidityAccessor}
          label="Humidity"
        /> */}
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