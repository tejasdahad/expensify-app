import { createStore, combineReducers } from 'redux';
import { addExpense, removeExpense, editExpense } from '../actions/expenses';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import getVisibleExpenses from '../selectors/expenses';


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount:100, createdAt: 1000 }));
const expense2 = store.dispatch(addExpense({ description: 'Coffee', amount:50, createdAt: 2000 }));
/*
store.dispatch(removeExpense({ id: expense1.expense.id }));
store.dispatch(editExpense(expense2.expense.id, { amount: 20 }));

store.dispatch(setTextFilter('Rent'));
store.dispatch(setTextFilter());
*/
store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setTextFilter('coffee'));
store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
store.dispatch(setEndDate(2001));
const demoState = {
    expenses: [{
        id: 'kbakffnaknf',
        description: 'Hostel Rent',
        note: 'This was the final payment for the year',
        amount: 65000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}