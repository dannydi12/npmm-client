import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import NavCollections from '../NavCollections/NavCollections';
import TokenService from '../../services/token-service';
import { createCollection } from '../../redux/CollectionListSlice';
// import styles from './example.css';

function NavMenu() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector((state) => state.collectionList.loading);
  const isLoggedIn = TokenService.hasAuthToken();

  const setupCollection = () => {
    dispatch(createCollection('forms')).then((res) => {
      history.push(`/collection/${res.payload.id}?edit=true`);
    });
  };

  return (
    <aside className="navMenu">
      <NavLink to="/">Home</NavLink>
      {!isLoggedIn ? (
        <>
          <NavLink to="login">Login</NavLink>
          <NavLink to="signup">SignUp</NavLink>
        </>
      ) : (
        <NavLink to="/" onClick={TokenService.clearAuthToken}>
          Logout
        </NavLink>
      )}
      <h3>Collections</h3>
      <button type="button" onClick={setupCollection}>
        +
      </button>
      {loading === 'idle' && <NavCollections />}
      {/* In the future, will be conditionally rendered */}
    </aside>
  );
}

export default NavMenu;
