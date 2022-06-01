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
