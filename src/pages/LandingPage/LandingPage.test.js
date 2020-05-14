import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import LandingPage from './LandingPage';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({ push: jest.fn() }),
}));

test('renders LandingPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider>
      <LandingPage />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
