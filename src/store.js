import { configureStore } from '@reduxjs/toolkit';
import currentCollectionInfoReducer from './redux/CurrentCollectionInfoSlice';
import collectionListReducer from './redux/CollectionListSlice';
import searchResultReducer from './redux/SearchResultsSlice';
import packageInfoReducer from './redux/PackageInfoSlice';
import navMenuReducer from './redux/NavMenuSlice';

export default configureStore({
  reducer: {
    collectionList: collectionListReducer,
    currentCollectionInfo: currentCollectionInfoReducer,
    searchResults: searchResultReducer,
    packageInfo: packageInfoReducer,
    navMenu: navMenuReducer,
  },
});
