import { createSlice } from '@reduxjs/toolkit';
import { sampleData } from '../../utils/dummypenguinsdata';
//this slice/reducer should be the same as what handleData fn does

const initialState = {
  value: sampleData
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    changeData: (state, action) => {
      console.log('changing data');
      state.value = JSON.parse(action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeData } = dataSlice.actions;

export default dataSlice.reducer;
