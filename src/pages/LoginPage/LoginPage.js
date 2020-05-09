import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// es-lint-disable-next-line
import LoginForm from '../../components/LoginForm/LoginForm';
// import {all the reducers/actions} from './sliceFile.js';
import './LoginPage.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

function LoginPage() {
  // const varName = useSelector((state) => state.specific.thing.i.want); // to get stuff from state
  // const dispatch = useDispatch(); // to dispatch actions

  return (
    <div className="login-container">
      <LoginForm />
    </div>
  );
}

export default LoginPage;
