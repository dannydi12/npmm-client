import React from 'react';
import { useHistory } from 'react-router-dom';
import useSignUpForm from '../Utilities/CustomHooks';
import AuthService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import './SignupForm.css';

export default function SignupForm() {
  const history = useHistory();

  const signup = () => {
    AuthService.postUser({
      email: inputs.email,
      password: inputs.password,
    })
      .then((res) => TokenService.saveAuthToken(res.authToken))
      .then((res) => {
        history.push('/');
      });
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    { email: '', password: '', password2: '' },
    signup
  );

  function validateEmail(email) {
    if (!email) {
      return false;
    }
    if (email > 100) {
      return false;
    }
    return true;
  }

  function validatePassword(pass, pass2) {
    if (!pass) {
      return false;
    }
    if (pass > 100) {
      return false;
    }
    if (pass !== pass2) {
      return false;
    }
    return true;
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email
        <input
          required
          autoComplete="new-email"
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
          autoComplete="new-password"
          type="password"
          name="password"
          id="password"
          value={inputs.password}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="password">
        Confirm Password
        <input
          required
          autoComplete="new-password"
          type="password"
          name="password2"
          id="password2"
          value={inputs.password2}
          onChange={handleInputChange}
        />
      </label>
      <button
        disabled={
          !validateEmail(inputs.email) ||
          !validatePassword(inputs.password, inputs.password2)
        }
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
