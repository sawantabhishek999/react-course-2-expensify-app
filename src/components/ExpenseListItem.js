//export a stateless functional component
//desc, amount, createdAt
import React from 'react';
//import { connect } from 'react-redux';
//import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

export const ExpenseListItem =  ({ id, description, amount, createdAt}) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>Description:{description}</h3>
    </Link>
    <p>Amount:{amount}</p>
    <p>CreatedAt:{createdAt}</p>
    
    </div>
);

// const mapStateToProps = (state) => {
//     return {
//         filters: state.filter
//     };
// };
//export default ExpenseListItem;