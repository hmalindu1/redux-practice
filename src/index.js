// import {
//   createStore,
//   compose,
//   applyMiddleware,
//   bindActionCreators,
// } from "redux";
/*
const makeLouderc = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

const makeLoduderRepeatThreeTimesAndEmbolden = string =>
embolden(repeatThreeTimes(makeLouderc(string)));


const makeLoduderRepeatThreeTimesAndEmbolden = compose(
  embolden,
  repeatThreeTimes,
  makeLouderc
);


console.log(makeLoduderRepeatThreeTimesAndEmbolden("hello"));
*/

/****
 *
 * simplest reducer
 *
 */

/*
const initialState = {
  value: 0,
};

const incrementAction = {
  type: "INCREMENT",
};

const reducer = (state, action) => {
  return state;
};

const store = createStore(reducer);

console.log(store);
*/

/***
 * use of a constant for the action type
 *
 */

/*
const initialState = {
  value: 0,
};

const INCREMENT = "INCREMENT";

const incrementAction = {
  type: INCREMENT,
};

const reducer = (state, action) => {
  if (action.type === INCREMENT) {
    return {
      value: state.value + 1,
    };
  }

  return state;
};

const store = createStore(reducer);

console.log(store);
*/


/****
 * 
 * Practical implementation of a reducer, action creator and a dispatch
 * 
 */
/*
import { createStore } from "redux";

const initialState = {
  value: 0,
};

const INCREMENT = "INCREMENT";
const ADD = "ADD";

const incremenetAction = {
  type: INCREMENT,
};

const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      value: state.value + 1,
    };
  }
  if (action.type === ADD) {
    return {
      value: state.value + action.payload,
    };
  }
  return state;
};

const store = createStore(reducer);
console.log(store);

store.dispatch(increment());
console.log(store.dispatch(increment()));

console.log(store.getState());

console.log(store.dispatch(add(5)));
console.log(store.getState());
*/