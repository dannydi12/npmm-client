import React from 'react';
import { useHistory } from 'react-router-dom';
import useSignUpForm from '../Utilities/CustomHooks';
import AuthService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import './LoginForm.css';

function LoginForm() {
  const history = useHistory();

  const login = () => {
    AuthService.postLogin({
      email: inputs.email,
      password: inputs.password,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
      })
      .then((res) => {
        history.push('/');
      });
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    { email: '', password: '' },
    login
  );

  function validateEmail(email) {
    if (!email) {
      return 'Please enter email';
    }
    if (email > 100) {
      return false;
    }
    return true;
  }

  function validatePassword(pass) {
    if (!pass) {
      return false;
    }
    if (pass > 100) {
      return false;
    }
    return true;
  }

  return (
    <div>
      <form id="login" onSubmit={handleSubmit}>
        {validateEmail(inputs.email) && <p>{validateEmail(inputs.email)}</p>}
        <label htmlFor="email">
          Email
          <input
            required
            autoComplete="username"
            type="email"
            name="email"
            id="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            required
            autoComplete="current-password"
            type="password"
            name="password"
            id="password"
            value={inputs.password}
            onChange={handleInputChange}
          />
        </label>
        <button
          disabled={
            !validateEmail(inputs.email) || !validatePassword(inputs.password)
          }
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
