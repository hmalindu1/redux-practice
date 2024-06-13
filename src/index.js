import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators
} from "redux";

const makeLouderc = string => string.toUpperCase();
const repeatThreeTimes = string => string.repeat(3);
const embolden = string => string.bold();

// const makeLoduderRepeatThreeTimesAndEmbolden = string => 
  // embolden(repeatThreeTimes(makeLouderc(string)));


/*
const makeLoduderRepeatThreeTimesAndEmbolden = compose(
  embolden,
  repeatThreeTimes,
  makeLouderc
);


console.log(makeLoduderRepeatThreeTimesAndEmbolden("hello"));
*/

const initialState = {
  value: 0
}

const reducer = (state, action) => {
  return state
}