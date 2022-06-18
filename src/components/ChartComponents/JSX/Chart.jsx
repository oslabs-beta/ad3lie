import React, { createContext, useContext } from "react"

import "../Chart.css"

const ChartContext = createContext()
export const useChartDimensions = () => useContext(ChartContext)

const Chart = ({ dimensions, children }) => (
  <ChartContext.Provider value={dimensions}>
    <svg className="Chart rounded" width='100%' height='100%' viewBox={'0 0 ' + dimensions.width + ' ' + dimensions.height}>
      <g transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}>
        {children}
      </g>
    </svg>
  </ChartContext.Provider>
)

export default Chart
