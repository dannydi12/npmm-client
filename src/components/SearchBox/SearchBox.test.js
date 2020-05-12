import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({ push: jest.fn() })
}));

test('renders SearchBox without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
