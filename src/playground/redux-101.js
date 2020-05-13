import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type:'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
}); 

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. They are pure functions i.e they depend only on the inputs and not anything outside the input.
// 2. Never change state or action.

const countReducer = (state = { count:0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

//To watch for any changes in store. This function will always get called when store changes.
store.subscribe(() => {
    console.log(store.getState());
});

// Increment
//store.dispatch({
//    type: 'INCREMENT',
//    incrementBy: 5
//});
store.dispatch(incrementCount({ incrementBy: 5 }));

// Decrement
//store.dispatch({
//    type: 'DECREMENT',
//    decrementBy: 2
//});
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 5}));

// Reset
//store.dispatch({
//    type:'RESET'
//});
store.dispatch(resetCount());

// Set
//store.dispatch({
//    type: 'SET',
//    count: 100
//});

store.dispatch(setCount({ count: 10 }));