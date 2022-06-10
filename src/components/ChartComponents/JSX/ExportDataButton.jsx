import React from 'react';
import { upperFirst } from 'lodash';

//data is JS
export const ExportDataButton = ({ name, data } ) => {

  let fileName = upperFirst(name);
  let text = `export const data = [${data
    .reduce((str, obj) => {
      return (str +=
        '{' + Object.keys(obj).map((key) => `'${key}': ${obj[key]}`) + `}, \n`);
    }, '')
    .trim()
    .slice(0, -1)}]`;

  return (
    <button
      className="export-data button"
      class="glass w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
      // onClick={() => window.electron.writeFileSync('hello.json', 'Hello World')}
      onClick={ async () => await window.electron.writeFileSync(`My${fileName}Data.js`, text)} // MyBarchartData.js}
    >
      Export Data
    </button>
  );
};

/*
// converts array of Javascript objects to a string
// downloadable as a .js file
const download = async (fileName, arr) => {
  let text = `export const data = [${arr
    .reduce((str, obj) => {
      return (str +=
        '{' + Object.keys(obj).map((key) => `'${key}': ${obj[key]}`) + `}, \n`);
    }, '')
    .trim()
    .slice(0, -1)}]`;

  await window.electron.writeFileSync(`My${fileName}Data.js`, text); // MyBarchartData.js
};
*/
