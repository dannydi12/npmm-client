import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from './ScrollToTop';

test('renders ScrollToTop without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScrollToTop />, div);
  ReactDOM.unmountComponentAtNode(div);
});
