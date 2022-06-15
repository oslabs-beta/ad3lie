import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { upperFirst } from 'lodash';
import {
  generateChartCode,
  CodeBlock,
  Code,
  CodeText,
  formatCode
} from '../../../utils/CodePreview';

const CodeRender = ({ name, children, data, ...currProps }) => {
  delete currProps.dataString; // otherwise the entire dataset will be printed to the screen 

  const code = generateChartCode(`${upperFirst(name)}`, currProps, {
    dataKey: data !== undefined ? 'data' : undefined,
    children: children,
    defaults: {},
    pkg: name, // pkg: 'barchart',
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
  };
  const [codeRef, setCodeRef] = useCodeRef((node) => node)

  // To reflect on every code change, we use useEffect to reassign the new codeRef on rerender
  useEffect(() => {
    console.log(codeRef);
  }, [codeRef]);

  return (
    <Fragment>
      <div className="glass col-start-2 col-span-1 row-span-1 p-2 rounded-xl text-slate-100">
        <CodeBlock >
          <CodeText ref={setCodeRef} formatCode={formatCode}>
            {code}
          </CodeText>
        </CodeBlock>
      </div>
      <div class="flex justify-end col-start-2 col-span-1 row-start-3 row-span-1">
        <button
          className="export-comp button"
          class="glass glassglow w-32 text-white"
          onClick={
            async () => {
            try {
              const formattedCode = await formatCode(codeRef)
              const formattedData = `export const data = [${data
                .reduce((str, obj) => {
                  return (str +=
                    '{' + Object.keys(obj).map((key) => `'${key}': ${obj[key]}`) + `}, \n`);
                }, '')
                .trim()
                .slice(0, -1)}]`;

              const saveLocation = await window.electron.showSaveDialog();
              console.log('saveDialogPromise - saveLocation', saveLocation, new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''))
              // console.log('save location', saveLocation)

              // downloadCode(`My${name}.jsx`, formattedCode)
              window.electron.mkdirSync(
                window.electron.path.resolve(
                  saveLocation,
                  `${upperFirst(name)}`
                )
              );
              window.electron.writeFileSync(
                window.electron.path.resolve(
                  saveLocation,
                  `${upperFirst(name)}`,
                  'Data.js'
                ),
                formattedData
              );
              window.electron.writeFileSync(
                window.electron.path.resolve(
                  saveLocation,
                  `${upperFirst(name)}`,
                  `${upperFirst(name)}.jsx`
                ),
                formattedCode
              );
            } catch (err) {
              console.log(err)
              return err;
            }
          }}
        >
          Export
        </button>
      </div>
    </Fragment>
  );
};

export default CodeRender;
