import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('renders the title of the NewsArticle in <h2> tags', () => {
    const wrapper = shallow(<NewsArticle title="Bananas" />);
    const title = <h2>Bananas</h2>;

    expect(wrapper.contains(title)).toEqual(true);
  });
    
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsArticle
        title="Bananas"
        description="B A N A N A S"
        id={3}
        image="image"
        url="foster.com"
    />);

    expect(wrapper).toMatchSnapshot();
  });
});