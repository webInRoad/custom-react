import React from 'react'

const Context = React.createContext()

export function Provider({children,store}) {
  return <Context.Provider value={store}>{children}</Context.Provider>
}

export function bindActionCreators(creators, dispatch) {
  let obj = {}
  for(let key in creators) {
    obj[key] = bindActionCreator(creators[key],dispatch)
  }
  return obj
}

function bindActionCreator(creator,dispatch) {
  return (...args) => dispatch(creator(...args))
}