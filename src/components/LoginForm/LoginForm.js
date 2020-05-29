import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Spinner from 'react-spinkit';
import AuthService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import { getCollections } from '../../redux/CollectionListSlice';
import Checkmark from '../../images/checkmark-round-red.svg';

function LoginForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return window.removeEventListener('scroll', checkScrollTop);
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    // Scroll to top of page to see Mr Buddy after form submission
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    scrollTop();
    setIsLoading(true);
    AuthService.postLogin({
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
      })
      .then(() => {
        dispatch(getCollections());
        setShowSuccess(true);
        setTimeout(() => {
          history.push('/');
        }, 1200);
      })
      .catch(() => {
        props.setLoginError(true);
        setIsLoading(false);
      });
  };

  return (
    <>
      {showSuccess && (
        <div className="loginConfirmation">
          <h2 className="loginSuccess">Success!</h2>
          <img
            src={Checkmark}
            alt="checkmark"
            className="confirmationCheckmark"
          />
        </div>
      )}
      <form
        id="loginForm"
        className="loginForm"
        onSubmit={handleSubmit(onSubmit)}
      >
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
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            autoComplete="off"
            className="passwordInput"
            name="password"
            ref={register({
              required: 'Please enter your password.',
              minLength: {
                value: 8,
                message: 'Password must be at least eight characters long.',
              },
              maxLength: {
                value: 40,
                message: 'Password cannot be longer than forty characters.',
              },
            })}
          />
          <button
            type="button"
            className={showPassword ? 'showPassword' : 'hidePassword'}
            aria-label="show password"
            onClick={togglePassword}
          />
        </div>
        {errors.password && (
          <p className="validationWarning">{errors.password.message}</p>
        )}
        <button type="submit" className="loginSubmit buttonSubmit">
          {isLoading ? (
            <Spinner
              fadeIn="none"
              name="folding-cube"
              color="white"
              className="loginSpinner"
            />
          ) : (
            'Log in'
          )}
        </button>
      </form>
    </>
  );
}

LoginForm.propTypes = {
  setLoginError: PropTypes.func.isRequired,
};

export default LoginForm;
