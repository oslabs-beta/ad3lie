import React, { useState, useEffect, Fragment } from 'react';
import PieChart from './PieChart';
import PieChartForm from './PieChartForm';
import PieChartCodePreview from './PieChartCodePreview';
import { sampleData } from '../../../../utils/dummyfruitsdata';
import '../../../ChartComponents/chartstyles.css';
import { generateChartCode } from '../../../../utils/CodePreview';
import { ExportDataButton } from '../../../ChartComponents/JSX/ExportDataButton';

const PieChartContainer = (props) => {

  const [data, setData] = useState(sampleData);
  const [innerRadius, setInner] = useState(0);
  const [outerRadius, setOuter] = useState(100);
  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');

  // Data must be input in JSON format
  const handleData = (e) => {
    e.preventDefault();
    //Input data works for JSON format - see jsonpenguins.txt
    setData(JSON.parse(e.target.value));
  };
  
  const handleOuter = (e) => {
    if (+e.target.value > 100) {
      console.log('Value must not be greater than or equal to 100. Resetting to default.');
      setOuter(100);
      return;
    }
    setOuter(+e.target.value);
  };

  const handleInner = (e) => {
    if (+e.target.value > outerRadius) {
      console.log('Value must not be greater than or equal to size of piechart. Resetting to default.');
      setInner(0);
      return;
    }
    setInner(+e.target.value);
  };

    // Data needs to be re-input as key changes, since grouped data is already set in state
  const handleLabel = (e) => {
    e.preventDefault();
    setLabel(e.target.value);
  };

  const handleValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handlers = {
    handleData,
    handleInner,
    handleOuter,
    handleLabel,
    handleValue
  };

  return (
    <div className=" ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main gap-2 p-2">
      <div className="glass col-start-1 col-span-1 row-span-2 p-2 border-2 rounded">
        <PieChartForm
          data={data}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          label={label}
          value={value}
          handlers={handlers}
        ></PieChartForm>
      </div>
      <div className="glass col-start-2 col-span-1 row-span-1 rounded">
        <PieChart
          data={data}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          label={label}
          value={value}
        ></PieChart>
      </div>
      <div className="glass col-start-2 col-span-1 row-span-1 p-2 rounded text-slate-100">
      </div>
      <div class=" flex justify-between col-start-1 col-span-2 row-start-3 row-span-3">
        {/* <button class="glass w-32 text-white">Import</button> */}
      </div>
    </div>
  );
};

export default PieChartContainer;