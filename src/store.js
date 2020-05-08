import { configureStore } from '@reduxjs/toolkit';
import collectionsReducer from './AppSlice';

export default configureStore({
  reducer: {
    collections: collectionsReducer,
  },
});
