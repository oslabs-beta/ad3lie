import React from 'react';
import { download } from "../../../utils/ExportData"
// import { myComp } from "../../../utils/CodePreview"

export const ExportDataButton = ({ name, data } ) => {
  console.log(name)
  console.log(data)
    return (
    <button
      className="export-data button"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => download(`${name}Data.txt`, JSON.stringify(data))}
    >
      Export Data
    </button>
  );
};
