export default function createStore(reducer, enhense) {
  if (enhense) {
    return enhense(createStore)(reducer)
  }
  let currentState
  let curerntListeners = []

  function getState() {
    return currentState
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    curerntListeners.forEach(listener => listener())
  }

  function subscribe(callback) {
    curerntListeners.push(callback)
    return () => {
      curerntListeners = []
    }
  }
  dispatch({ type: 'zzz' })
  return {
    getState,
    dispatch,
    subscribe
  }
}