import forOwn from 'lodash/forOwn';
import isPlainObject from 'lodash/isPlainObject';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import isBoolean from 'lodash/isBoolean';
import dedent from 'dedent-js';
import styled from 'styled-components';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
// const { existsSync, writeFileSync, mkdirSync, writeFile } = require('fs');

export const indent = (content, spaces = 8) =>
  content
    .split('\n')
    .map((line, i) => {
      if (i === 0) return line;
      return `${' '.repeat(spaces)}${line}`;
    })
    .join('\n');

/* convert all inputs to json 🙃 */
export const toJson = (value) => {
  const jsonString = JSON.stringify(value, null, 4);
  const normalized = jsonString
    .replace(/^(\s+)"([a-z]{1}[a-z]*)"\: /gim, (_match, space, key) => {
      return `${space}${key}: `;
    })
    .replace(/"/gm, `'`);

  if (normalized.length < 80) {
    return normalized.replace(/\n/gm, ' ').replace(/\s{2,}/g, ' ');
  }
  return indent(normalized);
};

export const generateChartCode = (
  name,
  props,
  { dataKey, children, defaults, pkg }
) => {
  const properties = [];
  let args = '';

  if (dataKey !== undefined) {
    properties.push(`${dataKey}={${dataKey}}`);
    args = `{ ${dataKey} /* see ${dataKey} from your Javascript data file */ }`;
  }

  forOwn(props, (_value, key) => {
    if (_value === undefined) return;
    if (defaults && defaults[key] === _value) return;
    if (key === 'theme') return;

    let value;
    if (isPlainObject(_value)) {
      value = `{${toJson(_value)}}`;
    } else if (isArray(_value)) {
      value = `{${toJson(_value)}}`;
    } else if (isString(_value)) {
      value = `"${_value}"`;
    } else if (isBoolean(_value)) {
      value = `{${_value ? 'true' : 'false'}}`;
    } else if (isNumber(_value)) {
      value = `{${_value}}`;
    } else if (typeof _value === 'function') {
      value = `{${indent(dedent(_value.toString()), 8)}}`;
    } else if (_value === null) {
      value = `{null}`;
    } else {
      value = _value;
    }

    properties.push(`${key}=${value}`);
  });

  const install = `// npm install @d3act @d3act/${pkg}`;

  const imports = [name, ...children.map((c) => c)].map(
    (i) => `import { ${i} } from 'd3act/components'`
  );
  const importData = `import { ${dataKey} } from 'My${name}Data.js'`;

  let warning = '';
  if (name) {
    warning = [
      ``,
      `// Before use, remember to npm i all dependencies`,
      `// and the @d3act component library to use your charts,`,
      `// otherwise, no charts will be rendered.`,
      `// Copy the following code to your component file`,
      `// along with your Javascript data file.`
    ].join('\n');
  }

  return `// install (please make sure versions match peerDependencies)
${install}
${importData}
${imports.join('\n')}
${warning}
const My${name} = (${args}) => (
    <${name}
        ${properties.join('\n        ')}
    />
)`;
};

export const formatCode = (code) => {
  return prettier.format(code.innerText, {
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    bracketSameLine: true,
    parser: 'babel',
    plugins: [parserBabel]
  });
};

// just using styled components here only for testing html preview
// our code is enclosed in an HTML <code> tag
export const CodeText = styled.code``;

export const CodeBlock = styled.pre`
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.7;
  padding: 12px 20px;
  overflow: scroll;
  height: 100%;
`;

export const Code = styled.div`
  position: absolute;
  top: 46px;
  bottom: 0;
  width: 100%;
  overflow: auto;
`;
