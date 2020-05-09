import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

function NavBar() {
  const [showBurger, setShowBurger] = useState(true);

  const [animationClass, setAnimationClass] = useState('Hidden');

  const hideHamburger = () => {
    setShowBurger(false);
    setAnimationClass('Hidden');
  };

  const toggleHamburger = () => {
    if (showBurger === false || animationClass === 'Hidden') {
      setShowBurger(true);
      setAnimationClass('Down');
    } else {
      setShowBurger(false);
      setAnimationClass('Up');
    }
  };

  return (
    <div className="menuContainer">
      <div className={`navMenu fadeMenu${animationClass}`}>
        <NavMenu />
      </div>
      <div className="navBarContainer">
        <NavLink to="/" className="logoHome" onClick={() => hideHamburger()}>
          <img
            src="/assets/npmm-logo.svg"
            alt="npmm logo"
            className="navLogo"
          />
          <h1 className="navName">NPMM</h1>
        </NavLink>
        <div className="hamburgerContainer">
          <div
            className={`burgerButton ${showBurger}Burger`}
            onClick={() => toggleHamburger()}
            onKeyDown={() => toggleHamburger()}
            role="menu"
            tabIndex={0}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
