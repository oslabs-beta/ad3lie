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
// npm install @ad3lie @ad3lie/barchart
import { BarChart } from 'ad3lie/components'
import { Chart } from 'ad3lie/components'
import { Axis_noticks } from 'ad3lie/components'
import { Axis } from 'ad3lie/components'
import { Rectangle } from 'ad3lie/components'

// Before use, remember to npm i all dependencies
// and the @ad3lie component library to use your charts,
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
