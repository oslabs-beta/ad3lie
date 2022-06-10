import React, { useState } from 'react';
import { generateChartCode, CodeBlock, Code } from '../../utils/CodePreview';

const HistogramCodePreview = ({ name, data, children, ...codeProps }) => {

  const code = generateChartCode(`${name}`, codeProps, {
      dataKey: data !== undefined ? 'data' : undefined,
      children: children,
      defaults: {},
      pkg: 'histogram',
  })

  return (
    
          <CodeBlock>
            {code}
          </CodeBlock>
    )
}

export default HistogramCodePreview