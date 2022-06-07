import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import '../../../ChartComponents/chartstyles.css';

import { useDispatch } from 'react-redux'
import { changeData } from '../../../../features/chart/dataSlice'
import { changeXKey } from '../../../../features/chart/xKeySlice';
import { changeYKey } from '../../../../features/chart/yKeySlice';
import { changeXAxisLabel } from '../../../../features/chart/xAxisLabelSlice';
import { changeYAxisLabel } from '../../../../features/chart/yAxisLabelSlice';
import { changeHeight } from '../../../../features/chart/heightSlice';
import { changeWidth } from '../../../../features/chart/widthSlice';
// import * from '../../../../features/chart'; --> how to import all chart form input-specific reducers?
// or if form is generic just import all reducers individually here lol

const dispatch = useDispatch()
const handleChange = useCallback(
            value => {
                onChange({
                    ...settings,
                    [property.name]: value,
                })
            },
            [onChange, settings, property.name]
        )

const Form = (props) => {

/* const inputs = props.map((p) => {
    for each prop, create input field **with** matching reducer onChange
    ex. data -> <DataControl/> -> populates a generic form input div:
      <div className="form-input-div">
      <label>
        `${p.label}` - ('Data: object [ ]')
      </label>
      <textarea
        id=`set-${p.name}` - (set-data)
        placeholder=`${p.name}` - (data)
        onChange={(e) => dispatch(change`${p.name}`(e.target.value))} /> - (changeData reducer)
  */

  return (
    <form class=" w-full max-w-lg" onSubmit={() => {}}>
      <div class="rounded flex flex-col flex-wrap -mx-3 mb-6">
        {inputs}
      </div>
    </form>

  );
};

export default Form;