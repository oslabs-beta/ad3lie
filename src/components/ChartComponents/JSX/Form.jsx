import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import '../../../ChartComponents/chartstyles.css';
import { upperFirst } from 'lodash';
import { useSelector, useDispatch } from 'react-redux'

// import { changeData } from '../../../../features/chart/dataSlice'
// import { changeXKey } from '../../../../features/chart/xKeySlice';
// import { changeYKey } from '../../../../features/chart/yKeySlice';
// import { changeXAxisLabel } from '../../../../features/chart/xAxisLabelSlice';
// import { changeYAxisLabel } from '../../../../features/chart/yAxisLabelSlice';
// import { changeHeight } from '../../../../features/chart/heightSlice';
// import { changeWidth } from '../../../../features/chart/widthSlice';
// import * from '../../../../features/chart'; --> how to import all chart form input-specific reducers?
// or if form is generic just import all reducers individually here lol

  // const handleChange = useCallback(
  //     value => {
  //         onChange({
  //             ...state.props,
  //             state.props.p: e.target.value,
  //         })
  //     },
  //     [onChange, state.props, p]
  // );

import { 
changeData,
changeXKey,
changeYKey,
changeXAxisLabel,
changeYAxisLabel,
changeHeight,
changeWidth
} from '../../../../features/chart/propsSlice';

const Form = (props) => {
  // const id = `${snakeCase(groupName)}-${property.name}`
  // const value = get(settings, property.name)
  const type = useSelector((state) => state.charts.type);
  // const controlConfig = 'control' in property ? property.control : undefined
  const properties = useSelector((state) => state.charts.properties);
  const children = useSelector((state) => state.charts.children);

  const dispatch = useDispatch();

  const inputs = properties.map((p) => {
    return (
    <div>
      <label>
        `${p}`
      </label>
      <textarea
        id={`set-${p}`}
        placeholder={`${p}`}
        onChange={(e) => dispatch(change`${upperFirst(p)}`(e.target.value))}
        >
      </textarea>
    </div>
    )
  })

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