import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Y-axis: Body Mass'
};

export const yAxisLabelSlice = createSlice({
  name: 'yAxisLabel',
  initialState,
  reducers: {
    changeYAxisLabel: (state, action) => {
      console.log('Changing Y Axis Label');
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeYAxisLabel } = yAxisLabelSlice.actions;

export default yAxisLabelSlice.reducer;
