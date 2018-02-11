import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
     history = { push: jest.fn() };
     wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
})


test('should render AddExpensePage correctly', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
    //expect(wrapper).toMatchSnapshot();
});