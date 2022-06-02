/**
 * @pr
 * @name: Chart
 * @description: produces the complete Chart with axes
 * @param: 
 * @returns: 
 * @author: Antonio Ayala, Sophia Chiao
 */


// import modules and libraries
import React, { createContext, useContext } from "react";
import { dimensionsPropsType } from './dimensionsPropsType';
import "./Chart.css";

// setting the return of invoking createContext() to ChartContext
// createContext lets us pass a value deep into the component tree without explicitly threading it through every component.
// the return of invoking createContext() returns an object with { Provider, Consumer }
const ChartContext = createContext();

// useContext is a React Hook that accepts a context object (value returned from React.createContext) and returns
// the current context value for that context.
// In this case, it would be null
export const useChartDimensions = () => useContext(ChartContext);


const Chart = ({ dimensions, children }) => (
  // the Context.Provider is an effect of createContext() and allows the designated properties to be passed down
  // Any component can read it, no matter how deep it is.
  // In this case, we are passing to other components dimensions
  <ChartContext.Provider value={dimensions}>
    <svg className="Chart" width={dimensions.width} height={dimensions.height}>
      <g transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}>
        { children }
      </g>
    </svg>
  </ChartContext.Provider>
)

Chart.propTypes = {
  dimensions: dimensionsPropsType
}

Chart.defaultProps = {
  dimensions: {}
}

export default Chart
