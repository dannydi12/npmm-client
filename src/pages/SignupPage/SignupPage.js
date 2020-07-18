import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../../components/SignupForm/SignupForm';
import ErrorBoundary from '../../ErrorBoundary';
import './SignupPage.css';

export default function SignupPage() {
  return (
    <ErrorBoundary>
      <div className="signupContainer">
        <h2 className="pageTitle">Sign Up</h2>
        <p className="pageInstructions">
          Enter an email and password to register.
        </p>
        <SignupForm />
      </div>
    </ErrorBoundary>
  );
}
