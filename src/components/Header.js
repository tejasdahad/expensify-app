import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expenses</NavLink>
    </header>
);
export default Header;