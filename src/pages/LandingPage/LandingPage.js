import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SearchBox from '../../components/SearchBox/SearchBox';
import NavBar from '../../components/NavBar/NavBar';
import { getCollections } from '../../redux/CollectionListSlice';
import TokenService from '../../services/token-service';
import ErrorBoundary from '../../ErrorBoundary';

function LandingPage() {
  return (
    <ErrorBoundary>
      <div>
        <h1 className="landingTitle">NPMM</h1>
        <h2 className="landingFullName">Node Package Manager Manager</h2>
        <SearchBox classProps="landingSearch" />
      </div>
    </ErrorBoundary>
  );
}

export default LandingPage;
