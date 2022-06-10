import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import '../../../ChartComponents/chartstyles.css';

const PieChartForm = ({
  data,
  innerRadius,
  outerRadius,
  label,
  value,
  handlers: {
    handleData,
    handleInner,
    handleOuter,
    handleLabel,
    handleValue
  }
}) => {
  return (
    <form class=" w-full max-w-lg" onSubmit={() => {}}>
      <div class="rounded flex flex-col flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 mb-6 md:mb-0 rounded">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2 rounded"
            for="grid-first-name"
          >
            Data: object [ ]
          </label>
          <textarea
            class="h-52 appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-md"
            id="set-data"
            type="text"
            placeholder="Data"
            onChange={handleData}
          />
        </div>

         <div class="w-full md:w-1/2 px-3 pb-6 md:mb-0 rounded">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Label: string
          </label>
          <input
            class="rounded shadow-md"
            id="set-Label"
            type="text"
            placeholder="Label"
            onChange={handleLabel}
          />
        </div>
        <div class="w-full md:w-1/2 px-3 pb-6 md:mb-0 rounded">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Value: string
          </label>
          <input
            class="rounded shadow-md"
            id="set-Value"
            type="text"
            placeholder="Value"
            onChange={handleValue}
          />
        </div>
             
        <div class="w-full md:w-1/2 px-3 pb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Outer Radius: number
          </label>
          <input
            class="rounded shadow-md"
            id="set-outer"
            type="number"
            placeholder="Outer Radius"
            onChange={handleOuter}
          />
        </div>

        <div class="w-full md:w-1/2 px-3 pb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Inner Radius: number
          </label>
          <input
            class="rounded shadow-md"
            id="set-inner"
            type="number"
            placeholder="Inner Radius"
            onChange={handleInner}
          />
        </div>
      </div>
    </form>
  );
};

export default PieChartForm;