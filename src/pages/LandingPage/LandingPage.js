import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import ErrorBoundary from '../../ErrorBoundary';
import npmmLogo from '../../images/npmm-logo.svg';
import './LandingPage.css';

function LandingPage() {
  return (
    <ErrorBoundary>
      <div className="landingContainer">
        <h1 className="landingTitle">
          <img src={npmmLogo} alt="npmm logo" className="logoMain" />
        </h1>
        <SearchBox
          classProps="landingSearch"
          searchButton="Search"
          searchInputClass="landingSearchInput"
        />
        <section className="landingIntro">
          <h2 className="landingFullName">
            Managing <span className="underline">the</span> Manager
          </h2>
          <p className="description">
            Node Package Manager Manager (npmm) is an app designed to help you
            manage your favorite npm packages
          </p>
        </section>
        <section className="landingGettingStarted">
          <h2 className="landingFullName">Getting Started</h2>
          <p className="description">Install our CLI tool</p>
          <div className="codeContainer">
            <code>npm i @npmmjs/npmm</code>
          </div>
          <p className="description">
            From there either navigate the site or use the CLI to find,
            favorite, and collect your most used packages from npm
          </p>
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default LandingPage;
