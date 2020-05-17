import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import styles from './LandingPage.module.css';
// import { ReactComponent as Logo } from '../../../public/images/npmm-logo.svg';
import SearchBox from '../../components/SearchBox/SearchBox';
import NavBar from '../../components/NavBar/NavBar';
import { getCollections } from '../../redux/CollectionListSlice';
import TokenService from '../../services/token-service';
import ErrorBoundary from '../../ErrorBoundary';
import './LandingPage.css';

function LandingPage() {
  return (
    <ErrorBoundary>
      <div className="landingContainer">
        <h1 className="landingTitle">
          <img
            src="/images/npmm-logo.svg"
            alt="npmm logo"
            className="logoMain"
          />
        </h1>
        <SearchBox classProps="landingSearch" />
        <h2 className="landingFullName">
          Managing <span className="underline">the</span> Manager
        </h2>
        <p className="description">
          Node Package Manager Manager (npmm) is an app designed to help you
          manage your favorite npm packages
        </p>
      </div>
    </ErrorBoundary>
  );
}

export default LandingPage;
