import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

export default function NavMenu() {
  // const varName = useSelector((state) => state.specific.thing.i.want); // to get stuff from state
  // const dispatch = useDispatch(); // to dispatch actions

  return (
    <div className="navMenu">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/logout">Logout</NavLink>
      <NavLink to="/collections">Collections</NavLink>
      <NavLink to="/favourites">Favourites</NavLink>
    </div>
  );
}
