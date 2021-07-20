export default (...middles) => {
  return createStore => {
    return reducer => {
      const store = createStore(reducer)
      let dispatch = store.dispatch
      const mdiApi = {
        getState: store.getState,
        dispatch: (action, ...args) => dispatch(action, ...args)
      }
      const middlewareChain = middles.map(mid => mid(mdiApi))
      dispatch = compose(...middlewareChain)(store.dispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}

function compose(...funs) {
  if (funs.length === 0) {
    return arg => arg
  }
  if (funs.length === 1) {
    return funs[0]
  }
  return funs.reduce((a, b) => {
    return (...args) => { return a(b(...args)) }
  })
}