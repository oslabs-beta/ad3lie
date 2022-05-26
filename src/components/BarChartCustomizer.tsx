import React from 'react';
import { ChangeEvent, useState, Fragment } from 'react';
// import { BarChartContext } from '../ChartContext'

export default function BarChartCustomizer () {
  // type ChartCustomizerProps = {
  //   onChange: (n: number) => void;
  // };

  // Data: Required object[]
// Keys: Required string[]
// xKey: Required string 
// yKey: Required string
// xAxisTitle: Optional string default: ‘X-axis’
// yAxisTitle: Optional string default: ‘Y-axis’
// Height: Required number
// Width: Required number
 
  
  const [data, setData] = useState<object[]>([]);
  const [keys, setKeys] = useState<string[]>([]);
  const [xKey, setXKey] = useState('');
  const [yKey, setYKey] = useState('');
  const [xAxisTitle, setXAxisTitle] = useState('X-axis');
  const [yAxisTitle, setYAxisTitle] = useState('Y-axis');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  

  const changeData = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setData(getData());
  }

  const changeKeys = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setKeys(event.target.value);
  }

  const changeXKey = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setXKey(event.target.value);
  }

  const changeYKey = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setYKey(event.target.value);
  }

  const changeXAxisTitle = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setXAxisTitle(event.target.value);
  }

  const changeYAxisTitle = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setYAxisTitle(event.target.value);
  }

  const changeWidth = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setWidth(+event.target.value);
  }

  const changeHeight = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setHeight(+event.target.value);
  }

  return (
    <Fragment>
    <div>Chart Customizer Form</div>
    <section className="form">
        <form onSubmit={() => {}}>
         
             <input
            id="set-data"
            type="array"
            value={data}
            onChange={changeData}
            />
            <input
            id="set-keys"
            type="array"
            value={keys}
            onChange={changeKeys}
            />
            <input
            id="set-yKey"
            type="string"
            value={yKey}
            onChange={changeYKey}
            />
            <input
            id="set-xKey"
            type="string"
            value={xKey}
            onChange={changeXKey}
          />
            <input
            id="set-yAxisTitle"
            type="string"
            value={yAxisTitle}
            onChange={changeYAxisTitle}
          />
            <input
            id="set-xAxisTitle"
            type="string"
            value={xAxisTitle}
            onChange={changeXAxisTitle}
          />
           <input
            id="set-width"
            type="number"
            value={width}
            onChange={changeWidth}
            />
            <input
            id="set-height"
            type="number"
            value={height}
            onChange={changeHeight}
            />
        </form>
      </section>
    </Fragment>
  )
}

// Data: Required object[]
// Keys: Required string[]
// xKey: Required string 
// yKey: Required string
// xAxisTitle: Optional string default: ‘X-axis’
// yAxisTitle: Optional string default: ‘Y-axis’
// Height: Required number
// Width: Required number