import React from "react"
import * as d3 from 'd3'
import { useChartDimensions } from "./Chart.jsx";

const axisComponentsByDimension = {
  x: AxisHorizontal,
  y: AxisVertical,
  xB: AxisBand,
}

// dimension will be a string 'x', 'y', or 'xb' to say if the component will be a horiz, vert, or band axis
const Axis = ({ dimension, ...props }) => {
  // what does useChartDimesions return?
  const dimensions = useChartDimensions()
  // this is where we pick the type of component
  const Component = axisComponentsByDimension[dimension]
  // check if the axis exist
  if (!Component) return null
  // if id does exist, return the axis, passing in dimensions and prop drilling props
  return (
    <Component
      dimensions={dimensions}
      {...props}
    />
  )
}

export default Axis


function AxisHorizontal({ dimensions, label, formatTick, scale, data, ...props }) {
  // this is how we find how many ticks we need for our axis
  // if bounded width is less that 600, number of ticks are width/100
  // else number of ticks are width/250
  const numberOfTicks = dimensions.boundedWidth < 600
    ? dimensions.boundedWidth / 100
    : dimensions.boundedWidth / 250

  const ticks = scale.ticks(numberOfTicks)


  return (
    <g className="Axis AxisHorizontal" transform={`translate(0, ${dimensions.boundedHeight})`} {...props}>
      <line
        className="Axis__line"
        x2={dimensions.boundedWidth}
      />

      {ticks.map((tick, i) => (
        <text
          key={tick}
          className="Axis__tick"
          transform={`translate(${scale(tick)}, 25)`}
        >
          {formatTick(tick)}
        </text>
      ))}

      {label && (
        <text
          className="Axis__label"
          transform={`translate(${dimensions.boundedWidth / 2}, 60)`}
        >
          {label}
        </text>
      )}
    </g>
  )
}

function AxisVertical({ dimensions, label, formatTick, scale, ...props }) {
  const numberOfTicks = dimensions.boundedHeight / 70

  const ticks = scale.ticks(numberOfTicks)

  return (
    <g className="Axis AxisVertical" {...props}>
      <line
        className="Axis__line"
        y2={dimensions.boundedHeight}
      />

      {ticks.map((tick, i) => (
        <text
          key={tick}
          className="Axis__tick"
          transform={`translate(-16, ${scale(tick)})`}
        >
          {formatTick(tick)}
        </text>
      ))}

      {label && (
        <text
          className="Axis__label"
          style={{
            transform: `translate(-56px, ${dimensions.boundedHeight / 2}px) rotate(-90deg)`
          }}
        >
          {label}
        </text>
      )}
    </g>
  )
}

function AxisBand({ dimensions, label, formatTick, scale, data, ...props }) {
  const numberOfTicks = dimensions.boundedWidth < 600
    ? dimensions.boundedWidth / 100
    : dimensions.boundedWidth / 250

  const ticks = scale.domain();

  return (
    <g className="Axis AxisHorizontal" transform={`translate(0, ${dimensions.boundedHeight})`} {...props}>
      <line
        className="Axis__line"
        x2={dimensions.boundedWidth}
      />

      {ticks.map((tick, i) => (
        <text
          key={tick}
          className="Axis__tick"
          transform={`translate(${scale(tick) + scale.bandwidth() / 2}, 25)`}
        >
          {(tick)}
        </text>
      ))}

      {label && (
        <text
          className="Axis__label"
          transform={`translate(${dimensions.boundedWidth / 2}, 60)`}
        >
          {label}
        </text>
      )}
    </g>
  )
}