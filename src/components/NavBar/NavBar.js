import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import SearchBox from '../SearchBox/SearchBox';
import './NavBar.css';
import './Hamburger.css';

function NavBar() {
  const location = useLocation();
  const [showBurger, setShowBurger] = useState(false);
  const [animationClass, setAnimationClass] = useState('Hidden');
  const isNotHomePage = location.pathname !== '/';

  useEffect(() => {
    if (showBurger === true || animationClass === 'In') {
      setShowBurger(false);
      setAnimationClass('Out');
    }
  }, [location.pathname]);

  const toggleHamburger = () => {
    if (showBurger === false || animationClass === 'Hidden') {
      setShowBurger(true);
      setAnimationClass('In');
    } else {
      setAnimationClass('Out');
      setShowBurger(false);
      setTimeout(() => {
        setAnimationClass('Hidden');
      }, 1000);
    }
  };

  return (
    <header className="navBar" role="banner">
      <div className="menuContainer">
        <div className={`navMenu slideMenu${animationClass}`}>
          {animationClass !== 'Hidden' && <NavMenu />}
        </div>
        <div className="navBarContainer">
          {isNotHomePage && (
            <>
              <SearchBox classProps="navSearch" />
              <button type="button" className="toggleSearch" />
              <Link to="/" className="logoHome">
                <img
                  src="/assets/npmm-logo.svg"
                  alt="npmm logo"
                  className="navLogo"
                />
                <h1 className="navName">npmm</h1>
              </Link>
            </>
          )}
          <div className="hamburgerContainer">
            <div
              className={`burgerButton ${showBurger}Burger`}
              onClick={() => toggleHamburger()}
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
