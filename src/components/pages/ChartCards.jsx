import React from 'react';
import { Link } from 'react-router-dom';

function ChartCards() {
  return (
    <div className="pt-5 ">
      <div className="px-6 py-4 grid gap-4 grid-cols-4 ">
        <div className="glass text-white max-w-sm rounded-md  shadow-lg p-2">
          <div className="flex font-bold text-xl mb-2 items-center indent-10">
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <Link to="/barchart" className="p-2">
              BarChart
            </Link>
          </div>
          <p className="text-grey-700 text-base">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className="glass text-white max-w-sm rounded-md  shadow-lg p-2">
          <div className="flex font-bold text-xl mb-2 items-center indent-10">
						<i class="fa-solid fa-chart-line fa-xl"></i> 
            <Link to="/linechart" className="p-2">
              Line Chart
            </Link>
          </div>
          <p className="text-grey-700 text-base">
            This is where we will display chart info for each graph
          </p>
        </div>

        <div className="glass max-w-sm rounded-md overflow-hidden shadow-lg text-white p-2">
          <div className="flex font-bold text-xl mb-2 items-center indent-10">
					<i class="fa-solid fa-chart-gantt fa-xl"></i>
					  <Link to="/scatterplot" className="p-2">
              ScatterPlot
            </Link>
          </div>
          <p className="text-grey-700 text-base">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg glass text-white p-2 ">
          <div className="flex font-bold text-xl mb-2 items-center indent-10">
            <i class="fa-solid fa-chart-gantt fa-xl"></i>
            <Link to="histogram" className="p-2">
              Histogram
            </Link>
          </div>
          <p className="text-grey-700 text-base">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg glass">
          <div className="flex font-bold text-xl mb-2 indent-10 text-white p-2">
        
						<i class="fa-solid fa-chart-pie fa-xl"></i>
            Pie Chart
          </div>
          <p className="text-white text-base">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg indent-2 glass text-white p-2">
          <div className="flex font-bold text-xl mb-2 items-center indent-10">
						<i class="fa-solid fa-chart-gantt fa-xl"></i>
            Timeline Chart
          </div>
          <p className="text-grey-700 text-base p-2">
            This is where we will display chart info for each graph
          </p>
        </div>

        <div className=" max-w-sm rounded overflow-hidden shadow-lg glass text-white p-2">
          <div className="flex font-bold text-xl mb-2 items-center align-text-top indent-10">
					<i class="fa-solid fa-chart-gantt fa-xl"></i>
            <a className="p-2">Bubble Graph Chart</a>
          </div>
          <p className="text-grey-700 text-base">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg glass text-white p-2">
          <div className="flex font-bold text-xl mb-2 align-text-top indent-10">
					<i class="fa-solid fa-chart-line fa-xl"></i>            Graph Chart
          </div>
          <p className="text-grey-700 text-base">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className=" max-w-sm rounded overflow-hidden shadow-lg glass text-white p-2">
          <div className="flex font-bold text-xl mb-2 align-text-top indent-10">
					<i class="fa-solid fa-chart-gantt fa-xl"></i>
            Chart Mixed
          </div>
          <p className="text-grey-700 text-base">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className="px-6 py-4 flex place-content-between border-3 rounded"></div>
      </div>
    </div>
  );
}

export default ChartCards;
