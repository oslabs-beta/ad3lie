import React, { Fragment, useState } from 'react';
import PropTypes from "prop-types"

const BarChartForm = ({ data, xKey, yKey, xAxisLabel, yAxisLabel, height, width, handlers: { handleData, handleXKey, handleYKey, handleXAxisLabel, handleYAxisLabel, handleWidth, handleHeight } }) => {
  
  return (
    <Fragment>
      <div>Chart Customizer Form</div>
      <section className="form">
        <form onSubmit={() => {}}>
          <input
            id="set-data"
            type="array"
            value={data}
            onChange={handleData}
          />
          <input
            id="set-XKey"
            type="string"
            value={xKey}
            onChange={handleXKey}
          />
          <input
            id="set-YKey"
            type="string"
            value={yKey}
            onChange={handleYKey}
          />
          <input
            id="set-xAxisLabel"
            type="string"
            value={xAxisLabel}
            onChange={handleXAxisLabel}
          />
          <input
            id="set-yAxisLabel"
            type="string"
            value={yAxisLabel}
            onChange={handleYAxisLabel}
          />
          <input
            id="set-height"
            type="number"
            value={height}
            onChange={handleHeight}
          />
          <input
            id="set-width"
            type="number"
            value={width}
            onChange={handleWidth}
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

