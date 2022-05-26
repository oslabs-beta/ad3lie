import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, HashRouter } from 'react-router-dom';
import BarChart from './components/BarChart'
import ChartCustomizer from './components/ChartCustomizer'
import NavBar from './components/NavBar'
import AppLayout from './layouts/AppLayout';


export default () => {
  return (
<<<<<<< HEAD
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
    
=======
    <AppLayout />    
>>>>>>> 645e589fadf595cf584483c70238ae151f18e438
  )
}