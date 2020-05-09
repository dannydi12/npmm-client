import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import TokenService from '../../services/token-service';

// eslint-disable-next-line
export default function PrivateRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      // eslint-disable-next-line
      {...props}
      render={
        (componentProps) =>
          TokenService.hasAuthToken() ? (
            // eslint-disable-next-line
            <Component {...componentProps} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: componentProps.location },
              }}
            />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
}
