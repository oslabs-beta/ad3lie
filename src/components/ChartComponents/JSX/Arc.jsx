import React from 'react'

export const Arc = ({
    data,
    fill,
    stroke,
    strokeWidth,
    d,
}) => {
    return (
        <path
            className="arc"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            d={d}
        />
    )
}