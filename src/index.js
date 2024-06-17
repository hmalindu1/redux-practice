/*
const makeLouderc = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

// const makeLoduderRepeatThreeTimesAndEmbolden = string =>
// embolden(repeatThreeTimes(makeLouderc(string)));


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
import { createStore } from "redux";

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
import { createStore } from "redux";

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

/****
 *
 * Practical implementation of a subscriober
 *
 */

/*
import { createStore } from "redux";

const initialState = {
  value: 0,
};

const INCREMENT = "INCREMENT";
const ADD = "ADD";

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

const subscriber = () => console.log("From subscriber", store.getState());

store.subscribe(subscriber);

store.dispatch(increment());
store.dispatch(add(5));
*/

/***
 * Usage of bindActionCreator
 */
/*
import { createStore, bindActionCreators } from "redux";

const initialState = {
  value: 0,
};

const INCREMENT = "INCREMENT";
const ADD = "ADD";

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

const bulkActions = bindActionCreators({ increment, add }, store.dispatch);


const subscriber = () => console.log("From subscriber", store.getState());

store.subscribe(subscriber);

bulkActions.increment();
bulkActions.add(5);
*/

/**
 *
 * useage of compose
 */
/*
import { createStore, bindActionCreators, compose } from "redux";

const initialState = {
  value: 0,
};

const INCREMENT = "INCREMENT";
const ADD = "ADD";

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

const [dispatchIncrement , dispatchAdd] = [increment, add].map((fn) => compose(store.dispatch, fn))


const subscriber = () => console.log("From subscriber", store.getState());

store.subscribe(subscriber);

dispatchIncrement();
dispatchAdd(5);
*/

/**
 * usage of combine reducer
 *
 */
/*
import { createStore, combineReducers } from "redux";

const initialState = {
  users: [
    {
      id: 1,
      name: "Rambo",
    },
    {
      id: 2,
      name: "John",
    },
  ],
  tasks: [{ title: "Get the reports" }, { title: "Order more Energy drinks" }],
};

const ADD_TASK = "ADD_TASK";
const ADD_USER = "ADD_USER";

const addTask = (title) => ({ type: ADD_TASK, payload: {title} });
const addUser = (name) => ({ type: ADD_USER, payload: {name} });

const taskReducer = (task = initialState.tasks, action) => {
  if (action.type === ADD_TASK) {
    return [...task, action.payload];
  }
  return task;
};

const userReducer = (user = initialState.users, action) => {
  if (action.type === ADD_USER) {
    return [...user, action.payload];
  }
  return user;
};


const reducer = combineReducers({
  tasks: taskReducer,
  users: userReducer,
});

const store = createStore(reducer);

const subscriber = () => console.log("From subscriber", store.getState());

store.subscribe(subscriber);

store.dispatch(addTask("Infiltrate the bunker"));
*/

/***
 * enhancer
 *
 */
/*
import { createStore } from "redux";

const reducer = (state) => state;

const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();
    const nextState = reducer(state, action);
    const end = performance.now();
    const diff = end - start;
    console.log("Action: ", action, " took ", diff, "ms to execute");
    return nextState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

const store = createStore(reducer, monitorEnhancer);

store.dispatch({ type: "Hello" });
*/

/***
 * Enhancer exercise
 *
 */
/*
import { compose, createStore } from "redux";

const reducer = (state) => state;

const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();
    const nextState = reducer(state, action);
    const end = performance.now();
    const diff = end - start;
    console.log("Action: ", action, " took ", diff, "ms to execute");
    return nextState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

console.log("monitorEnhancer : ",monitorEnhancer);
console.log("monitorEnhancer() : ",monitorEnhancer());

const logEnahancer = (createStore) => (reducer, initialState, enhancer) => {
  const logReducer = (state, action) => {
    console.log("Old State", state, "Triggered this Action", action);
    const newState = reducer(state, action);
    console.log("New State", newState, "Triggered this Action", action);
    return newState;
  };

  return createStore(logReducer, initialState, enhancer);
};

const store = createStore(reducer, compose(monitorEnhancer, logEnahancer));

store.dispatch({ type: "Hello" });
*/