import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import SearchBox from '../SearchBox/SearchBox';
import './NavBar.css';
import './Hamburger.css';

function NavBar(props) {
  const [showBurger, setShowBurger] = useState(false);
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
    <header className="navBar" role="banner">
      <div className="menuContainer">
        <div className={`navMenu fadeMenu${animationClass}`}>
          <NavMenu />
        </div>
        <div className="navBarContainer">
          <Link to="/" className="logoHome" onClick={() => hideHamburger()}>
            <img
              src="/assets/npmm-logo.svg"
              alt="npmm logo"
              className="navLogo"
            />
            <h1 className="navName">NPMM</h1>
          </Link>
          <SearchBox classProps="landingSearch" />
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
    </header>
  );
}

export default NavBar;
