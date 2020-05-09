import { configureStore } from '@reduxjs/toolkit';
import collectionsReducer from './pages/CollectionPage/CollectionPageSlice';

export default configureStore({
  reducer: {
    collections: collectionsReducer,
  },
});
