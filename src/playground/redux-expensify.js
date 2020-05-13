import { createStore, combineReducers } from 'redux';

const expensesReducerDefault = [];

const expensesReducer = (state = expensesReducerDefault, action) => {
    switch(action.type){
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

console.log(store.getState());

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