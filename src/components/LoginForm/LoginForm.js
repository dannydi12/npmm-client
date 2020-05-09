import React from 'react';
import useSignUpForm from './CustomHooks';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

function LoginForm() {
  // const varName = useSelector((state) => state.specific.thing.i.want); // to get stuff from state
  // const dispatch = useDispatch(); // to dispatch actions
  // Will this work directly with Redux? or is there more I need to add?
  const signup = () => {
    alert(`User Created!
           Userame: ${inputs.username}
           Email: ${inputs.email}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);

  return (
    <div>
      <form id="login" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            required
            type="email"
            name="email"
            id="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
        </label>
        {!inputs.email ? (
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
        ) : (
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
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
