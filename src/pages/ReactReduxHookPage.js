import { useCallback } from 'react'
import { useSelector, useDispatch } from '../zReactRedux'
export default function ReactReduxHookPage() {
  const state = useSelector(({ count, home }) => ({ count, home }))
  const dispatch = useDispatch()
  const add = useCallback(() => {
    dispatch({ type: 'ADD' })
  }, [])
  return (
    <div>
      <h3>ReactReduxHookPage</h3>
      <p>{state.count}</p>
      <p>{state.home}</p>
      <button onClick={add}>add</button>
    </div>
  )
}