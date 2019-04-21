import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import ShallowRenderer from 'react-test-renderer/shallow';


describe('<Home />', () => {
  it('Should render and unmount without crashing', () => {
    const renderer = new ShallowRenderer();
    const div = document.createElement('div');
    renderer.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
