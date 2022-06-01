import React, { useState } from 'react';
import { generateChartCode, CodeBlock, Code } from '../../../../utils/CodePreview';

// const code = generateChartCode(`${name}`, codeProperties, {
//     dataKey: data !== undefined ? dataKey : undefined,
//     children: children,
//     pkg: pkg,
//     defaults: defaults, codeProperties={...props}}

const BarChartCodePreview = ({ name, data, children, ...codeProps }) => {
  // const codeProps = rest
  // console.log(codeProps)
  const code = generateChartCode(`${name}`, codeProps, {
      dataKey: data !== undefined ? 'data' : undefined,
      children: children,
      defaults: {},
      pkg: 'barchart',
  })

  return (
        // <Code>
          <CodeBlock>
            {code}
          </CodeBlock>
        // </Code>
    )
}

export default BarChartCodePreview

//  <Code role="tabpanel">
//     <Highlight code={code} language="jsx" />
// </Code>

// const Code = styled.div`
//     position: absolute;
//     top: 46px;
//     bottom: 0;
//     width: 100%;
//     overflow: auto;
// `