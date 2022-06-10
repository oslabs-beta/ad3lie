import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { pie } from 'd3';
import { sum } from 'lodash';


const Pie = ({
  data,
  width,
  height,
  innerRadius,
  outerRadius,
  label,
  pieValue

}) => {
    d3.select('#pie-container')
    .select('svg')
    .remove();

    const colorScale = d3
    .scaleSequential()      
    .interpolator(d3.interpolateHcl("#60c96e", "#4d4193"))      
    .domain([0, data.length]);
  
    // Create new svg
    const svg = d3
      .select('#pie-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

  const pieGenerator = d3
    .pie()
    .padAngle(0)
    .value((d) => d[pieValue]);

    const arc = svg
      .selectAll()
      .data(pieGenerator(data))
      .enter();

    // Append arcs
    arc
      .append('path')
      .attr('d', arcGenerator)
      .style('fill', (_, i) => colorScale(i))
      .style('stroke', '#ffffff')
      .style('stroke-width', 0);

    // Append text labels
  arc
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .text((d) => {
      if (!d.data[label]) return ``
      if (d.data[label]) return `${d.data[label]} ${d.data[pieValue]}`
    })
    .style('fill', 'black')
    .style('font-size', 10)
    .attr('transform', (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });
  
  return <div id="pie-container" />
  }    
export default Pie