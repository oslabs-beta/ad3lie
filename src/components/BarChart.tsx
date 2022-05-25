import { useContext } from 'react';
import { BarChartContext } from '../ChartContext';

export default function (props) {
 //useContext here to set updated values for width and height

 const bar = useContext(BarChartContext);

 return(
     <BarChart width={bar.width} height={bar.height} {...props}/>
 )

}
