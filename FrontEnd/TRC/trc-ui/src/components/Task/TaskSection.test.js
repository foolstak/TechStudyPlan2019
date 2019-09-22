import React from 'react';
import ReactDOM from 'react-dom';
import TaskSection from './TaskSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});