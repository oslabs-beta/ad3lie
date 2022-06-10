import React, { useState, useEffect, useMemo, Fragment } from 'react';
import * as d3 from 'd3';
import Pie from '../../../ChartComponents/JSX/Pie.jsx';
// import '../../../ChartComponents/chartstyles.css';
// import '../../../../styles.css';

const PieChart = (props) => {
  const {
    data,
    innerRadius,
    outerRadius,
    label,
    value
  } = props;

  const margin = {
    top: 50, right: 50, bottom: 50, left: 50,
  };

  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  return (<Pie
    data={data}
    width={width}
    height={height}
    innerRadius={innerRadius}
    outerRadius={outerRadius}
    label={label}
    value={value}
  />);
}

export default PieChart;