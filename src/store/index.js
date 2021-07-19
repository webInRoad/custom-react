// import { createStore, applyMiddleware } from 'redux'
import { createStore, applyMiddleware } from '../zredux'
// import thunk from "redux-thunk"
// import logger from 'redux-logger'

const counterReducer = (state = 0, { type, payload = 1 }) => {
  switch (type) {
    case 'ADD':
      return state + payload
    case 'MINUS':
      return state - payload
    default:
      return state
  }
}
const store = createStore(counterReducer, applyMiddleware(thunk, logger, tPromise))
export default store

function logger({ getState }) {
  return next => {
    console.info(next, "next1")
    return action => {
      console.log("====================================");
      console.log(action.type + "执行了！"); //sy-log
      console.log("prev state", getState()); //sy-log
      next(action)
      console.log("next state", getState()); //sy-log
      console.log("====================================");
    }
  }
}

function thunk({ getState, dispatch }) {
  return next => {
    console.info(next, "next2")
    return action => {
      if (typeof action == 'function') {
        return action(next, getState)
      }
      next(action)
    }
  }
}

function tPromise({ getState, dispatch }) {
  return next => {
    return action => {
      if (action instanceof Promise) {
        action.then(dispatch)
      }
      next(action)
    }
  }
}

