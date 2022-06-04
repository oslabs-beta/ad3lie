import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const LineChartForm = ({
  data,
  xKey,
  yKey,
  xAxisLabel,
  yAxisLabel,
  height,
  width,
  handlers: {
    handleData,
    handleXKey,
    handleYKey,
    handleXAxisLabel,
    handleYAxisLabel,
    handleWidth,
    handleHeight
  }
}) => {
  return (
    // <Fragment>
    //   <div>Chart Customizer Form</div>
    //   <section className="form">
    <form class="w-full max-w-lg" onSubmit={() => {}}>
      <div class="flex flex-col flex-wrap -mx-3 mb-6">
        <p>
          This line chart currently only works for date info on the x-scale.
        </p>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Data: object[]
          </label>
          <input
            class="appearance-none h-52 block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="set-data"
            type="text"
            placeholder="Data"
            onChange={handleData}
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            X Key: string
          </label>
          <input
            id="set-XKey"
            type="text"
            placeholder="X Key. Most likely date."
            onChange={handleXKey}
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Y Key: string
          </label>
          <input
            id="set-YKey"
            type="text"
            placeholder="Y Key"
            onChange={handleYKey}
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            X Axis Label: string
          </label>
          <input
            id="set-xAxisLabel"
            type="text"
            placeholder="X Axis Label"
            onChange={handleXAxisLabel}
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Y Axis Label: string
          </label>
          <input
            id="set-yAxisLabel"
            type="text"
            placeholder="Y Axis Label"
            onChange={handleYAxisLabel}
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Height: number
          </label>
          <input
            id="set-height"
            type="number"
            placeholder="Height"
            onChange={handleHeight}
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Width: number
          </label>
          <input
            id="set-width"
            type="number"
            placeholder="Width"
            onChange={handleWidth}
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
      </div>
    </form>
    //   </section>
    // </Fragment>
  );
};

export default LineChartForm;
