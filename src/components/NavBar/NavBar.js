import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import SearchBox from '../SearchBox/SearchBox';
import npmmTitle from '../../images/npmm-title.svg';
import blackMagGlass from '../../images/mag-glass-black.svg';
import whiteMagGlass from '../../images/mag-glass-white.svg';
import './NavBar.css';
import './Hamburger.css';

function NavBar() {
  const location = useLocation();
  const [showBurger, setShowBurger] = useState(false);
  const [animationClass, setAnimationClass] = useState('Hidden');
  const [showSearch, setShowSearch] = useState(false);
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

  const unmountSearch = () => {
    setShowSearch(false);
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
              <>
                <button
                  type="button"
                  className="showSearch"
                  aria-label="searchToggle"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <img
                    src={blackMagGlass}
                    alt="magnifying glass for search button"
                    className="navSearchToggle"
                  />
                </button>
              </>
              <Link to="/" className="logoHome">
                <img src={npmmTitle} alt="npmm title" className="navTitle" />
              </Link>
              {showSearch && (
                <SearchBox
                  classProps="navSearch"
                  searchFormClass="navSearchForm"
                  searchInputClass="navSearchInput"
                  searchButtonClass="navSearchButton"
                  unmountSearch={unmountSearch}
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
        </div>
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
    </header>
  );
}

export default NavBar;
