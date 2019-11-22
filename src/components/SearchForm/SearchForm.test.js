import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
    it('should match the snapshot', () => {
        const filterSearchMock = jest.fn()
        const wrapper = shallow(<SearchForm search={filterSearchMock} />)
        
        expect(wrapper).toMatchSnapshot();
    })

    it('should update state when search is inputted', () => {
        const filterSearchMock = jest.fn()
        const wrapper = shallow(<SearchForm search={filterSearchMock} />)

        const searchTime = {
            target: {
                value: 'spider-man'
            }
        }
        
        wrapper.instance().handleChange(searchTime);
        expect(wrapper.state('searchField')).toEqual(searchTime.target.value)
    })

    it('should update state when search is inputted', () => {
        const filterSearchMock = jest.fn()
        const wrapper = shallow(<SearchForm search={filterSearchMock} />)

        const searchTime = {
            target: {
                value: 'spider-man'
            }
        }
        
        wrapper.instance().handleChange(searchTime);
        expect(wrapper.state('searchField')).toEqual(searchTime.target.value)
    })
})