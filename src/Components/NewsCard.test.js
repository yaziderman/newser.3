import React from 'react';
import ReactDOM from 'react-dom';
import { shallow ,vmount } from 'enzyme';
import NewsCard from './NewsCard';

describe('<NewsCard />', () => {
  let props;
  let renderedNewsCard;
  const newsCard = () => {
    if (!renderedNewsCard) {
      renderedNewsCard = mount(
        <NewsCard {...props} />
      );
    }
    return renderedNewsCard;
  }

  beforeEach(() => {
    props = {
      newsItem: undefined
    };
    renderedNewsCard = undefined;
  });

  it('Should  render and unmount without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewsCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
