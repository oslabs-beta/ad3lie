/* eslint-disable */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, HashRouter } from 'react-router-dom';
import BarChartContainer from './components/Charts/BarChart/JSX/BarChartContainer.jsx';
import NavBar from './components/NavBar';


export default () => {
  return (
    <Fragment>
    <HashRouter>
      <Router>
        <div>
            <Routes>
              <Route path="/" element={NavBar} />
              <Route path="bar-chart" element={<BarChartContainer />} />
            </Routes>
        </div>
      </Router>
    </HashRouter>
    </Fragment>
  )
}