import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, HashRouter } from 'react-router-dom';
import BarChart from './components/BarChart'
import ChartCustomizer from './components/ChartCustomizer'
import NavBar from './components/NavBar'


export default () => {
  return (
    <HashRouter>
      <Router>
        <div>
          <NavBar />
          <ChartCustomizer >
            <Routes>
              <Route path="bar-chart" element={<BarChart />} />
            </Routes>
          </ChartCustomizer> 
        </div>
      </Router>
    </HashRouter>
    
  )
}