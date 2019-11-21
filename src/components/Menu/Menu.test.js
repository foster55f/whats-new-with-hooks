import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import { isTSAnyKeyword } from '@babel/types';

describe('Menu', () => {

    it('should match the snapshot with all the data pulled in correctly', () => {
        const wrapper = shallow(<Menu selectNews='entertainment' />)
        expect(wrapper).toMatchSnapshot();
    });  
})


    // it('should call the filterClick prop method with className when clicked', () => {
    //     // Setup
    //     const mockEvent = { target: { value: 'Sweaters for pugs.'} };
    //     const filterClickMock = jest.fn();
    //     const wrapper = shallow(
    //       <Menu
    //         filterClick={mockEvent}
    //       />
    //     );
      
    //     // Execution
    //     wrapper.find('button').at(1).simulate('click');
      
    //     // Expectation
    //     expect(wrapper.state('target')).toEqual('className');
    //   });
