import React, { useMemo, Fragment } from 'react';
import * as d3 from 'd3';
import { useChartDimensions } from '../../../../utils/utils.js';
import Pie from '../../../ChartComponents/JSX/Pie.jsx';
import Chart from '../../../ChartComponents/JSX/Chart.jsx';
import '../../../ChartComponents/chartstyles.css';
import '../../../../styles.css';

const PieChart = ({ data, innerRadius, outerRadius, label, pieValue }) => {

  const [ref, dimensions] = useChartDimensions({
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 50,
    marginRight: 50
  });

  const width = 2 * outerRadius + dimensions.marginLeft + dimensions.marginRight;
  const height = 2 * outerRadius + dimensions.marginTop + dimensions.marginBottom;

  return (
    <Fragment>
      <div className="Pie w-full top-0 left-0 h-full" ref={ref}>
        <Chart dimensions={dimensions}>
          <Pie
              data={data}
              width={width}
              height={height}
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