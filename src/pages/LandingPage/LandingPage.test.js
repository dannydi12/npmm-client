import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouterDOM from 'react-router-dom';
import LandingPage from './LandingPage';

jest.mock('react-router-dom', () => {
  const actual = ReactRouterDOM;
  return {
    ...actual,
    useHistory: () => ({ methods }),
  };
});

test('renders LandingPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
