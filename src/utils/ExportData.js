// This function is placed on the ExportDataButton and returns the JavaScript code for your data
export const download = (filename, arr) => {
  //convert JS obj (text) to string
  let text = `data = [${arr
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
