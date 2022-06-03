import React from 'react';
import { formatCode } from '../../../utils/CodePreview';
import { downloadCode } from "../../../utils/ExportData"

export const ExportCodeButton = ({ name, codeRef } ) => {
    return (
      <button
        className="export-comp button"
        class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={ 
          async () => {
            try {
              console.log(codeRef)
              const formattedCode = await formatCode(codeRef)
              downloadCode(`My${name}.jsx`, formattedCode)
            }
            catch(err) {
              console.log(err.message)
              console.log(`Oops this button doesn\'t work because writeFileSync requires node :)`)
              console.log('fork ma lyfe')
              return err
              }
          }}
        >
          Export Code
        </button>
  );
};


