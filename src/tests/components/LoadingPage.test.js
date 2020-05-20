import { shallow } from 'enzyme';
import React from 'react';
import LoadingPage from '../../components/LoadingPage';

test('should take snapshot of loadingPage', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});