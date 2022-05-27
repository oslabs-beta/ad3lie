import React, { Fragment, useState } from 'react';

const BarChartForm = ({ data, xKey, yKey, xAxisLabel, yAxisLabel, height, width}) => {
  
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
            id="set-xAxisLabel"
            type="string"
            value={xAxisLabel}
            onChange={(e) => setxAxisLabel(e.target.value)}
          />
          <input
            id="set-yAxisLabel"
            type="string"
            value={yAxisLabel}
            onChange={(e) => setyAxisLabel(e.target.value)}
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


BarChartForm.propTypes = {
  data: PropTypes.array,
  xKey: PropTypes.string,
  yKey: PropTypes.string,
  xAxisLabel: PropTypes.string,
  yAxisLabel: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}

export default BarChartForm;

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

// const changexAxisLabel = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setxAxisLabel(event.target.value);
// }

// const changeyAxisLabel = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setyAxisLabel(event.target.value);
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

