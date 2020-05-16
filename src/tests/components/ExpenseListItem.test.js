import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with a expense', () => {
    const expense = {
        id: '1',
        description: 'rent',
        note: '',
        amount: 100,
        createdAt: 1000
    };
    const wrapper = shallow(<ExpenseListItem {...expense} />);
    expect(wrapper).toMatchSnapshot();
});