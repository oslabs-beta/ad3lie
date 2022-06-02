import React from 'react';
import { Link } from 'react-router-dom';

function ChartCards() {
  return (
    <div className="pt-5 ">
      <div className="px-6 py-4 grid gap-4 grid-cols-4 ">
        <div className="glass text-white max-w-sm rounded-md  shadow-lg p-2">
          <div className="flex font-bold text-xl mb-2 items-center">
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <Link to="/bar-chart" className="p-2">
              BarChart
            </Link>
          </div>
          <p className="text-grey-700 text-base">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className="glass text-white max-w-sm rounded-md  shadow-lg p-2">
          <div className="flex font-bold text-xl mb-2 items-center">
            {/* <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg> */}
						<i class="fa-solid fa-chart-line fa-xl"></i> 
            <Link to="/line-chart" className="p-2">
              Line Chart
            </Link>
          </div>
          <p className="text-grey-700 text-base">
            This is where we will display chart info for each graph
          </p>
        </div>

        <div className="glass max-w-sm rounded-md overflow-hidden shadow-lg text-white p-2">
          <div className="flex font-bold text-xl mb-2 items-center">
					<i class="fa-solid fa-chart-gantt fa-xl"></i>
					  <Link to="/scatter-plot-chart" className="p-2">
              ScatterPlot
            </Link>
          </div>
          <p className="text-grey-700 text-base">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg glass text-white p-2">
          <div className="flex font-bold text-xl mb-2 items-center">
            <Link to="histogram-chart" className="p-2">
						<i class="fa-solid fa-chart-gantt fa-xl"></i>
              Histogram
            </Link>
          </div>
          <p className="text-grey-700 text-base">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg glass">
          <div className="flex font-bold text-xl mb-2 indent-8 text-white p-2">
            {/* <svg
              className=" h-14 w-14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <i
                className="fa-solid fa-chart-pie fa-xl h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              ></i>
            </svg> */}
						<i class="fa-solid fa-chart-pie fa-xl"></i>
            Pie Chart
          </div>
          <p className="text-white text-base">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg indent-5 glass text-white p-2">
          <div className="flex font-bold text-xl mb-2 items-center">
            <a className="menu-icon" href="">
						<i class="fa-solid fa-chart-gantt fa-xl"></i>
            </a>
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
