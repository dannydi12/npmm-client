import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './NotFound';

test('renders NotFound without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});
