import React from 'components/MenuList/node_modules/react';
import { useSelector, useDispatch } from 'components/MenuList/node_modules/react-redux';
import { Link } from 'components/MenuList/node_modules/react-router-dom';
/ import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

function MenuList() {
  // const varName = useSelector((state) => state.specific.thing.i.want); // to get stuff from state
  // const dispatch = useDispatch(); // to dispatch actions

  return ( 
    <Link to="/">Home</Link>
    <Link to="/logout">Logout</Link>
    <Link to="/collections">Collections</Link>
    <Link to="/favourites">Favourites</Link>
   );
}