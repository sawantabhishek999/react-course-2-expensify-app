import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList =(props) => (
    <div>
        <h1>Expense List</h1>

        {
            props.expenses.length === 0 ? (  
                <p>No expenses</p>
            ):(
                props.expenses.map((expense, index) => {  
                return <ExpenseListItem key={expense.id} {...expense}/>;
                })
            )
        }
    </div>
);

const mapStatesToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    };
};

export default connect(mapStatesToProps)(ExpenseList); 
//export default ConnectedExpenseList;

// {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
                   
//             {   
//                 props.options.map((option, index) => 
//                 (
//                     <Option key={option}
//                              optionText={option}
//                              count={index + 1}
//                              handleDeleteOption={props.handleDeleteOption}
//                              />
//                 ))
//             }