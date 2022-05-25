/**
 * @name: AxisVertical
 * @description: produces a modularized template for the Vertical Axis
 * @param: (object with keys domain: number[] and range: number[]), pixelsPerTick: number
 * @returns: A rendering of the Y-Axis
 * @author: Antonio Ayala, Sophia Chiao
 */


// import modules and libraries
import React, { useMemo } from 'react';
import { scaleBand, domain, range, ticks } from 'd3';

export const AxisVertical = ({
  domain = [0,100], 
  range = [10,290]
}, pixelsPerTick = 30) => {

  // creating the tick marks for the X-Axis (Axis Bottom) utilizing the React Hook useMemo
  // useMemo returns a memoized value https://dmitripavlutin.com/react-usememo-hook/
  const ticks = useMemo(() => {

    // set the yScale using d3's scaleLinear() method
    // to create a visual scale point. This method is used to transform data values into 
    // visual variables.
    const yScale = scaleBand()
      .domain(domain)
      .range(range)

    // declaring variable height to determine the height of the graph
    const height = range[1] - range[0]

    // determine how many ticks to use/can fit in the axis based on range -> height/pixelsPerTick
    const numberOfTicksTarget = Math.max(1, Math.floor(height / pixelsPerTick))

    return yScale
      // using d3's .ticks() method to generate ticks, quantity of ticks based on input value 
      .ticks(numberOfTicksTarget)
      // creating the minor label
      .map(value => ({
        value,
        yOffset: yScale(value)
      }))
  }, [
    // whenever domain and range change, update tickmarks
    domain.join("-"),
    range.join("-")
  ])

  return (
    <svg>
      <path
        // drawing x and y axises using svg path (V draws a vertical line, H draws a horizontal line)
        d={[
          "H", range[0], 6,
          "v", -6,
          "M", range[1],
          "v", 6,
        ].join(" ")}
        // fill and stroke
        fill="none"
        stroke="currentColor"
      />

      {ticks.map(({ value, yOffset }) => (
        <g
          key={value}
          transform={`translate(${yOffset}, 0)`}
        >
          <line
            y2="6"
            stroke="currentColor"
          />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)"
            }}>
            { value }
          </text>
        </g>
      ))}
    </svg>
  )
}