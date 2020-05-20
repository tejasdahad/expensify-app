import { shallow } from 'enzyme';
import React from 'react';
import {LoginPage} from '../../components/LoginPage';
import { startLogin } from '../../actions/auth';

test('should test LoginPage works correctly', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})