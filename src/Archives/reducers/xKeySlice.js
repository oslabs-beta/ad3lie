import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ''
};

export const xKeySlice = createSlice({
  name: 'xKey',
  initialState,
  reducers: {
    changeXKey: (state, action) => {
      console.log('Changing X Key');
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeXKey } = xKeySlice.actions;

export default xKeySlice.reducer;
