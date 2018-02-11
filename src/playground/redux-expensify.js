import  { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Add_Expense
 const AddExpense = (
    { description='' ,
    note='' ,
    amount=0, 
    createdAt=0
} = {}
) => ({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//Edit_Expense
 const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});
//Remove_Expense
 const removeExpense = ({id} = {}) => ({
    type:'REMOVE_EXPENSE',
    id   
});
//Set_Text_Filter
 const setTextFilter = (text = '') => ({
    type:'SET_TEXT_FILTER',
    text
});
//Sort_By_Date
 const sortByDate = () => ({
    type:'SORT_BY_DATE',
    sortBy:'Date'
});
//Sort_By_Amount
 const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT',
    sortBy:'Amount'
});
//Set_Start_Date
 const setStartDate = ( startDate = undefined ) => ({
    type:'SET_START_DATE',
    startDate
});
//Set_End_Date
 const setEndDate = ( endDate = undefined ) => ({
    type:'SET_END_DATE',
    endDate
});
const ExpensesReducerDefaultState = [];

//Expense reducer
const expensesReducer = (state = ExpensesReducerDefaultState, action) => {
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
//diff between arr.push and arr.concat
//arr.push changes the original array but arr.concat only adds the object to the arr, the org array is not changed, hence we use arr.concat as we do not want to change the state object
//other alternative to arr.concat is to use spread operator
//[...names,'Mike']   -> Mike is concatenated tot he names array, but the names array itself is not changed

//Filter Reducer
const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text:action.text };
        case 'SORT_BY_DATE':
            return { ...state, sortBy:action.sortBy };
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy:action.sortBy };
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate };
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate };
        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        //const textMatch = text;

        //figure out if expenses.description as the text variable string inside of it
        //use includes method and convert both to lower case
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if( sortBy === 'Date')
            return a.createdAt <= b.createdAt ? 1 :-1;
        if(sortBy === 'Amount')
            return a.amount <= b.amount ? 1: -1;
    });
};

const store =  createStore(
    combineReducers({
        expenses:expensesReducer,
        filter:filtersReducer
    })
);
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(AddExpense({ description:'Rent', amount:30000, createdAt: 1000 }));
const expenseThree = store.dispatch(AddExpense({ description:'Rent2', amount:25000, createdAt: 5000 }));

const expenseTwo = store.dispatch(AddExpense({ description:'Coffee', amount:50, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount:80}));
// //console.log(expenseOne.expense.id);
// //console.log(expenseOne);
 store.dispatch(setTextFilter('re'));
// store.dispatch(setTextFilter(''));

 store.dispatch(sortByAmount());
 store.dispatch(sortByDate());

//  store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
//  store.dispatch(setEndDate(1250));

const demoState = {
    expenses:[{
        id:'dfwf',
        description:'January rent',
        note: 'This was final payment',
        amount: 20000,
        createdAt:0
    }],

    filters:{
        text:'rent',
        sortBy:'amount', //date or amount
        startDate:undefined,
        endDate:undefined
    }
};

const user = {
    name:'Abhishek',
    age:25
};

console.log({ 
    ...user,
    location:"Mumbai",
    age:24
});
//in order to override an existing property, property must be specified after the object spread operator, if that property is specified then it will not get overridden
