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

  const passwordRegEx = new RegExp('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$');

  const onSubmit = (data) => {
    setIsLoading(true);
    AuthService.postUser({
      email: data.email,
      password: data.password,
    })
      .then((res) => TokenService.saveAuthToken(res.authToken))
      .then(() => {
        dispatch(getCollections());
<<<<<<< HEAD
        history.push('/?onBoarding=true');
      });
=======
        history.push('/');
      })
      .catch(setIsLoading(false));
>>>>>>> f005e072c9388f0ac1e42354e2e5b2201b603e80
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
        // autoComplete="email"
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
      <div className="passwordContainer">
        <input
          type={showPasswordOne ? 'text' : 'password'}
          placeholder="Password"
          autoComplete="off"
          // autoComplete="new-password"
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
          // autoComplete="new-password"
          name="confirmPassword"
          ref={register({
            required: true,
            minLength: 8,
            maxLength: 40,
            pattern: {
              value: passwordRegEx,
              message:
                'Password must be a minimum eight characters, at least one letter and one number.',
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
      <button className="signupSubmit" type="submit">
        {isLoading ? (
          <Spinner fadeIn="none" name="folding-cube" color="white" />
        ) : (
          'Login'
        )}
      </button>
    </form>
  );
}
