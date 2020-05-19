import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import ErrorBoundary from '../../ErrorBoundary';
import './SignupPage.css';

export default function SignupPage() {
  return (
    <ErrorBoundary>
      <div className="signupContainer">
        <h2 className="signupHeading">Sign Up</h2>
        <p className="signupInstructions">
          Enter an email and password to register.
        </p>
        <SignupForm />
      </div>
    </ErrorBoundary>
  );
}
