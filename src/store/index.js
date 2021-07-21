// import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createStore, applyMiddleware, combineReducers } from '../zredux'
// import thunk from "redux-thunk"
// import logger from 'redux-logger'

export const counterReducer = (state = 0, { type, payload = 1 }) => {
  switch (type) {
    case 'ADD':
      return state + payload
    case 'MINUS':
      return state - payload
    default:
      return state
  }
}

const homeReducer = (state = 0, { type, payload = 1 }) => {
  switch (type) {
    case 'ADD':
      return state + payload * 2
    case 'MINUS':
      return state - payload
    default:
      return state
  }
}
const store = createStore(combineReducers({ home: homeReducer, count: counterReducer }), applyMiddleware(thunk, logger, tPromise))
export default store

function logger({ getState }) {
  return next => {
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
    return action => {
      if (typeof action == 'function') {
        return action(dispatch, getState)
      }
      next(action)
    }
  }
}

function tPromise({ getState, dispatch }) {
  return next => {
    return action => {
      if (action instanceof Promise) {
        return action.then(dispatch)
      }
      next(action)
    }
  }
}

