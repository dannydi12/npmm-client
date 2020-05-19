import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useSignUpForm from '../Utilities/CustomHooks';
import AuthService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import { getCollections } from '../../redux/CollectionListSlice';
import './SignupForm.css';

export default function SignupForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  const signup = () => {
    AuthService.postUser({
      email: inputs.email,
      password: inputs.password,
    })
      .then((res) => TokenService.saveAuthToken(res.authToken))
      .then((res) => {
        dispatch(getCollections());
        history.push('/');
      });
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    { email: '', password: '', password2: '' },
    signup
  );

  function validateEmail(email) {
    if (!email) {
      return 'Please enter your email';
    }
    if (email > 40) {
      return 'Is that a real email?';
    }
    return false;
  }

  function validatePassword(pass1, pass2) {
    if (!pass1) {
      return 'Please enter your password';
    }
    if (pass1 > 40) {
      return 'Password cannot be longer than 40 characters';
    }
    if (pass1 < 6) {
      return 'Password needs to be at least 6 characters long';
    }
    if (pass1 !== pass2) {
      return 'Passwords do not match';
    }
    return false;
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      {validateEmail(inputs.email) && <p>{validateEmail(inputs.email)}</p>}
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
      {validatePassword(inputs.password, inputs.password2) && (
        <p>{validatePassword(inputs.password, inputs.password2)}</p>
      )}
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
        className="signupSubmit"
        disabled={
          validateEmail(inputs.email) ||
          validatePassword(inputs.password, inputs.password2)
        }
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
