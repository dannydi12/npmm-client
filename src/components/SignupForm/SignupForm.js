import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Spinner from 'react-spinkit';
import AuthService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import { getCollections } from '../../redux/CollectionListSlice';

export default function SignupForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordOne = () => {
    setShowPasswordOne(!showPasswordOne);
  };

  const togglePasswordTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    AuthService.postUser({
      email: data.email,
      password: data.password,
    })
      .then((res) => TokenService.saveAuthToken(res.authToken))
      .then(() => {
        dispatch(getCollections());
        history.push('/?onBoarding=true');
      })
      .catch(setIsLoading(false));
  };

  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  return (
    <form className="signupForm" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        name="email"
        autoComplete="off"
        ref={register({
          required: true,
          minLength: {
            value: 5,
            message: 'An email is usually longer than that.',
          },
          maxLength: {
            value: 40,
            message: `An email usually isn't that long.`,
          },
          pattern: {
            value: /^\S+@\S+$/i,
            message: `That doesn't seem to be a valid email.`,
          },
        })}
      />
      {errors.email && (
        <p className="validationWarning">{errors.email.message}</p>
      )}
      <div className="passwordContainer">
        <input
          type={showPasswordOne ? 'text' : 'password'}
          placeholder="Password"
          autoComplete="off"
          name="password"
          ref={register({
            required: 'Please enter your password',
            minLength: {
              value: 8,
              message: 'Password must be at least eight characters long',
            },
            maxLength: {
              value: 40,
              message: 'Password cannot be longer than forty characters',
            },
          })}
        />
        <button
          type="button"
          className={showPasswordOne ? 'showPassword' : 'hidePassword'}
          aria-label="show password"
          onClick={togglePasswordOne}
        />
      </div>
      {errors.password && (
        <p className="validationWarning">{errors.password.message}</p>
      )}
      <div className="passwordContainer">
        <input
          type={showPasswordTwo ? 'text' : 'password'}
          placeholder="Confirm password"
          autoComplete="off"
          name="confirmPassword"
          ref={register({
            required: true,
            minLength: {
              value: 8,
              message: 'Password must be at least eight characters long.',
            },
            maxLength: {
              value: 40,
              message: 'Password cannot be longer than forty characters.',
            },
            validate: (value) =>
              value === password.current || 'The passwords do not match',
          })}
        />
        <button
          type="button"
          className={showPasswordTwo ? 'showPassword' : 'hidePassword'}
          aria-label="show password"
          onClick={togglePasswordTwo}
        />
      </div>
      {errors.confirmPassword && (
        <p className="validationWarning">{errors.confirmPassword.message}</p>
      )}
      <button className="signupSubmit buttonSubmit" type="submit">
        {isLoading ? (
          <Spinner
            fadeIn="none"
            name="folding-cube"
            color="white"
            className="signupSpinner"
          />
        ) : (
          'Sign up'
        )}
      </button>
    </form>
  );
}
