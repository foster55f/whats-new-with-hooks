import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('renders the title of the NewsArticle in <h2> tags', () => {
    const wrapper = shallow(<NewsArticle title="Bananas" />);
    const title = <h2>Bananas</h2>;

    expect(wrapper.contains(title)).toEqual(true);
  });
});