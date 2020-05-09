import React from 'react';
import useSignUpForm from './CustomHooks';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

function LoginForm() {
  // const varName = useSelector((state) => state.specific.thing.i.want); // to get stuff from state
  // const dispatch = useDispatch(); // to dispatch actions
  // TODO: Hookup to Redux
  // TODO: Create fake user
  // TODO: Check if email is in DB (when making actual api calls)
  //   For now just figure out a way to "check" the email before rendering other form elements
  //   Maybe check against a demo email account for now
  const signup = () => {
    if (inputs.username) {
      // eslint-disable-next-line
      alert(`User Created!
            Userame: ${inputs.username}
            Email: ${inputs.email}`);
    } else {
      // eslint-disable-next-line
      alert(`Signed in as: ${inputs.email}`);
    }
  };

  function emailExists(email) {
    return !email;
  }

  function renderSignup() {
    return (
      <>
        <label htmlFor="username">
          Username
          <input
            required
            type="text"
            name="username"
            id="username"
            value={inputs.username}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            required
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
            type="password"
            name="password2"
            id="password2"
            value={inputs.password2}
            onChange={handleInputChange}
          />
        </label>
      </>
    );
  }

  function renderLogin() {
    return (
      <label htmlFor="password">
        Password
        <input
          required
          type="password"
          name="password"
          id="password"
          value={inputs.password}
          onChange={handleInputChange}
        />
      </label>
    );
  }

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    [{ email: '' }, { username: '' }, { password: '' }, { password2: '' }],
    signup
  );

  return (
    <div>
      <form id="login" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            required
            type="text"
            name="email"
            id="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
        </label>
        {
          // eslint-disable-next-line no-nested-ternary
          emailExists(inputs.email)
            ? null
            : inputs.email === 'demo@demo.com'
            ? renderLogin()
            : renderSignup()
        }
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
