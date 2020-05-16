import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './LandingPage.module.css';
import { ReactComponent as Logo } from '../../images/npmm-logo.svg';
import SearchBox from '../../components/SearchBox/SearchBox';
import NavBar from '../../components/NavBar/NavBar';
import { getCollections } from '../../redux/CollectionListSlice';
import TokenService from '../../services/token-service';
import ErrorBoundary from '../../ErrorBoundary';

function LandingPage() {
  return (
    <ErrorBoundary>
      <div className={styles.landingContainer}>
        <h1 className={styles.landingTitle}>
          <Logo className={styles.logoSVG} />
        </h1>
        <SearchBox classProps={styles.landingSearch} />
        <h2 className={styles.landingFullName}>
          Managing <span className={styles.underline}>the</span> Manager
        </h2>
        <p className={styles.description}>
          Node Package Manager Manager (npmm) is an app designed to help you
          manage your favorite npm packages
        </p>
      </div>
    </ErrorBoundary>
  );
}

export default LandingPage;
