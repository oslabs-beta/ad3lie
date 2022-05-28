import React, { Fragment, useState } from 'react';

// Data must be input as an array of objects
export interface Data {
  [key: string]: [value: object];
}

export interface BarChartProps<T> {
  data: Data[];
  xKey: string;
  yKey: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  height: T; // or T?
  width: T; // or T?
  // onChange: (value: string | number | []) => void
}

export default function BarChartCustomizer() {
  const [data, setData] = useState<Data[]>([]);
  // const [keys, setKeys] = useState<string[]>([]); //necessary ?
  const [xKey, setXKey] = useState('');
  const [yKey, setYKey] = useState('');
  const [xAxisTitle, setXAxisTitle] = useState('X-axis');
  const [yAxisTitle, setYAxisTitle] = useState('Y-axis');
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);

  return (
    <Fragment>
      <div>Chart Customizer Form</div>
      <section className="form">
        <form onSubmit={() => {}}>
          <input
            id="set-data"
            type="array"
            value={data}
            onChange={(e) => setData(JSON.parse(e.target.value))}
          />
          {/* <input
          id="set-keys"
          type="array"
          value={keys}
          onChange={changeKeys}
          /> */}
          <input
            id="set-XKey"
            type="string"
            value={xKey}
            onChange={(e) => setXKey(e.target.value)}
          />
          <input
            id="set-YKey"
            type="string"
            value={yKey}
            onChange={(e) => setYKey(e.target.value)}
          />
          <input
            id="set-XAxisTitle"
            type="string"
            value={xAxisTitle}
            onChange={(e) => setXAxisTitle(e.target.value)}
          />
          <input
            id="set-YAxisTitle"
            type="string"
            value={yAxisTitle}
            onChange={(e) => setYAxisTitle(e.target.value)}
          />
          <input
            id="set-height"
            type="number"
            value={height}
            onChange={(e) => setHeight(+e.target.value)}
          />
          <input
            id="set-width"
            type="number"
            value={width}
            onChange={(e) => setWidth(+e.target.value)}
          />
        </form>
      </section>
    </Fragment>
  );
}

// Event Handlers here to update state dynamically, on change
// Call some fn getData() to import? or pull from whereever we import the data from
// const changeData = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setData(JSON.parse(event.target.value));
// }

// const changeXKey = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setXKey(event.target.value);
// }

// const changeYKey = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setYKey(event.target.value);
// }

// const changeXAxisTitle = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setXAxisTitle(event.target.value);
// }

// const changeYAxisTitle = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setYAxisTitle(event.target.value);
// }

// const changeWidth = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setWidth(+event.target.value);
// }

// const changeHeight = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setHeight(+event.target.value);
// }

// const changeKeys = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setKeys(event.target.value);
// }

