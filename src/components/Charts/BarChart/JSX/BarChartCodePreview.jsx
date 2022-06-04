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

  // References created by useRef itself do not trigger component rerenders, and at the start of the first render, it will be null
  // State must be modified to trigger any rerenders, so we use a callback ref to run some code 
  // when React attaches or detaches a ref to a DOM node (<code>)
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

  // To reflect on every code change, we use useEffect to reassign the new codeRef on rerender
  useEffect(() => {
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
              console.log(window.electron.dialog);
              const saveLocation = window.electron.showSaveDialogSync();
              console.log(saveLocation)
              console.log(codeRef)
              const formattedCode = await formatCode(codeRef)
              const formattedData = `export const data = [${data
                .reduce((str, obj) => {
                  return (str +=
                    '{' + Object.keys(obj).map((key) => `'${key}': ${obj[key]}`) + `}, \n`);
                }, '')
                .trim()
                .slice(0, -1)}]`;
                
              // downloadCode(`My${name}.jsx`, formattedCode)
              console.log(window.electron.__dirname)
              window.electron.mkdirSync(window.electron.path.resolve('temp'));
              window.electron.writeFileSync(window.electron.path.resolve( 'temp', 'data.js'), formattedData)
              window.electron.writeFileSync(window.electron.path.resolve('temp', 'code.js'), formattedCode)
            }
            catch(err) {
              console.log(err.message)
              console.log(`no code for you :)`)
              console.log('fork ma lyfe')
              return err
              }
          }}
        >
          Export Chart
        </button>
    </Fragment>
          
    )
}

export default BarChartCodePreview
