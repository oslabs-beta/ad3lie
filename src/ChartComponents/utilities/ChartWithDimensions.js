/**
 * @pr
 * @name: ChartWithDimensions
 * @description: produces a modularized template for all Charts
 * @param: (object with keys domain: number[] and range: number[]), pixelsPerTick: number
 * @returns: A rendering of the Chart
 * @author: Antonio Ayala, Sophia Chiao
 */

// import modules and libraries
import { useRef, useState, useEffect } from 'react';
import ResizeObserver from "resize-observer-polyfill"
import { useChartDimensions } from './useChartDimensions';

 const chartSettings = {
    "marginLeft": 75
  }

  const ChartWithDimensions = () => {
    
    // creating a custom hook useChartDimensions
    const [ref, dms] = useChartDimensions(chartSettings)
  
    // 
    const xScale = useMemo(() => (
      d3.scaleLinear()
      .domain([0, 100])
      .range([0, dms.boundedWidth])
    ), [dms.boundedWidth])
  
    return (
      <div
        className="Chart__wrapper"
        ref={ref}
        style={{ height: "200px" }}>
        <svg width={dms.width} height={dms.height}>
          <g transform={`translate(${[
            dms.marginLeft,
            dms.marginTop
          ].join(",")})`}>
            <rect
              width={dms.boundedWidth}
              height={dms.boundedHeight}
              fill="lavender"
            />
            <g transform={`translate(${[
              0,
              dms.boundedHeight,
            ].join(",")})`}>
              <Axis
                domain={xScale.domain()}
                range={xScale.range()}
              />
            </g>
          </g>
        </svg>
      </div>
    )
  }
  
  