import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

test('renders Modal without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Modal
      buttonText="test"
      clickHandler={(e) => e.preventDefault()}
      message="test"
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
