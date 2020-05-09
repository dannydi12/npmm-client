import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouterDOM from 'react-router-dom';
import LandingPage from './LandingPage';

// Doesn't work but is shown as one method to get test to work
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
