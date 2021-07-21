import React,{useReducer,useCallback,useEffect,useLayoutEffect} from 'react'
import {counterReducer} from '../store'

const init = initArg => {
  return initArg + 1
}
function HooksPage() {
  const [state, dispatch] = useReducer(counterReducer, 0, init)
  const add = useCallback(
    () => {
      dispatch({type:'ADD'})
    },
    [],
  )
  useEffect(() => {
    console.log('useEffect');
  }, [])
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  }, [])
  console.info("----")
  return (
    <div>
      <p>{state}</p>
      <button onClick={add}>add</button>
    </div>
  )
}

export default HooksPage
