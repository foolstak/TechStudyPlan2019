import React from 'react';
import ReactDOM from 'react-dom';
import TaskPack from './TaskPack';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskPack />, div);
  ReactDOM.unmountComponentAtNode(div);
});