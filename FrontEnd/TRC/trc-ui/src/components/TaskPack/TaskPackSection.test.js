import React from 'react';
import ReactDOM from 'react-dom';
import TaskPackSection from './TaskPackSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskPackSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});