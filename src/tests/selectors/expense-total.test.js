import React from 'react';
import expenses from '../fixtures/expenses';
import getTotalExpenses from '../../selectors/expense-total';

test('should return 0', () => {
    const sum = getTotalExpenses();
    expect(sum).toBe(0);
});

test('should return correct value by passing single expense', () => {
    const sum = getTotalExpenses([expenses[0]]);
    expect(sum).toBe(200);
});

test('should return correct value by passing expenses', () => {
    const sum = getTotalExpenses(expenses);
    expect(sum).toBe(94700);
});

