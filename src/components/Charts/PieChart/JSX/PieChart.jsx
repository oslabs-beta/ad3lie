import React, { useMemo, Fragment } from 'react';
import * as d3 from 'd3';
import { useChartDimensions } from '../../../../utils/utils.js';
import Pie from '../../../ChartComponents/JSX/Pie.jsx';
import Chart from '../../../ChartComponents/JSX/Chart.jsx';
import '../../../ChartComponents/chartstyles.css';
import '../../../ChartComponents/Chart.css';

const PieChart = ({ data, innerRadius, outerRadius, label, pieValue }) => {

  // We can over-write the default values set in useChartDimensions by passing them in as props
  // Centering Pie
  const [ref, dimensions] = useChartDimensions({
    marginTop: 200,
    marginBottom: 170,
    marginLeft: 270,
    marginRight: 170
  });

  const width = 2 * outerRadius + dimensions.marginLeft + dimensions.marginRight;
  const height = 2 * outerRadius + dimensions.marginTop + dimensions.marginBottom;

  /**
   * Currently the PieChart does not work when placed into <Chart/>
   * Because Pie directly returns an svg, instead of ind. svg elements? (rect, circle, etc)
   */

  return (
    <Fragment>
      <div className="Pie w-full top-0 left-0 h-full" ref={ref}>
        <Chart dimensions={dimensions}>
          <Pie
            data={data}
            height={height}
            width={width}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            label={label}
            pieValue={pieValue}
          />
        </Chart>
      </div>
    </Fragment>
  );
}

export default PieChart;