import { configureStore } from '@reduxjs/toolkit';
import currentCollectionInfoReducer from './redux/CurrentCollectionInfoSlice';
import collectionListReducer from './redux/CollectionListSlice';
import searchResultReducer from './redux/SearchResultsSlice';

export default configureStore({
  reducer: {
    collectionList: collectionListReducer,
    currentCollectionInfo: currentCollectionInfoReducer,
    searchResults: searchResultReducer,
  },
});
