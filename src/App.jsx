/* eslint-disable */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, HashRouter } from 'react-router-dom';
import BarChartContainer from './components/Charts/BarChart/JSX/BarChartContainer';
import NavBar from './components/NavBar';
import ScatterPlotContainer from './components/Charts/ScatterPlot/JSX/ScatterPlotContainer';
import HistogramContainer from './components/Charts/Histogram/JSX/HistogramContainer';
import LineChartContainer from './components/Charts/LineChart/LineChartContainer';


export default () => {
  return (
    <Fragment>
    <HashRouter>
        <div>
            <Routes>
              <Route path="/" element={<NavBar />} />
              <Route path="bar-chart" element={<BarChartContainer />} />
              <Route path="line-chart" element={<LineChartContainer />} />
              <Route path='scatter-plot-chart' element={<ScatterPlotContainer />} />
              <Route path='histogram' element={<HistogramContainer />} />
            </Routes>
        </div>
    </HashRouter>
    </Fragment>
  )
}
