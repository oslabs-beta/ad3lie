import React, { useState, useEffect, useRef, Fragment } from 'react';
import ScatterPlot from './ScatterPlot';
import ScatterPlotForm from './ScatterPlotForm';
import ScatterPlotCodePreview from './ScatterPlotCodePreview';
import {
  parseDate,
  dateAccessor,
  temperatureAccessor,
  humidityAccessor,
  getData
} from '../../ScatterPlot/App';
import * as d3 from 'd3';
import { getScatterData, getTimelineData } from '../../../../utils/parseData';
import { userEnteredData } from '../../ScatterPlot/EnteredData';
import { sampleData } from '../../../../utils/dummypenguinsdata';
import "../../../ChartComponents/chartstyles.css"
import { download } from '../../../../utils/ExportData';
import { ExportDataButton } from '../../../ChartComponents/JSX/ExportDataButton';

// const getData = () => ({
//   timeline: getTimelineData(),
//   scatter: getScatterData(),
// })

function ScatterPlotContainer(props) {
  const [data, setData] = useState(getScatterData());
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
  };

  const handleXKey = (e) => {
    e.preventDefault();
    setXKey(e.target.value);
  };

  const handleYKey = (e) => {
    e.preventDefault();
    setYKey(e.target.value);
  };

  const handleXAxisLabel = (e) => {
    e.preventDefault();
    setXAxisLabel(e.target.value);
  };

  const handleYAxisLabel = (e) => {
    e.preventDefault();
    setYAxisLabel(e.target.value);
  };

  const handleWidth = (e) => {
    e.preventDefault();
    setWidth(+e.target.value);
  };

  const handleHeight = (e) => {
    e.preventDefault();
    setHeight(+e.target.value);
  };

  const handleRadius = (e) => {
    e.preventDefault();
    setRadius(+e.target.value);
  };

  const handlers = {
    handleData,
    handleXKey,
    handleYKey,
    handleXAxisLabel,
    handleYAxisLabel,
    handleWidth,
    handleHeight,
    handleRadius
  };
  const name = 'ScatterPlot';
  const children = ['Chart', 'Axis', 'Circles'];
  return (
    <div className="ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main border-2 rounded  gap-2 p-2">
      <div className="col-start-1 col-span-1 row-span-2 p-2 border-2 rounded">
        <ExportDataButton></ExportDataButton>

        <ScatterPlotForm
          data={data}
          xKey={xKey}
          yKey={yKey}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          height={height}
          width={width}
          radius={radius}
          handlers={handlers}
        ></ScatterPlotForm>
      </div>
      <div className="col-start-2 col-span-1 row-span-1">
        <ScatterPlot
          data={data}
          xKey={xKey}
          yKey={yKey}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          height={height}
          width={width}
          radius={radius}
        ></ScatterPlot>
      </div>
      <ScatterPlotCodePreview
        name={name}
        data={data}
        children={children}
        xKey={xKey}
        yKey={yKey}
        xAxisLabel={xAxisLabel}
        yAxisLabel={yAxisLabel}
        height={height}
        width={width}
        radius={radius}
      />
    </div>
  );
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
