import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import ErrorBoundary from '../../ErrorBoundary';
import './LoginPage.css';
import mrBuddy from '../../images/mr-buddy.svg';
import mrBuddyMessage from '../../images/mr-buddy-message.svg';

function LoginPage() {
  const [loginError, setLoginError] = useState(false);

  return (
    <ErrorBoundary>
      <div className="loginContainer">
        <div className="titleContainer">
          <h2 className="pageTitle">Login</h2>
          <img
            src={loginError ? mrBuddyMessage : mrBuddy}
            alt="mr buddy at his workstation"
            className="mrBuddy"
          />
        </div>
        <p className="pageInstructions">
          Enter your email and password or log in using the demo credentials
        </p>
        <p className="pageInstructions demoCredentials">
          <span className="defaultMedium">Demo User:</span> <br /> demo@demo.com
          / P4ssword
        </p>
        <LoginForm setLoginError={setLoginError} />
      </div>
    </ErrorBoundary>
  );
}

export default LoginPage;
