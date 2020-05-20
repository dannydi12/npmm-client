import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import ErrorBoundary from '../../ErrorBoundary';
import './LoginPage.css';

function LoginPage() {
  return (
    <ErrorBoundary>
      <div className="login-container">
        <h2 className="pageTitle">Login</h2>
        <p className="pageInstructions">
          Enter your email and password or log in using the demo credentials
        </p>
        <p className="pageInstructions">
          Demo: <br /> demo@demo.com / P4ssword
        </p>
        <LoginForm />
      </div>
    </ErrorBoundary>
  );
}

export default LoginPage;
