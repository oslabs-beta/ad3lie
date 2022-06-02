/* eslint-disable */

import React from "react"
import PropTypes from "prop-types"
import * as d3 from 'd3'
import { DimensionsPropsType } from "../../utils/utils";
import { useChartDimensions } from "./Chart";

const axisComponentsByDimension = {
  x: AxisHorizontal,
  y: AxisVertical,
}

export default interface Axis<T> {
  data: any;
  dimension: {
    x: string,
    y: string;
  }
  // dimensions: {
  //   boundedWidth: number;
  //   boundedHeight: number;
  // };
  dimensions: DimensionsPropsType;
  scale: Function;
  label: string;
  formatTick: Function;
}


const AxisDefaultProps: any = {
  dimension: "x",
  scale: null,
  formatTick: d3.format(","),
}


const Axis = ({ dimension, ...props }: Axis<string | number | any>) => {
  const dimensions = useChartDimensions();
  const Component = dimension.x ? axisComponentsByDimension['x'] : axisComponentsByDimension['y'];
  if (!Component) return null;

  return (
    <Component
      dimensions={dimensions}
      {...props}
    />
  )
}



function AxisHorizontal ({ dimensions, label, formatTick, scale, data, ...props }: Axis<string | number | any>) {
  const numberOfTicks = dimensions.boundedWidth < 600
        ? dimensions.boundedWidth / 100
        : dimensions.boundedWidth / 250

  const ticks = scale.ticks(numberOfTicks)
  // console.log(scale)
  // const ticks = axis(scale).tickValues([data.map((d) => d.product)])

  return (
    <g className="Axis AxisHorizontal" transform={`translate(0, ${dimensions.boundedHeight})`} {...props}>
      <line
        className="Axis__line"
        x2={dimensions.boundedWidth}
      />

      {ticks.map((tick: React.Key | null | undefined, i: any) => (
        <text
          key={tick}
          className="Axis__tick"
          transform={`translate(${scale(tick)}, 25)`}
        >
          { formatTick(tick) }
        </text>
      ))}

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

function AxisVertical ({ dimensions, label, formatTick, scale, ...props }: Axis<string | number | any>) {
  const numberOfTicks = dimensions.boundedHeight / 70

  const ticks = scale.ticks(numberOfTicks)

  return (
    <g className="Axis AxisVertical" {...props}>
      <line
        className="Axis__line"
        y2={dimensions.boundedHeight}
      />

      {ticks.map((tick: React.Key | null | undefined, i: any) => (
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
