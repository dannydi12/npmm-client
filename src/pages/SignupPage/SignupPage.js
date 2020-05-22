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

        <p className="pageInstructions demoSignup">
          To demo the site without registering, head over to the{' '}
          <Link to="/login" className="defaultMedium linkBlack">
            login page.
          </Link>
        </p>
        <SignupForm />
      </div>
    </ErrorBoundary>
  );
}
