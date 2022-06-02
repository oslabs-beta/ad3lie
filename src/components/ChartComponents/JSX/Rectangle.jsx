import React from 'react';
import styled from 'styled-components';

const Bar = styled.rect`
  fill-opacity: 0.7;
  color: palevioletred;
`;

const Rectangle = ({
  data,
  x,
  y,
  width,
  height,
  fill
}) => {

  return (
    <Bar
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};

export default Rectangle