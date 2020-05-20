import { configureStore } from '@reduxjs/toolkit';
import currentCollectionInfoReducer from './redux/CurrentCollectionInfoSlice';
import collectionListReducer from './redux/CollectionListSlice';
import searchResultReducer from './redux/SearchResultsSlice';
import packageInfoReducer from './redux/PackageInfoSlice';
import menuScrollReducer from './redux/MenuScrollSlice';

export default configureStore({
  reducer: {
    collectionList: collectionListReducer,
    currentCollectionInfo: currentCollectionInfoReducer,
    searchResults: searchResultReducer,
    packageInfo: packageInfoReducer,
    menuScroll: menuScrollReducer,
  },
});
