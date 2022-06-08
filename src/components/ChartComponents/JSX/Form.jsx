import React, { Fragment, useState, useEffect, useCallback } from 'react';
// import '../../../ChartComponents/chartstyles.css';
import '../../ChartComponents/chartstyles.css'
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
changeProps,
changeName,
changeData,
changeXKey,
changeYKey,
changeXAxisLabel,
changeYAxisLabel,
changeHeight,
changeWidth,
changeThresholds,
changeBarPadding,
changeRadius,
} from '../../../features/chart/propsSlice';

import {
  barchart,
  scatterplot,
  histogram,
} from '../../../features/chart/chartsSlice';


const Form = () => {
  // const id = `${snakeCase(groupName)}-${property.name}`
  // const value = get(settings, property.name)
  const type = useSelector((state) => state.charts.type);
  // const controlConfig = 'control' in property ? property.control : undefined
  // const properties = useSelector((state) => state.charts.properties);
  // const children = useSelector((state) => state.charts.children);
  const dispatch = useDispatch();

// useEffect = () => {
//   console.log('Dispatching barchart1')
  // dispatch(barchart());
//   console.log('Dispatching barchart2')
// , []}

// const name = 'barchart';
// const children = ['Chart', 'Axis', 'Rectangle'];

  // dispatch(changeName(name))


    // const handleChange = useCallback(
    //         e => {
    //             e.preventDefault();
    //             // onChange(e.target.value)
    //             dispatch(change`${upperFirst(p)}`(e.target.value))
    //         },
    //         [onChange]
        // )

    const handleChange = useCallback (
      (e) => {
        e.preventDefault();
        dispatch(changeProps({ name: e.target.name, value: e.target.value }))
      },
      [dispatch]
    )

    //Option 1: dispatch different types of actions to reducer (makes our reducer boilerplate-y)
      //also it doesn't work lol
      // const handleChange = event => ({
      //   type: `change${upperFirst(p)}`,
      //   value: event.target.value
      // })
    //Option 2: let our reducer handle what gets updated
    // pass name/value to our reducer, which updates the props in state

  
const properties = ['data', 'xKey', 'yKey', 'xAxisLabel', 'yAxisLabel', 'height', 'width'];

  const inputs = properties.map((p) => (
    <div>
      <label>
        {/* `${type-p}` */}
        {p}
      </label>
      <textarea
        id={`set-${p}`}
        name={`${p}`}
        placeholder={`${p}`}
        //Option 1:
        // onChange={(e) => {
        //   e.preventDefault();
        //   dispatch(eval(`change${upperFirst(p)}(${e.target.value})`)) //TypeError: 'changeXKey is not defined'
        // }}
        //Option2:
        onChange={handleChange}
        > 
      </textarea>
    </div>
    )
  )

  console.log(inputs)

  return (
    <form class=" w-full max-w-lg" onSubmit={() => {}}>
      <div class="rounded flex flex-col flex-wrap -mx-3 mb-6">
        {inputs}
        <h1></h1>
      </div>
    </form>

  );
};

export default Form;