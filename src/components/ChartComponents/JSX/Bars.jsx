import React from "react"
import * as d3 from 'd3'
import { useAccessor } from "../../../utils/utils.js";

const Bars = ({ data, keyAccessor, xAccessor, yAccessor, widthAccessor, heightAccessor, ...props }) => (
  <React.Fragment>
    {data.map((d, i) => (
      <rect {...props}
        className="Bars__rect"
        key={keyAccessor(d, i)}
        x={useAccessor(xAccessor, d, i)}
        y={useAccessor(yAccessor, d, i)}
        width={d3.max([useAccessor(widthAccessor, d, i), 0])}
        height={d3.max([useAccessor(heightAccessor, d, i), 0])}
      />
    ))}
  </React.Fragment>
)


export default Bars

