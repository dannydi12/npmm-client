import React from 'react';
import './NotFound.css';
import banana from '../../images/404-banana.svg';

function NotFound() {
  return (
    <div>
      <div className="notFoundBanner">
        <h1 className="pageTitle">Page Not Found</h1>
        <p className="pageInstructions">
          We can’t find the page you’re looking for. Please check the url and
          try again.
        </p>
      </div>
      <div className="notFoundImageContainer">
        <img src={banana} alt="404 not found" className="notFoundImage" />
      </div>
    </div>
  );
}

export default NotFound;
