import React from "react";
import {LineChart, LineChartForm, LineChartCodePreview} from './';

function LineChartContainer(props) {
  return(
    <div className='ChartContainer'>
      <LineChartForm />
      <LineChart />
      <LineChartCodePreview />
    </div>
  )
}

export default LineChartContainer;