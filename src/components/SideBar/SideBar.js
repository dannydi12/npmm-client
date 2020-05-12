import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import NavCollections from '../NavCollections/NavCollections';
// import TokenService from '../../services/token-service'
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

function SideBar() {
  const loading = useSelector((state) => state.collectionList.loading);
  return <aside>{loading === 'idle' && <NavCollections />}</aside>;
}

export default SideBar;
