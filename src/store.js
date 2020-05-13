import { configureStore } from '@reduxjs/toolkit';
import currentCollectionReducer from './pages/CollectionPage/CollectionPageSlice';
import collectionListReducer from './pages/LandingPage/CollectionListSlice';
import searchResultReducer from './pages/SearchResultPage/SearchResultPageSlice';

export default configureStore({
  reducer: {
    collectionList: collectionListReducer,
    currentCollection: currentCollectionReducer,
    searchResults: searchResultReducer,
  },
});
