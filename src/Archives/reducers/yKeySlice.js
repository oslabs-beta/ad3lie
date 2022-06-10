import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ''
};

export const yKeySlice = createSlice({
  name: 'yKey',
  initialState,
  reducers: {
    changeYKey: (state, action) => {
      console.log('Changing Y Key');
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeYKey } = yKeySlice.actions;

export default yKeySlice.reducer;
