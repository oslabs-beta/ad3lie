import React, { useState } from 'react';
import { generateChartCode, CodeBlock, Code } from '../../../../utils/CodePreview';

const BarChartCodePreview = ({ name, data, children, ...codeProps }) => {

  const code = generateChartCode(`${name}`, codeProps, {
      dataKey: data !== undefined ? 'data' : undefined,
      children: children,
      defaults: {},
      pkg: 'barchart',
  })

  return (
    
          <CodeBlock>
            {code}
          </CodeBlock>
    )
}

export default BarChartCodePreview

/*

// install (please make sure versions match peerDependencies)
// npm install @d3act @d3act/barchart
import { BarChart } from 'd3act/components'
import { Chart } from 'd3act/components'
import { Axis_noticks } from 'd3act/components'
import { Axis } from 'd3act/components'
import { Rectangle } from 'd3act/components'

// Before use, remember to npm i all dependencies
// and the @d3act component library to use your charts,
// otherwise, no charts will be rendered.
// Copy the following code to your component file
// along with your PropsData.txt file .
const MyBarChart = ({ data  }) => (
    <BarChart
        data={data}
        xKey=""
        yKey=""
        xAxisLabel="X-axis: Species"
        yAxisLabel="Y-axis: Body Mass"
        height={500}
        width={500}
    />
)

*/
