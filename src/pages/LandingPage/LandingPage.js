import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../../components/SearchBox/SearchBox';
import NavBar from '../../components/NavBar/NavBar';

function LandingPage() {
  return (
    <div>
      <NavBar />
      <h1 className="landingTitle">NPMM</h1>
      <h2 className="landingFullName">Node Package Manager Manager</h2>
      <SearchBox classProps="landingSearch" />
    </div>
  );
}

export default LandingPage;
