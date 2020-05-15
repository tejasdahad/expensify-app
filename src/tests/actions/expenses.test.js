import { addExpense, editExpense, removeExpense }  from '../../actions/expenses';

test('Removing expense', () => {
    const action = removeExpense({ id: '123ab' });
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123ab'
    });
});

test('Updating expenses', () => {
    const action = editExpense('123', { description: 'Rent' });
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123',
        updates: {
            description: 'Rent'
        }
    });
});

test('Adding expense by passing value',() => {
    const expenseData = {
        description: 'Rent',
        amount: 150,
        createdAt: 1000,
        note: 'Paid on time'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('Adding expense with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description:'',
            amount: 0,
            note: '',
            createdAt: 0,
            id: expect.any(String)
        }
    })
});