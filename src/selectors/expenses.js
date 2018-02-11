import moment from 'moment';


export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const startDateMatch =  startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        //const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'):true;
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