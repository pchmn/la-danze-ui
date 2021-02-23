import React from 'react';
import ReactDOM from 'react-dom';
import { FormsExample } from './FormsExample';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormsExample />, div);
  ReactDOM.unmountComponentAtNode(div);
});
