// Data must be input in JSON format
export const handleData = (e) => {
  e.preventDefault();
  //Input data works for JSON format - see jsonpenguins.txt
  setData(JSON.parse(e.target.value));
};

// Data needs to be re-input as key changes, since grouped data is already set in state
export const handleXKey = (e) => {
  e.preventDefault();
  setXKey(e.target.value);
};

export const handleYKey = (e) => {
  e.preventDefault();
  setYKey(e.target.value);
};

export const handleXAxisLabel = (e) => {
  e.preventDefault();
  setXAxisLabel(e.target.value);
};

export const handleYAxisLabel = (e) => {
  e.preventDefault();
  setYAxisLabel(e.target.value);
};

export const handleWidth = (e) => {
  e.preventDefault();
  if (+e.target.value < 100) {
    console.log('Value must not be less than 100 px. Resetting to default.');
    setWidth(500);
    return;
  }
  setWidth(+e.target.value);
};

export const handleHeight = (e) => {
  e.preventDefault();
  if (+e.target.value < 100) {
    console.log('Value must not be less than 100 px. Resetting to default.');
    setHeight(500);
    return;
  }
  setHeight(+e.target.value);
};

export const handleThresholds = (e) => {
  e.preventDefault();
  setThresholds(+e.target.value);
};

export const handleBarPadding = (e) => {
  e.preventDefault();
  setBarPadding(+e.target.value);
};

//below are unique to pie chart
export const handleOuter = (e) => {
  if (+e.target.value > 100) {
    console.log(
      'Value must not be greater than or equal to 100. Resetting to default.'
    );
    setOuter(100);
    return;
  }
  setOuter(+e.target.value);
};

export const handleInner = (e) => {
  if (+e.target.value > outerRadius) {
    console.log(
      'Value must not be greater than or equal to size of piechart. Resetting to default.'
    );
    setInner(0);
    return;
  }
  setInner(+e.target.value);
};

// Data needs to be re-input as key changes, since grouped data is already set in state
export const handleLabel = (e) => {
  e.preventDefault();
  setLabel(e.target.value);
};

export const handleValue = (e) => {
  e.preventDefault();
  setValue(e.target.value);
};
