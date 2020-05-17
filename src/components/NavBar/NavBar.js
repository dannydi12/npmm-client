import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import SearchBox from '../SearchBox/SearchBox';
import npmmLogo from '../../images/npmm-logo.svg';
import blackMagGlass from '../../images/mag-glass-black.svg';
import whiteMagGlass from '../../images/mag-glass-white.svg';
import './NavBar.css';
import './Hamburger.css';

function NavBar() {
  const location = useLocation();
  const [showBurger, setShowBurger] = useState(false);
  const [animationClass, setAnimationClass] = useState('Hidden');
  const [toggleSearch, setToggleSearch] = useState(false);
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
        <div
          className={
            isNotHomePage ? 'navBarContainer' : 'navBarContainerLanding'
          }
        >
          {isNotHomePage && (
            <>
              {!toggleSearch && (
                <>
                  <button
                    type="button"
                    className="toggleSearch"
                    aria-label="searchToggle"
                    onClick={() => setToggleSearch(!toggleSearch)}
                  >
                    <img
                      src={blackMagGlass}
                      alt="magnifying glass for search button"
                      className="navSearchToggle"
                    />
                  </button>
                  <Link to="/" className="logoHome">
                    <img src={npmmLogo} alt="npmm logo" className="navLogo" />
                  </Link>
                </>
              )}
              {toggleSearch && (
                <SearchBox
                  classProps="navSearch"
                  searchFormClass="navSearchForm"
                  searchInputClass="navSearchInput"
                  searchButtonClass="navSearchButton"
                  searchButton={
                    <img
                      src={whiteMagGlass}
                      alt="magnifying glass search button"
                      className="searchButtonIcon"
                    />
                  }
                />
              )}
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
