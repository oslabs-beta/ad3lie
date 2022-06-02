import React from 'react';
import { download } from '../../../utils/ExportData';

export const ExportDataButton = (name, data) => {
  return (
    <button
      class="glass w-32 text-white"
      onClick={() => download(`${name}Data.txt`, JSON.stringify(data))}
    >
      Export Data
    </button>
  );
};
