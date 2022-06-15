/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import '../components/ChartComponents/chartstyles.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown(props) {
  let menuArray = null;
  if(props.data) {
    menuArray = Object.keys(props.data[0]).map((ele) => {
      return (
        <option key={ele} value={ele}>
          {ele}
        </option>
      );
    });
  }

  return (
    <div className="relative inline-block text-right flex-start">
      <select
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
      >
        <option>Choose</option>
        {menuArray}
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}

{
  /* <div class="w-full md:w-1/2 px-3">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
  {startCase(p)}
</label>
<div class="relative">
  <select
    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    onChange={handleChange}
  >
    {properties.map((p) => {
      <option name={p} key={`option-${p}`}>
        {p}
      </option>;
    })}
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg
      class="fill-current h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    </svg>
  </div>
</div>
</div> */
}
