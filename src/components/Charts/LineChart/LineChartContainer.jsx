import React from "react";
import LineChart from './LineChart';
import LineChartForm from "./LineChartForm";
import LineChartCodePreview from "./LineChartCodePreview";

function LineChartContainer(props) {
  return(
    <div className='ChartContainer'>
      <LineChartForm className='border-2 m-2' />
      <LineChart className='border-2 m-2' />
      <LineChartCodePreview className='border-2 m-2' />
    </div>
  )
}

export default LineChartContainer;