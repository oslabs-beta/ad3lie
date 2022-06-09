/* eslint-disable */
import React, { Fragment, createElement } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  HashRouter
} from 'react-router-dom';
import BarChartContainer from './components/Charts/BarChart/JSX/BarChartContainer';
import NavBar from './components/NavBar';
import ScatterPlotContainer from './components/Charts/ScatterPlot/JSX/ScatterPlotContainer';
import HistogramContainer from './components/Charts/Histogram/JSX/HistogramContainer';
import LineChartContainer from './components/Charts/LineChart/LineChartContainer';
import Homepage from './components/pages/Homepage';
import CarouselComponent from './components/pages/TheCarousel';


export default () => {
  return (
    <Fragment>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={ <Homepage />} />
            <Route path="barchart" element={<BarChartContainer />} />
            <Route path="linechart" element={<LineChartContainer />} />
            <Route
              path="scatterplot"
              element={<ScatterPlotContainer />}
            />
            <Route path="histogram" element={<HistogramContainer />} />
          </Routes>
        </div>
      </HashRouter>
    </Fragment>
  );
};
