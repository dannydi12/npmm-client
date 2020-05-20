import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import ErrorBoundary from '../../ErrorBoundary';
import './LoginPage.css';
import workstation from '../../images/workstation.svg';

function LoginPage() {
  return (
    <ErrorBoundary>
      <div className="login-container">
        <div className="titleContainer">
          <h2 className="pageTitle">Login</h2>
          <img
            src={workstation}
            alt="man at his workstation"
            className="workstationImage"
          />
        </div>
        <p className="pageInstructions">
          Enter your email and password or log in using the demo credentials
        </p>
        <p className="pageInstructions demoCredentials">
          <span className="defaultMedium">Demo User:</span> <br /> demo@demo.com
          / P4ssword
        </p>
        <LoginForm />
      </div>
    </ErrorBoundary>
  );
}

export default LoginPage;
