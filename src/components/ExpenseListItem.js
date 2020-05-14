import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <p>Description: {description}</p>
        <p>Amount: {amount}</p>
        <p>Created At: {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);
