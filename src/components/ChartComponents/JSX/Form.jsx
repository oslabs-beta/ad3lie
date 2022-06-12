import React, { useCallback } from 'react';
import '../../ChartComponents/chartstyles.css'
import { startCase } from 'lodash';
import { useDispatch } from 'react-redux'
import { changeProps } from '../../../features/chart/propsSlice';

// See below explanation on why we don't dynamically use eval() and instead use property accessors to send the correct payload instead
 //Option 2: let our reducer handle what gets updated
  // pass input name/value to our single props reducer, which updates the props in state.props

const Form = ({ properties }) => {
console.log('hi from form')

  const dispatch = useDispatch();
  
  const handleChange = useCallback ((e) => {
      e.preventDefault();
      dispatch(changeProps({ name: e.target.name, value: e.target.value }))
    }, [dispatch]
  )

  const inputs = properties.map((p,i) => (
      <div key={i} class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {/* `${type-p}` */}
            {startCase(p)}
          </label>
          <textarea
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id={`set-${p}`}
            name={`${p}`}
            placeholder={`${startCase(p)}`}
            onChange={handleChange}
            > 
          </textarea>
        </div>

        {/* <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {startCase(p)}
          </label>
          <div class="relative">
            <select 
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={handleChange}>
                {properties.map((p) => {
                  <option name={p} key={`option-${p}`}>{p}</option>
                })}
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div> */}

        {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
      </div>
    )
  )

  return (
    <form class=" w-full max-w-lg" onSubmit={() => {}}>
      <div class="rounded flex flex-col flex-wrap mx-6">
        {inputs}
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
