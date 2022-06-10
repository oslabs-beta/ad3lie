import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'X-axis: Species'
};

export const xAxisLabelSlice = createSlice({
  name: 'xAxisLabel',
  initialState,
  reducers: {
    changeXAxisLabel: (state, action) => {
      console.log('Changing X Axis Label');
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeXAxisLabel } = xAxisLabelSlice.actions;

export default xAxisLabelSlice.reducer;
