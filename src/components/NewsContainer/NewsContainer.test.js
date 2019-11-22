import React from 'react';
import { shallow } from 'enzyme';
import local from '../../data/local';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {    
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsContainer data={local}/>)

    expect(wrapper).toMatchSnapshot();
  });
});