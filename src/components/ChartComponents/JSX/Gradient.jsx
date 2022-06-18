import React from "react"

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

export default Gradient