const ExpensesReducerDefaultState = [];

//Expense reducer
export default (state = ExpensesReducerDefaultState, action) => {
    //console.log(action);
    switch(action.type) {
        case 'ADD_EXPENSE':
            //return state.concat(action.expense);
            return [ ...state, action.expense];  //spread operator
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => { return id !== action.id}) ; //filter also does not change the org array, it nly returns new array
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    //console.log(action.id + ', '+ action.updates);
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else{
                    //console.log(expense.id+' , '+action.id.id + ', '+ action.updates.amount);
                    return expense;
                }
            });
        default:
            return state;
    }
};

//export default expensesReducer;