import React, { useState, useEffect, useRef, useCallback, Fragment } from 'react';
import { generateChartCode, CodeBlock, Code, CodeText, formatCode} from '../../../../utils/CodePreview';
import { downloadCode} from '../../../../utils/ExportData';
import path from 'path';
import { writeFileSync } from 'fs';
import { ExportCodeButton } from '../../../ChartComponents/JSX/ExportCodeButton';

const BarChartCodePreview = ({ name, data, children, ...codeProps }) => {

  const code = generateChartCode(`${name}`, codeProps, {
      dataKey: data !== undefined ? 'data' : undefined,
      children: children,
      defaults: {},
      pkg: 'barchart',
  })

  const useCodeRef = (processNode) => {
    const [node, setNode] = useState(null);
    const setCodeRef = useCallback(newNode => {
      if (newNode) {
          // console.log("ref", node); // node = codeRef.current // <code> 
          setNode(processNode(newNode));
      }
    }, []);
    return [node, setCodeRef]
  }

  const [codeRef, setCodeRef] = useCodeRef(node => node)

  useEffect(() => {
    // console.log(`UseEffect here to force reassignment of new ref on rerender. The new codeRef is:`)
    console.log(codeRef)
  }, [codeRef]);

  return (
    <Fragment>
        <CodeBlock >
          <CodeText ref={setCodeRef} formatCode={formatCode}>
            {code}
            </CodeText>
        </CodeBlock>

    
        {/* Something weird happening when putting export button here.
        Think it's setting codeRef in an infinite loop which leads to stack overflow lol
        <ExportCodeButton name={name} codeRef={codeRef}></ExportCodeButton> 
        */}
          
        <button
        className="export-comp button"
        class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={ 
          async () => {
            try {
              console.log(codeRef)
              const formattedCode = await formatCode(codeRef)
              downloadCode(`My${name}.jsx`, formattedCode)
            }
            catch(err) {
              console.log(err.message)
              console.log(`no code for you :)`)
              console.log('fork ma lyfe')
              return err
              }
          }}
        >
          Export Code
        </button>
    </Fragment>
          
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
