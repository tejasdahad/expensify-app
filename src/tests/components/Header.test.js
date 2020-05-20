import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
import { startLogout } from '../../actions/auth';

test('should render Header component', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});