import { configureStore } from '@reduxjs/toolkit';
import appReducer from './AppSlice';

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
