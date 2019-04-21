import React from 'react';
import ReactDOM from 'react-dom';
import News from './News';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';


describe('<News />', () => {
  it('Should  render and unmount without crashing', () => {
    const renderer = new ShallowRenderer();
    const div = document.createElement('div');
    renderer.render(<News
        required={true}
        match={{params: {slug: "business"}, isExact: true, path: "", url: ""}}
      />, div);
    ReactDOM.unmountComponentAtNode(div);

    });
});
