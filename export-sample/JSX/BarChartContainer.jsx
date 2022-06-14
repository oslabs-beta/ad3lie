import React, { useState, useEffect, Fragment } from 'react';
import BarChart from './BarChart';
import BarChartForm from './BarChartForm';
import BarChartCodePreview from './BarChartCodePreview';
import {
  parseDate,
  dateAccessor,
  temperatureAccessor,
  humidityAccessor,
  getData
} from '../../ScatterPlot/App';
import * as d3 from 'd3';
import {
  getScatterData,
  getTimelineData,
  getBarChartData2
} from '../../../../utils/parseData';
import { userEnteredData } from '../../ScatterPlot/EnteredData';
import { sampleData } from '../../../../utils/dummypenguinsdata';
import '../../../ChartComponents/chartstyles.css';
import { generateChartCode } from '../../../../utils/CodePreview';
import { ExportDataButton } from '../../../ChartComponents/JSX/ExportDataButton';

function BarChartContainer() {
  return (
    <div>
        <BarChart
          data={data}
          xKey={xKey}
          yKey={yKey}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          height={height}
          width={width}
        ></BarChart>
    </div>
  );
}
export default BarChartContainer;
