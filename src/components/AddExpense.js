import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense} from '../actions/expenses'


export class AddExpensePage extends React.Component{
    onSubmit = (expense) =>{
        this.props.onSubmit(expense);   
        this.props.history.push('/'); //page chnge using browserrouter
    };
    render() {
        return (
            <div>
                <h2>Add Expense</h2>
                <ExpenseForm 
                onSubmit={this.onSubmit}/>
            </div>
        );
    }
}


// const AddExpensePage = (props) => (
//     <div>
//         <h2>Add Expense</h2>
//         <ExpenseForm 
//         onSubmit={this.onSubmit}/>
//     </div>
// );

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) =>  dispatch(addExpense(expense))
});


export default connect(undefined, mapDispatchToProps)(AddExpensePage);