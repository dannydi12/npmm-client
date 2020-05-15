import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import ErrorBoundary from '../../ErrorBoundary';
import './SignupPage.css';

export default function SignupPage() {
  return (
    <ErrorBoundary>
      <div className="signup-container">
        <SignupForm />
      </div>
    </ErrorBoundary>
  );
}
