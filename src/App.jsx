/* eslint-disable */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, HashRouter } from 'react-router-dom';
import BarChartContainer from './components/Charts/BarChart/JSX/BarChartContainer';
import LineChartContainer from './components/Charts/LineChart/LineChartContainer';
import NavBar from './components/NavBar';
import ScatterPlotContainer from './components/Charts/ScatterPlot/ScatterPlotContainer';


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
            </Routes>
        </div>
    </HashRouter>
    </Fragment>
  )
}