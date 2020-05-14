import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Expenses Action Generator
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// Filter Action Generator
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

const setStartDate = (start) => ({
    type: 'SET_START_DATE',
    start
});

const setEndDate = (end) => ({
    type: 'SET_END_DATE',
    end
})

// Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if( sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}


// Expense Reducer
const expensesReducerDefault = [];

const expensesReducer = (state = expensesReducerDefault, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return  state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else{
                    return expense;
                }
            });
        default:
            return state;
    }
}

const filtersReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefault, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.start
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.end
            };
        default:
            return state;
    }
}

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