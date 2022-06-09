import React, { Fragment, useEffect, useCallback } from 'react';
import '../../ChartComponents/chartstyles.css'
import { startCase } from 'lodash';
import { useDispatch } from 'react-redux'
import { changeProps } from '../../../features/chart/propsSlice';

// See below explanation on why we don't dynamically use eval() and instead use property accessors to send the correct payload instead
 //Option 2: let our reducer handle what gets updated
  // pass input name/value to our single props reducer, which updates the props in state.props

const Form = ({ properties }) => {
  const dispatch = useDispatch();
  
  const handleChange = useCallback ((e) => {
      e.preventDefault();
      dispatch(changeProps({ name: e.target.name, value: e.target.value }))
    }, [dispatch]
  )

  const inputs = properties.map((p,i) => (
    <div key={i}>
      <label>
        {/* `${type-p}` */}
        {startCase(p)}
      </label>
      <textarea
        id={`set-${p}`}
        name={`${p}`}
        placeholder={`${startCase(p)}`}
        onChange={handleChange}
        > 
      </textarea>
    </div>
    )
  )

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

// Use of eval is discouraged because of XSS attacks. Using property accessors are faster and safer:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#accessing_member_properties
  // // Stuff that didn't work w/ global eval: 
  // window.$eval = eval;
  // Charts:
    // (function findChart() {
    //   dispatch(window.$eval(`${name}`))
    //   })(); 
    // dispatch(window.$eval(`${name}()`)) // ReferenceError: Can't find variable: barchart
  // Props: 
    //Option 1: dispatch different types of actions to reducer (makes our reducer boilerplate-y)
    // also it doesn't work lol
    // onChange={(e) => {
      //   e.preventDefault();
      //   dispatch(eval(`change${upperFirst(p)}(${e.target.value})`)) //TypeError: 'changeXKey is not defined' even if we import the fn
      // }}



// import { 
// changeProps,
// changeName,
// changeData,
// changeXKey,
// changeYKey,
// changeXAxisLabel,
// changeYAxisLabel,
// changeHeight,
// changeWidth,
// changeThresholds,
// changeBarPadding,
// changeRadius,
// } from '../../../features/chart/propsSlice';

// import { changeData } from '../../../../features/chart/dataSlice'
// import { changeXKey } from '../../../../features/chart/xKeySlice';
// import { changeYKey } from '../../../../features/chart/yKeySlice';
// import { changeXAxisLabel } from '../../../../features/chart/xAxisLabelSlice';
// import { changeYAxisLabel } from '../../../../features/chart/yAxisLabelSlice';
// import { changeHeight } from '../../../../features/chart/heightSlice';
// import { changeWidth } from '../../../../features/chart/widthSlice';
// import * from '../../../../features/chart'; --> how to import all chart form input-specific reducers?
// or if form is generic just import all reducers individually here lol

  // const type = useSelector((state) => state.charts.type);
  // const properties = useSelector((state) => state.charts.properties);
  // const children = useSelector((state) => state.charts.children);
