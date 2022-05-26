import React from 'react';
import { ChangeEvent, useState } from 'react';

type ChartCustomizerProps = {
  onChange: (n: string) => void;
};

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  event.preventDefault();
  onChange(event.target.value);
}

export default function ChartCustomizer (props) {
  return (
    <div>Chart Customizer Box. Resposible CSS Placement on the page</div>
    <BarChartCustomizer>Responsible for exposing fields. And updating State</BarChartCustomizer>
    
  )
}