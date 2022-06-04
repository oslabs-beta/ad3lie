// ExportData is our current workaround to not being able to use node's fs module
// (cannot run node from a browser)

// converts array of Javascript objects to a string
// downloadable as a .js file
export const download = (filename, arr) => {
  let text = `export const data = [${arr
    .reduce((str, obj) => {
      return (str +=
        '{' + Object.keys(obj).map((key) => `'${key}': ${obj[key]}`) + `}, \n`);
    }, '')
    .trim()
    .slice(0, -1)}]`;

  let element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
};

// general function to download a file (taking in plain text)

export const downloadCode = (filename, text) => {
  let element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
};
