import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import AuthService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import { getCollections } from '../../redux/CollectionListSlice';
import './LoginForm.css';

function LoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    AuthService.postLogin({
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
      })
      .then((res) => {
        dispatch(getCollections());
        history.push('/');
      });
  };

  return (
    <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        name="email"
        autoComplete="email"
        ref={register({
          required: true,
          minLength: {
            value: 9,
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
      <input
        type="password"
        placeholder="Password"
        autoComplete="new-password"
        name="password"
        ref={register({
          required: 'Please enter your password',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
          },
          maxLength: {
            value: 40,
            message: 'Password cannot be longer than 40 characters',
          },
        })}
      />
      {errors.password && (
        <p className="validationWarning">{errors.password.message}</p>
      )}
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
