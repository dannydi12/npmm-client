import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox';

test('renders SearchBox without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
