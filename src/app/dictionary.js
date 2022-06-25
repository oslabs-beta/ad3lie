/* eslint-disable no-alert, no-console */

export const dictionary = {
  // Dictionary is an object of objects that we use to initialize all of our charts info to generate our routes and pass down necessary props for selected containers
  // no reducers here since this will remain a static piece of state, unless we directly modify/add to it as we contribute to the chart codebase
  barchart: {
    type: 'barchart',
    name: 'BarChart',
    children: ['Chart, Axis, Rectangle'],
    properties: [
      'data',
      'dataString',
      'xKey',
      'yKey',
      'xAxisLabel',
      'yAxisLabel',
      'height',
      'width'
    ]
  },
  histogram: {
    type: 'histogram',
    name: 'Histogram',
    children: ['Chart, Axis, Bars'],
    properties: [
      'data',
      'dataString',
      'xKey',
      'xAxisLabel',
      'yAxisLabel',
      'height',
      'width',
      'thresholds',
      'barPadding'
    ]
  },

  scatterplot: {
    type: 'scatterplot',
    name: 'ScatterPlot',
    children: ['Chart, Axis, Circles'],
    properties: [
      'data',
      'dataString',
      'xKey',
      'yKey',
      'xAxisLabel',
      'yAxisLabel',
      'height',
      'width',
      'radius'
    ]
  },

  piechart: {
    type: 'piechart',
    name: 'PieChart',
    children: ['Pie'],
    properties: ['data', 'dataString', 'innerRadius', 'outerRadius', 'label', 'pieValue']
  },

  linechart: {
    type: 'linechart',
    name: 'LineChart',
    children: ['Chart, Axis, Line'],
    properties: [
      'data',
      'dataString',
      'xKey',
      'yKey',
      'xAxisLabel',
      'yAxisLabel',
      'height',
      'width'
    ]
  }
};

export default dictionary;
