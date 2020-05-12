import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavCollections from '../NavCollections/NavCollections';
// import styles from './example.css';

function NavMenu() {
  const loading = useSelector((state) => state.collectionList.loading);

  return (
    <aside className="navMenu">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/logout">Logout</NavLink>
      <NavLink to="/favourites">Favourites</NavLink>
      {loading === 'idle' && <NavCollections />}
      {/* In the future, will be conditionally rendered */}
    </aside>
  );
}

export default NavMenu;
