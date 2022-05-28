import React from "react"
import PropTypes from "prop-types"

const Gradient = ({ id, colors, ...props }) => (
  <linearGradient id={id} gradientUnits="userSpaceOnUse" spreadMethod="pad" {...props}>
    {colors.map((color, i) => (
      <stop
        key={i}
        offset={`${i * 100 / (colors.length - 1)}%`}
        stopColor={color}
      />
    ))}
  </linearGradient>
)

Gradient.propTypes = {
  id: PropTypes.string,
  colors: PropTypes.arrayOf(
    PropTypes.string,
  ),
}

Gradient.defaultProps = {
  id: "Gradient",
  colors: [],
}

export default Gradient