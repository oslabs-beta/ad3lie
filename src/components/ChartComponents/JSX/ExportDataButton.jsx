import React from 'react';
import { download } from "../../../utils/ExportData"

//data is JS
export const ExportDataButton = ({ name, data } ) => {
    return (
    <button
      className="export-data button"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => download(`My${name}Data.js`, data)}
    >
      Export Data
    </button>
  );
};
