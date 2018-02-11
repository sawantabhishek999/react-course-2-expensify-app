import { createStore } from 'redux';


//action generators- funcs that return action objects
// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy:  typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});  //destructured version of the above method, destructuring payloa object and defaulting incrementBy to 1

const decrementCount = ({ decrementBy=1} = {}) => ({
    type:'DECREMENT',
    decrementBy
});

const setCount = ({ count = 50} = {}) => ({
    type:'SET',
    count
});

const resetCount = ({ count=5000} = { count:40}) => ({
    type:'RESET',
    count
});


//Reducer - they are passed to the createStore function, actual state changes happen here
//1. Reducers are pure functions. i.e. o/p directly depends on o/p, it is not depending on any entity outside the scope of the func
//2. never chnage the state or action directly.
const countReducer = (state= {count:0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1; //handled in acion generator func
            return {
                count:state.count+action.incrementBy
            };
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count:state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count:action.count
         };
         case 'SET':
            return {
                count:action.count
         };
        default:
            return state;
    }
    //return state;
} ;

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
//store.subscribe gets called automatically when the store changes
//store.subscribe has a return value , which can be used to unsubscribe
//store.getState has to be called manually to get the state value from the redux store, instead if we use store.subscribe it will be called automatically
//createStore() is called once with the default case statement while creating the redux store, store.dispatch() is used to call the createstore method, but action type is passed with it, hence used to modify the state


store.dispatch({
    type:'INCREMENT', 
    incrementBy: 5
}); //'type' is a mandatory property, but we can have other user-defined properties

store.dispatch(incrementCount({ incrementBy: 5}));

// store.dispatch({
//     type:'INCREMENT'
// });

store.dispatch(incrementCount()); //Created a method above and called in store.dispatch to avoid typos

//unsubscribe(); //calling the unsubscribe will stop the store from being monitored for state changes, hence will not execute the subscribe method for state changes

// store.dispatch({
//     type:'RESET'
// });

store.dispatch( resetCount());

store.dispatch({
    type:'DECREMENT',
    decrementBy:10
});

store.dispatch( decrementCount({ decrementBy:5}));

store.dispatch(decrementCount());
// store.dispatch({
//     type:'DECREMENT'
// }); //replaced by action generator call above

store.dispatch({
    type:'SET',
    count:101
});

store.dispatch( setCount({ count: 1001}));

store.dispatch( setCount());

store.dispatch( resetCount());

//console.log(store.getState());