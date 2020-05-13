import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SearchBox from '../../components/SearchBox/SearchBox';
import NavBar from '../../components/NavBar/NavBar';
import { getCollections } from './CollectionListSlice';
import TokenService from '../../services/token-service';

function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      dispatch(getCollections());
    }
  }, []);

  return (
    <div>
      <h1 className="landingTitle">NPMM</h1>
      <h2 className="landingFullName">Node Package Manager Manager</h2>
      <SearchBox classProps="landingSearch" />
    </div>
  );
}

export default LandingPage;
