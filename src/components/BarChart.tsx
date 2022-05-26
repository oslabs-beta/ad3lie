import * from 'react';
import { Data, BarChartProps } from './BarChartCustomizer';

export default function BarChart ({
    data,
    xKey,
    yKey,
    xAxisLabel,
    yAxisLabel,

    height= `${height}` || '100%',
    width = `${width}` || '100%',
    
    xAxis = 'bottom',
    yAxis = 'left',
    // chartType = 'bar-chart',
  }: BarChartProps<string | number | object[]>) {}



 return(
     <BarChart width={bar.width} height={bar.height} {...props}/>
 )

}
