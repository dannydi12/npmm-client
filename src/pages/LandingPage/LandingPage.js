import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import Modal from '../../components/Modal/Modal';
import SearchBox from '../../components/SearchBox/SearchBox';
import ErrorBoundary from '../../ErrorBoundary';
import npmmLogo from '../../images/npmm-logo.svg';
import Rocket from '../../images/rocket.svg';
import Checkmark from '../../images/checkmark-round.svg';
import './LandingPage.css';

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
          clickHandler={() => setShowModal(false)}
          handleExit={() => setShowModal(false)}
          buttonText="Get Started"
          imageClass="modalCheckmark"
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
          searchButtonClass="buttonSubmit"
        />
        <div className="landingInfoContainer">
          <section className="landingIntro">
            <h2 className="landingSectionTitle">
              Managing <span className="underline">the</span> Manager
            </h2>
            <p className="description">
              Node Package Manager Manager (npmm) is an app designed to help you
              keep track of your favorite npm packages. Using the npmm CLI
              package, you can seamlessly integrate npmm into your project’s
              workflow.
            </p>
          </section>
          <section className="actionSection">
            <img src={Rocket} alt="rocket man" className="rocketImage" />
            <h2 className="landingSectionActions">Getting Started</h2>
            <div className="actionContainer">
              <img
                src={Checkmark}
                alt="checkmark circle"
                className="checkmarkCircle"
              />
              <h3 className="actionTitle">Register</h3>
              <Link to="/signup" className="actionDescription">
                <span className="underline">Click here</span> to head over to
                the registration page to sign up for an account.
              </Link>
            </div>
            <div className="actionContainer">
              <img
                src={Checkmark}
                alt="checkmark circle"
                className="checkmarkCircle"
              />
              <h3 className="actionTitle">Create Collections</h3>
              <p className="actionDescription">
                Collections are a way to store and organize npm packages. Once
                logged in, you can add packages to favorites or create your own
                collection.
              </p>
            </div>
            <div className="actionContainer">
              <img
                src={Checkmark}
                alt="checkmark circle"
                className="checkmarkCircle"
              />
              <h3 className="actionTitle">Search for Packages</h3>
              <p className="actionDescription">
                Search for a package using the form at the top of this page. The
                entire npm database is at your fingertips.
              </p>
            </div>
            <div className="actionContainer">
              <img
                src={Checkmark}
                alt="checkmark circle"
                className="checkmarkCircle"
              />
              <h3 className="actionTitle">Install the Package</h3>
              <a
                href="https://www.npmjs.com/package/@npmmjs/npmm"
                target="_blank"
                rel="noopener noreferrer"
                className="actionDescription"
              >
                <span className="underline">Click here</span> to access the npmm
                CLI tool. Once installed, the package will allow you to navigate
                your existing collections and add packages to your project. Or
                save packages from an existing package.json as a new collection!
              </a>
              <div className="codeContainer">
                <code>$npm i @npmmjs/npmm</code>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default LandingPage;
