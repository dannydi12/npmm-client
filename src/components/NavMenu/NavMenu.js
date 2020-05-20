import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link, useHistory } from 'react-router-dom';
import randomWords from 'random-words';
import NavCollections from '../NavCollections/NavCollections';
import TokenService from '../../services/token-service';
import { createCollection } from '../../redux/CollectionListSlice';
import plus from '../../images/plus.svg';
import './NavMenu.css';

function NavMenu() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector((state) => state.collectionList.loading);
  const isLoggedIn = TokenService.hasAuthToken();

  const setupCollection = () => {
    dispatch(createCollection(randomWords({ exactly: 2, join: '-' }))).then(
      (res) => {
        history.push(`/collection/${res.payload.id}?edit=true`);
      }
    );
  };

  return (
    <>
      <NavLink exact to="/" className="menuLink">
        Home
      </NavLink>
      {!isLoggedIn ? (
        <>
          <NavLink to="login" className="menuLink">
            Login
          </NavLink>
          <NavLink to="signup" className="menuLink">
            Signup
          </NavLink>
        </>
      ) : (
        <Link to="/" onClick={TokenService.clearAuthToken} className="menuLink">
          Logout
        </Link>
      )}
      {TokenService.hasAuthToken() && (
        <div className="collectionMenu">
          <h3 className="collectionLink">Collections</h3>
          <div className="collectionMenuList">
            <button
              type="button"
              onClick={setupCollection}
              className="createCollection"
            >
              <img
                src={plus}
                alt="add collection button"
                className="plusButton"
              />
              Create Collection
            </button>
            {loading === 'idle' && <NavCollections />}
          </div>
        </div>
      )}
    </>
  );
}

export default NavMenu;
