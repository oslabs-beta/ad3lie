import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 5
};

export const radiusSlice = createSlice({
  name: 'radius',
  initialState,
  reducers: {
    changeRadius: (state, action) => {
      if (+action.payload < 1) {
        console.log('Value must not be less than 1. Resetting to default.');
        action.payload = 5;
        console.log(action.payload);
        state.value = action.payload;
        return;
      }
      console.log('Changing radius');
      state.value = +action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeRadius } = radiusSlice.actions;

export default radiusSlice.reducer;
