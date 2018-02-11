import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }
    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select  onChange={(e) => {
                    if(e.target.value === 'Date'){
                        //console.log('date');
                        this.props.dispatch(sortByDate());
                    }
                    else if(e.target.value === 'Amount'){
                        //console.log('amount');
                        this.props.dispatch(sortByAmount());
                    }
                    else{
                        console.log(e.target.value);
                    }
                }}>
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
        
                <DateRangePicker
                    startDate= {this.props.filters.startDate}
                    endDate= {this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filter
    };
};
export default connect(mapStateToProps)(ExpenseListFilters);