import { Component } from "react";
import { BarChart, BarChartForm } from "./";
/*
This is the generic classful parent component that hosts the chart-specific form and graph 
We update state from the form, which the graph reads and re-renders from
<BarChartContainer>
    <BarChartForm />
    <BarChartCustomizer />
    <BarChartCodePreview />
</BarChartContainer>
*/
const BarChartContainer = (props) => {
  const [data, setData] = useState([]);
  const [xKey, setXKey] = useState('');
  const [yKey, setYKey] = useState('');
  const [xAxisLabel, setxAxisLabel] = useState('');
  const [yAxisLabel, setyAxisLabel] = useState('');
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);


  // Event Handlers here to update state dynamically
// Call some fn getData() to import? or pull from whereever we import the data from
const handleData = (e) => {
  e.preventDefault();
  setData(JSON.parse(e.target.value));
}

const handleXKey = (e) => {
  e.preventDefault();
  setXKey(e.target.value);
}

const handleYKey = (e) => {
  e.preventDefault();
  setYKey(e.target.value);
}

const handleXAxisLabel = (e) => {
  e.preventDefault();
  setxAxisLabel(e.target.value);
}

const handleYAxisLabel = (e) => {
  e.preventDefault();
  setyAxisLabel(e.target.value);
}

const handleWidth = (e) => {
  e.preventDefault();
  setWidth(+e.target.value);
}

const handleHeight = (e) => {
  e.preventDefault();
  setHeight(+e.target.value);
}

const handlers = { handleData, handleXKey, handleYKey, handleXAxisLabel, handleYAxisLabel, handleWidth, handleHeight }

  return (
    <div className="barchartcontainer">
        <BarChartForm data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width} handlers={handlers}></BarChartForm>
        <BarChart data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel}></BarChart>
    </div>
    );
}

export default BarChartContainer







// class BarChartContainer extends Component {
//   constructor() {
//     super(props);
//     this.state = {
//       data: [],
//       xKey: 'xKey',
//       yKey: 'yKey',
//       xAxisLabel: 'xAxisLabel',
//       yAxisLabel: 'yAxisLabel',
//       height: '100',
//       width: '100'
//     }
// }
//     render() {
//             return (
//             <div className="barchartcontainer">
//                 <BarChartForm data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width}></BarChartForm>
//                 <BarChart data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel}></BarChart>
//             </div>
//             );
//         }
// }