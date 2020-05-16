import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavCollections from '../NavCollections/NavCollections';
import TokenService from '../../services/token-service';
// import styles from './example.css';

function NavMenu() {
  const loading = useSelector((state) => state.collectionList.loading);

  const isLoggedIn = TokenService.hasAuthToken();

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
      {loading === 'idle' && <NavCollections />}
      {/* In the future, will be conditionally rendered */}
    </aside>
  );
}

export default NavMenu;
