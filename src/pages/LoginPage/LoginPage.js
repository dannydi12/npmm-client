import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// es-lint-disable-next-line
import LoginForm from '../../components/LoginForm/LoginForm';
import ErrorBoundary from '../../ErrorBoundary';
// import {all the reducers/actions} from './sliceFile.js';
import './LoginPage.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

function LoginPage() {
  // const varName = useSelector((state) => state.specific.thing.i.want); // to get stuff from state
  // const dispatch = useDispatch(); // to dispatch actions

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
