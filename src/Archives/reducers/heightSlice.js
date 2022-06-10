import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 500
};

export const heightSlice = createSlice({
  name: 'height',
  initialState,
  reducers: {
    changeHeight: (state, action) => {
      if (+action.payload < 100) {
        console.log(
          'Value must not be less than 100 px. Resetting to default.'
        );
        action.payload = 500;
        console.log(action.payload);
        state.value = action.payload;
        return;
      }
      console.log('Changing height');
      state.value = +action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeHeight } = heightSlice.actions;

export default heightSlice.reducer;
