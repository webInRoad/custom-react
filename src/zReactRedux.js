import React,{useLayoutEffect,useContext,useReducer} from 'react'

const Context = React.createContext()

export const connect = (mapStateToProps,mapDispatchToProps) => WrappedComponent => props => {

  const store = useContext(Context)
  const {getState,dispatch,subscribe} = store
  const stateProps = mapStateToProps(getState())
  let dispatchProps = {dispatch}

  if(typeof mapDispatchToProps === 'function') {
    dispatchProps = mapDispatchToProps(dispatch)
  } else if(typeof mapDispatchToProps === 'object') {
    dispatchProps = bindActionCreators(mapDispatchToProps,dispatch)
  }
  const [, forceUpdate] = useReducer(x => x+1, 0)
  const unsubscribe = useLayoutEffect(() => {
    subscribe(()=> {
      forceUpdate()
    })
    return () => {
      if(unsubscribe) {
        unsubscribe()
      }
    }
  }, [])
  return <WrappedComponent {...props} {...stateProps} {...dispatchProps}/>
}

export function Provider({children,store}) {
  return <Context.Provider value={store}>{children}</Context.Provider>
}

export function useSelector(selector) {
  const store = useContext(Context)
  const {getState,subscribe} = store
  const [,forceUpdate] = useReducer(x => x+1,0)
  const unsubscribe = useLayoutEffect(() => {
    subscribe(() => {
      forceUpdate()
    })
    return () => {
      if(unsubscribe) {
        unsubscribe()
      }
    }
  }, [])
  return selector(getState())
}

export function useDispatch() {
  const store = useContext(Context)
  const {dispatch} = store
  return dispatch
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