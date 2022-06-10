import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 2
};

export const barPaddingSlice = createSlice({
  name: 'barPadding',
  initialState,
  reducers: {
    changeBarPadding: (state, action) => {
      console.log('Changing barPadding');
      state.value = +action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeBarPadding } = barPaddingSlice.actions;

export default barPaddingSlice.reducer;
