import { connect } from 'react-redux'
export default connect(
  ({ count, home }) => { return ({ count, home })},
  (dispatch) => {
    const add = () => { dispatch({type:'ADD'}) };
    return {add,dispatch}
  })(
  function ReactReduxHookPage(props) {
    const {count,add} = props;
    return (
      <div>
        <h3>ReactReduxHookPage</h3>
        <p>{count}</p>
        <button onClick={add}>add</button>
      </div>
    )
  }
)