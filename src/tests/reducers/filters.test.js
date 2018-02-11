import filtersReducers from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, {type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'Date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should set sort by to amount',() => {
    const state =  filtersReducers(undefined, { type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('Amount');
});

test('should set sort by to date',() => {
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'Amount'
    };
    const action = {type:'SORT_BY_DATE'}
    const state =  filtersReducers(currentState, action);
    expect(state.sortBy).toBe('Date');
});

test('should set text filter',() => {
    const text = 'This is my fillters';
    const action = {
        type:'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducers(undefined, action);
    expect(state.text).toBe(text);
});

test('should set startdate filter',() => {
    const startDate = moment(0);
    const action = {
        type:'SET_START_DATE',
        startDate
    }
    const state =  filtersReducers(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should set enddate filter',() => {
    const endDate = moment(0);
    const action = {
        type:'SET_END_DATE',
        endDate
    }
    const state =  filtersReducers(undefined, action);
    expect(state.endDate).toEqual(endDate);
});