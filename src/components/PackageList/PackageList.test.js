import React from 'react';
import ReactDOM from 'react-dom';
import PackageList from './PackageList';

test('renders PackageList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PackageList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
