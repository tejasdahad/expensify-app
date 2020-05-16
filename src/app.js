import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description:'Water bill', amount: 100, createdAt:1000 }));
store.dispatch(addExpense({ description:'Gas bill', amount: 200, createdAt:2000 }));
store.dispatch(addExpense({ description:'Rent', amount: 500, createdAt:500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));