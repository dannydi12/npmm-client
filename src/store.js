import { configureStore } from '@reduxjs/toolkit';
import collectionsReducer from './pages/CollectionPage/CollectionPageSlice';
import searchResultReducer from './pages/SearchResultPage/SearchResultPageSlice';

export default configureStore({
  reducer: {
    collections: collectionsReducer,
    searchResults: searchResultReducer,
  },
});
