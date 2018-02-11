import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">Dashboard</NavLink>&nbsp;&nbsp;
        <NavLink to="/Create" activeClassName="is-active">Add Expense</NavLink>&nbsp;&nbsp;
        
    </header>
);

export default Header;
