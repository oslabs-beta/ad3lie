import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, HashRouter } from 'react-router-dom';
import BarChartContainer from './components/Charts/BarChart/JSX/BarChartContainer'
// import NavBar from './components/NavBar'
// import AppLayout from './layouts/AppLayout';


const App = () => {
  return (
    // <Fragment>
    // <HashRouter>
    //   <Router>
    //     <div>
    //       <NavBar />
    //       <ChartCustomizer >
    //         <Routes>
    //           <Route path="bar-chart" element={<BarChart data={[]} xKey={''} yKey={''} height={''} width={''} />} />
    //         </Routes>
    //       </ChartCustomizer> 
    //     </div>
    //   </Router>
    // </HashRouter>
    // <AppLayout />
    // </Fragment>
    <Fragment>
        <div>
            <h1>This is the App Component. I serve the BarChartContainer.</h1>
        </div>
        <BarChartContainer />
    </Fragment>
    
  )
}

export default App