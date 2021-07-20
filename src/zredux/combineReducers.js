export default function combineReducers(reducers) {
  return function reducer(state = {}, action) {
    let nextState = {}
    for (let key in reducers) {
      nextState[key] = reducers[key](state[key], action)
    }
    return nextState
  }
}