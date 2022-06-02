/**
 * @name: AxisVertical
 * @description: produces a modularized template for the Vertical Axis
 * @param: (object with keys domain: number[] and range: number[]), pixelsPerTick: number
 * @returns: A rendering of the Y-Axis
 * @author: Antonio Ayala, Sophia Chiao
 */


// import modules and libraries
import React, { useMemo } from 'react';
import { scaleLinear, domain, range, ticks, axisLeft, scale } from 'd3';

export const AxisVertical = ({
  domain = [0, 100],
  range = [10, 290],
  pixelsPerTick = 30,
}) => {
  // creating the tick marks for the X-Axis (Axis Bottom) utilizing the React Hook useMemo
  // useMemo returns a memoized value https://dmitripavlutin.com/react-usememo-hook/
  const ticks = useMemo(() => {
    // set the yScale using d3's scaleLinear() method
    // to create a visual scale point. This method is used to transform data values into
    // visual variables.
    // .domain is generating every intermediate tick mark
    // .range is setting the range at which these tick marks will reside
    const yScale = scaleLinear().domain(domain.reverse()).range(range)

    // declaring variable height to determine the height of the graph
    const height = range[1] - range[0];

    // determine how many ticks to use/can fit in the axis based on range -> height/pixelsPerTick
    const numberOfTicksTarget = Math.max(1, Math.floor(height / pixelsPerTick));
    
    return (
      yScale
        // using d3's .ticks() method to generate ticks, quantity of ticks based on input value
        .ticks(numberOfTicksTarget)
        // creating the minor label
        .map((value) => ({
          value: value,
          yOffset: yScale(value),
        }))
    );
  }, [
    // whenever domain and range change, update tickmarks
    domain.join("-"),
    range.join("-"),
  ]);

  return (
    <svg height="1000px" width="1000px">
      <g transform='translate(0, 20)'>
        <path
          // drawing x and y axises using svg path (V draws a vertical line, H draws a horizontal line)
          d={["M", 6, range[0], "H", 12, "v", range[1], "H", 6].join(" ")}
          // fill and stroke
          fill="none"
          stroke="currentColor"
          transform="translate(94, 0)"
        />

        {ticks.map(({ value, yOffset }) => (
          <g key={value}>
            <line
              x2="6"
              stroke="currentColor"
              transform={`translate(100, ${yOffset})`}
            />
            <text
              key={value}
              transform={`translate(90, ${yOffset + 3})`}
              style={{
                fontSize: "10px",
                textAnchor: "middle",
              }}
            >
              {value}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
};