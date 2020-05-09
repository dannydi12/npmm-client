import React from 'react';
import ReactDOM from 'react-dom';
import PackageCard from './PackageCard';

test('renders PackageCard without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PackageCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
