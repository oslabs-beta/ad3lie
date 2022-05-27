import React from "react";
import NavBar from "../components/NavBar";

export default function AppLayout() {
  return(
    <div id='AppLayoutContainer' className='max-w-full min-w-full max-h-full min-h-full grid grid-cols-2 grid-rows-main border-2 rounded  gap-2 p-2'>
      <NavBar />
      <div id='ChartCustomizerContainer' className="row-start-2 row-span-2 border-2 rounded">Chart Customizer Container</div>
      <div id='ChartContainer' className='col-start-2 row-start-1 row-span-2 border-2 rounded'>Chart Container</div>
      <div id='CodeContainer' className="col-start-2 row-start-3 border-2 rounded">Code Container</div>
      <div id='ImportExportContainer' className='row-start-4 col-span-2 flex place-content-between border-2 rounded'>ImportExport Container</div>
    </div>
  )
}