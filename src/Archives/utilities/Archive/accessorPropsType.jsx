import PropTypes from "prop-types";
import React from "react"


export const accessorPropsType = (
  PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number,
  ])
)