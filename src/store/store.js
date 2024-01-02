import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSliceReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
