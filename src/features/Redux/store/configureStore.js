// features/Redux/store/configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
