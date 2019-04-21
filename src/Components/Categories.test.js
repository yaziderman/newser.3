import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './Categories';
import { BrowserRouter } from 'react-router-dom';

describe('<Categories />', () => {
  it('Should  render and unmount without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Categories /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});