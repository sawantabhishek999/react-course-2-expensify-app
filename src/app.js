import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense} from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';  
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
//     console.log(visibleExpenses);
// });

store.dispatch(addExpense({ description:'Water Bill', amount:1000, createdAt: 204500000 }));
store.dispatch(addExpense({ description:'Gas Bill', amount:2000, createdAt: 100000000 }));
store.dispatch(addExpense({ description:'Rent', amount:5000, createdAt: 1095000000 }));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// },3000)
//console.log(store.getState());
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>{AppRouter}</Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));

