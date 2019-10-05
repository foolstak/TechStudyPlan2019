import React from 'react';
import ReactDOM from 'react-dom';
import TaskSet from './TaskSet';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskSet />, div);
  ReactDOM.unmountComponentAtNode(div);
});