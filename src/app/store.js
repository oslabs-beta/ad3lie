import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/chart/dataSlice';
import xKeyReducer from '../features/chart/xKeySlice';
import yKeyReducer from '../features/chart/yKeySlice';
import xAxisLabelReducer from '../features/chart/xAxisLabelSlice';
import yAxisLabelReducer from '../features/chart/yAxisLabelSlice';
import heightReducer from '../features/chart/heightSlice';
import widthReducer from '../features/chart/widthSlice';
import thresholdsReducer from '../features/chart/thresholdsSlice';
import barPaddingReducer from '../features/chart/barPaddingSlice';
import radiusReducer from '../features/chart/radiusSlice';
import nameReducer from '../features/chart/nameSlice';

export const store = configureStore({
  reducer: {
    name: nameReducer,
    data: dataReducer,
    xKey: xKeyReducer,
    yKey: yKeyReducer,
    xAxisLabel: xAxisLabelReducer,
    yAxisLabel: yAxisLabelReducer,
    height: heightReducer,
    width: widthReducer,
    thresholds: thresholdsReducer,
    barPadding: barPaddingReducer,
    radius: radiusReducer
  }
});
