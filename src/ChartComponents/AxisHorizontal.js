/**
 * @name: AxisHorizontal
 * @description: produces a modularized template for the Horizontal Axis
 * @param: (object with keys domain: number[] and range: number[]), pixelsPerTick: number
 * @returns: A rendering of the X-Axis
 * @author: Antonio Ayala, Sophia Chiao
 */


// import modules and libraries
import React, { useMemo } from 'react';
import { scaleLinear, domain, range, ticks } from 'd3';

export const AxisHorizontal = ({
  domain = [0, 100],
  range = [10, 290],
  pixelsPerTick = 30,
  }) => {
  // creating the tick marks for the X-Axis (Axis Bottom) utilizing the React Hook useMemo
  // useMemo returns a memoized value https://dmitripavlutin.com/react-usememo-hook/
  const ticks = useMemo(() => {
    // set the xScale using d3's scaleLinear() method
    // to create a visual scale point. This method is used to transform data values into
    // visual variables.
    // .domain is generating every intermediate tick mark
    // .range is setting the range at which these tick marks will reside
    const xScale = scaleLinear()
      .domain(domain)
      .range(range);

    // declaring variable width to determine the width of the graph
    const width = range[1] - range[0];
    // console.log("width: ", width);
    
    // determine how many ticks to use/can fit in the axis based on range -> width/pixelsPerTick
    const numberOfTicksTarget = Math.max(1, Math.floor(width / pixelsPerTick));
    // console.log("numberOfTicksTarget: ", numberOfTicksTarget);

    return (
      xScale
        // using d3's .ticks() method to generate ticks, quantity of ticks based on input value
        .ticks(numberOfTicksTarget)
        // creating the minor label
        .map((value) => ({
          value,
          xOffset: xScale(value),
        }))
    );
  }, [
    // whenever domain and range change, update tickmarks
    domain.join("-"),
    range.join("-"),
  ]);

  return (
    <svg >
      <path
        // drawing x axis using svg path (V draws a vertical line, H draws a horizontal line)
        d={[
          "M", range[0], 6,
          "v", -6,
          "H", range[1],
          "v", 6,
        ].join(" ")}
        // fill and stroke
        fill="none"
        stroke="currentColor"
      />

      {ticks.map(({ value, xOffset }) => (
        <g 
        key={value}
        // transform moves the tickmarks, where the first arg is the interval and the second arg is the placement on the DOM
        transform={`translate(${xOffset}, 0)`}>
          <line y2="6" stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </svg>
  );
};