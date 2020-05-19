import { startAddExpense, addExpense, editExpense, removeExpense }  from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is nice',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
        expense:{    
            id: expect.any(String),
            ...expenseData
        }});

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
        expense:{    
            id: expect.any(String),
            ...expenseData
        }});

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

/*
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
});*/