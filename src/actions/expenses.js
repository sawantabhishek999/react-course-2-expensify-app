import uuid from 'uuid';

//Add_Expense
export const addExpense = (
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
export const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});
//Remove_Expense
export const removeExpense = ({id} = {}) => ({
    type:'REMOVE_EXPENSE',
    id   
});