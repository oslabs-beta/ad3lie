import React, { createContext, useContext, ReactNode } from "react"
import { dimensionsPropsType } from "../utils"

import "./Chart.css"

const ChartContext = createContext({})
export const useChartDimensions = () => useContext(ChartContext)

export interface ChartProps<T> {
  dimensions: dimensionsPropsType | {};
  children: ReactNode;
}

export default function Chart ({ dimensions, children }: ChartProps< object | ReactNode>): JSX.Element {
return (
  <ChartContext.Provider value={dimensions}>
    <svg className="Chart" width={dimensions.width} height={dimensions.height}>
      <g transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}>
        { children }
      </g>
    </svg>
  </ChartContext.Provider>
)}

// Chart.propTypes = {
//   dimensionsPropsType
// }

// Chart.defaultProps = {
//   dimensions: {}
// }

