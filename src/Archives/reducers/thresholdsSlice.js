import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 9
};

export const thresholdsSlice = createSlice({
  name: 'thresholds',
  initialState,
  reducers: {
    changeThresholds: (state, action) => {
      console.log('Changing thresholds');
      state.value = +action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeThresholds } = thresholdsSlice.actions;

export default thresholdsSlice.reducer;
