/**
 * @name: Axis
 * @description: produces a modularized template for the Horizontal and Vertical Axes
 * @param: 
 * @returns: 
 * @author: Antonio Ayala, Sophia Chiao
 */

// import modules and libraries
import React from "react"
import PropTypes from "prop-types" // This is essentially typescript but REACT
import * as d3 from 'd3'
import { useChartDimensions } from './useChartDimensions_comments'

// declaring a const axisComponentsByDimension set where the x and y keys are set to the
// functions AxisHorizontal and AxisVertical through JavaScript/React Hoisting
const axisComponentsByDimension = {
  x: AxisHorizontal,
  y: AxisVertical,
}

// declaring a const Axis that returns the invocation of either AxisHorizontal or AxisVertical
// dimension <string> : "x" or "y"
const Axis = ({ dimension, ...props }) => {
  
  // returns the new dimensions of the window
  const dimensions = useChartDimensions()
  
  // setting the Component variable to be the function AxisHorizontal or AxisVertical
  const Component = axisComponentsByDimension[dimension]

  // if Component does not exist, return null
  if (!Component) return null

  return (
    // Rendering the AxisHorizontal / AxisVertical
    <Component
      dimensions={dimensions}
      {...props}
    />
  )
}

// THIS CAN BE REPLACED BY TYPESCRIPT
Axis.propTypes = {
  dimension: PropTypes.oneOf(["x", "y"]),
  scale: PropTypes.func,
  label: PropTypes.string,
  formatTick: PropTypes.func,
}

// defaultProps is a React component property that allows you to set default values for the props argument
Axis.defaultProps = {
  dimension: "x",
  scale: null,
  formatTick: d3.format(","),
}

// Exporting the Axis function
export default Axis

/******************************************************************************************************************/
/******************** Below are helper functions for Axis to render the specified X- or Y- Axis *******************/
/******************************************************************************************************************/

// Creates the rendering of the Horizontal Axis
// input: dimensions, label, formatTick, scale, data, ...props
// output: rendering of the X-Axis
function AxisHorizontal ({ dimensions, label, formatTick, scale, data, ...props }) {
  const numberOfTicks = dimensions.boundedWidth < 600
        ? dimensions.boundedWidth / 100
        : dimensions.boundedWidth / 250

  // const ticks = scale.ticks(numberOfTicks)
  // console.log(scale)
  // const ticks = axis(scale).tickValues([data.map((d) => d.product)])

  return (
    <g className="Axis AxisHorizontal" transform={`translate(0, ${dimensions.boundedHeight})`} {...props}>
      <line
        className="Axis__line"
        x2={dimensions.boundedWidth}
      />

      {/* {ticks.map((tick, i) => (
        <text
          key={tick}
          className="Axis__tick"
          transform={`translate(${scale(tick)}, 25)`}
        >
          { formatTick(tick) }
        </text>
      ))} */}

      {label && (
        <text
          className="Axis__label"
          transform={`translate(${dimensions.boundedWidth / 2}, 60)`}
        >
          { label }
        </text>
      )}
    </g>
  )
}

function AxisVertical ({ dimensions, label, formatTick, scale, ...props }) {
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
          { formatTick(tick) }
        </text>
      ))}

      {label && (
        <text
          className="Axis__label"
          style={{
            transform: `translate(-56px, ${dimensions.boundedHeight / 2}px) rotate(-90deg)`
          }}
        >
          { label }
        </text>
      )}
    </g>
  )
}
