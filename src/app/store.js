import { configureStore } from '@reduxjs/toolkit';
import chartsReducer from '../features/chart/chartsSlice';
import propsReducer from '../features/chart/propsSlice';
// import preloadedState from './preloadedState';

//'reducer' acts as a root reducer here

export const store = configureStore({
  reducer: {
    charts: chartsReducer,
    props: propsReducer
  }
  // preloadedState: preloadedState
});
