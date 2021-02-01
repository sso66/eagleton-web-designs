import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Redux/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
