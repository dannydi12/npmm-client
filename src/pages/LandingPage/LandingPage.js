import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Modal from '../../components/Modal/Modal';
import SearchBox from '../../components/SearchBox/SearchBox';
import ErrorBoundary from '../../ErrorBoundary';
import npmmLogo from '../../images/npmm-logo.svg';
import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  const location = useLocation();
  const { onBoarding } = queryString.parse(location.search);
  const [showModal, setShowModal] = useState(!!onBoarding);

  return (
    <ErrorBoundary>
      {showModal && (
        <Modal
          title="Welcome"
          message="You can do so many things."
          clickHandler={setShowModal}
          buttonText="Get Started"
        />
      )}
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
          <h2 className="landingSectionTitle">
            Managing <span className="underline">the</span> Manager
          </h2>
          <p className="description">
            Node Package Manager Manager (npmm) is an app and CLI combination
            designed to help you manage your favorite and most used npm
            packages.
          </p>
        </section>
        <section className="callToAction">
          <h2 className="landingSectionTitle">Steps to take</h2>
          <ul className="steps">
            <li>
              Click <Link to="/signup">here to create an account</Link>
            </li>
            <li>Search for packages</li>
            <li>Create a collection</li>
            <li>Install packages from collections with the CLI</li>
          </ul>
        </section>
        <section className="landingGettingStarted">
          <h2 className="landingSectionTitle">Getting Started</h2>
          <p className="description">Install our CLI tool</p>
          <div className="codeContainer">
            <code>$npm i @npmmjs/npmm</code>
          </div>
          <p className="description">
            Use the CLI to view packages, create collections based on existing
            projects, and install packages from your collections.
            <br />
            Use the app to find packages, add to favorites, or add to
            collections of useful or commonly used packages. However you want to
            organize it.
          </p>
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default LandingPage;
