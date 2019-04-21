import React from 'react';
import ReactDOM from 'react-dom';
import Headlines from './Headlines';

describe('<Headlines />', () => {
  it('Should  render and unmount without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Headlines />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
