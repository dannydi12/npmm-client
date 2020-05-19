import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import { getCollections } from '../../redux/CollectionListSlice';
import './LoginForm.css';

function LoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  // const login = () => {
  //   AuthService.postLogin({
  //     email: inputs.email,
  //     password: inputs.password,
  //   })
  //     .then((res) => {
  //       TokenService.saveAuthToken(res.authToken);
  //     })
  //     .then((res) => {
  //       dispatch(getCollections());
  //       history.push('/');
  //     });
  // };

  function validateEmail(email) {
    if (!email) {
      return 'Please enter your email';
    }
    if (email > 40) {
      return 'Is that a real email?';
    }
    return false;
  }

  function validatePassword(pass) {
    if (!pass) {
      return 'Please enter your password';
    }
    if (pass > 40) {
      return 'Password cannot be longer than 40 characters';
    }
    if (pass < 6) {
      return 'Password needs to be at least 6 characters long';
    }
    return false;
  }

  return <form>empty</form>;
}

export default LoginForm;
