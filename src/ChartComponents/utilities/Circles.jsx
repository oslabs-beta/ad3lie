import React from "react"
import PropTypes from "prop-types"
import { accessorPropsType } from './utils'

const Circles = ({ data, keyAccessor, xAccessor, yAccessor, radius }) => {

  // console.log('this is xAccessor', xAccessor)
  // console.log('this is data', data)
  // const check = data.map((d, i) => {
  //   console.log('d, i: ', d, i)
  //   yAccessor(d[humidity], i)
  // })
  // console.log('this is yAccessor(data)', check)

  return (
    <React.Fragment>
      {data.map((d, i) => (
        <circle
          className="Circles__circle"
          key={keyAccessor(d, i)}
          cx={xAccessor(d,i)}
          cy={yAccessor(d,i)}
          r={typeof radius == "function" ? radius(d) : radius}
        />
      ))}
    </React.Fragment>
  )
}

Circles.propTypes = {
  data: PropTypes.array,
  keyAccessor: accessorPropsType,
  xAccessor: accessorPropsType,
  yAccessor: accessorPropsType,
  radius: accessorPropsType,
}

Circles.defaultProps = {
  radius: 5,
}

export default Circles