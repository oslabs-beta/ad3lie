import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 500
};

export const widthSlice = createSlice({
  name: 'width',
  initialState,
  reducers: {
    changeWidth: (state, action) => {
      if (+action.payload < 100) {
        console.log(
          'Value must not be less than 100 px. Resetting to default.'
        );
        action.payload = 500;
        console.log(action.payload);
        state.value = action.payload;
        return;
      }
      console.log('Changing width');
      state.value = +action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeWidth } = widthSlice.actions;

export default widthSlice.reducer;
