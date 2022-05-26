/* eslint-disable */


import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, HashRouter } from 'react-router-dom';
import BarChart from './components/Charts/BarChart/BarChart'
import ChartCustomizer from './components/ignore'
import NavBar from './components/NavBar'
import AppLayout from './layouts/AppLayout';


export default () => {
  return (
    <Fragment>
    <HashRouter>
      <Router>
        <div>
          <NavBar />
          <ChartCustomizer >
            <Routes>
              <Route path="bar-chart" element={<BarChart data={[]} xKey={''} yKey={''} height={''} width={''} />} />
            </Routes>
          </ChartCustomizer> 
        </div>
      </Router>
    </HashRouter>
    <AppLayout />
    </Fragment>
  )
}