// const [data, setData] = useState([]);
//   const [xKey, setXKey] = useState('');
//   const [yKey, setYKey] = useState('');
//   const [xAxisTitle, setXAxisTitle] = useState('X-axis');
//   const [yAxisTitle, setYAxisTitle] = useState('Y-axis');
//   const [height, setHeight] = useState(100);
//   const [width, setWidth] = useState(100);

import { Component } from "react";
import { BarChart, BarChartForm } from "./";

class BarChartContainer extends Component {
  constructor() {
    super(props);
    this.state = {
      data: [],
      xKey: 'xKey',
      yKey: 'yKey',
      xAxisTitle: 'xAxisTitle',
      yAxisTitle: 'yAxisTitle',
      height: '100'
    }
}
    render() {
            return (
            <div className="chartwrapper">
                <BarChartForm></BarChartForm>
                <BarChart data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel}></BarChart> // height={height} width={width} not needed?
            </div>
            );
        }
}