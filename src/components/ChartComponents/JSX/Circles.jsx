import React from "react"
import { accessorPropsType } from "../../../utils/utils.js"

const Circles = ({ data, keyAccessor, xAccessor, yAccessor, radius }) => {

  return (
    <React.Fragment>
      {data.map((d, i) => (
        <circle
          className="Circles__circle"
          key={keyAccessor(d, i)}
          cx={xAccessor(d, i)}
          cy={yAccessor(d, i)}
          r={typeof radius == "function" ? radius(d) : radius}
        />
      ))}
    </React.Fragment>
  )
}

export default Circles