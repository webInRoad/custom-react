import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { connect } from '../zReactRedux'
// import { bindActionCreators } from 'redux'
import { bindActionCreators } from '../zReactRedux'

@connect(
  ({ home, count }) => ({ home, count }),
  // {
  //   add:() => ({type:'ADD'}),
  //   minus:() => ({type:'MINUS'}),
  // }
  dispatch => {
    // const add = () => dispatch({ type: 'ADD' });
    // const minus = () => dispatch({ type: 'MINUS' })
    // return {
    //   dispatch,
    //   add,
    //   minus
    // }
    let creators = {
      add: () => ({ type: "ADD" }),
      minus: () => ({ type: "MINUS" })
    }
    creators = bindActionCreators(creators, dispatch) // 写法简单了点
    return { dispatch, ...creators }
  }
)
class ReduxPage extends Component {

  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(() => {
  //     this.forceUpdate()
  //   })
  // }
  // componentWillUnmount() {
  //   if (this.unsubscribe) {
  //     this.unsubscribe()
  //   }
  // }
  promiseMinus = () => {
    this.props.dispatch(Promise.resolve({ type: "MINUS", payload: 2 }));
  };

  add = () => {
    // store.dispatch({ type: 'ADD', payload: 2 })

    this.props.dispatch(function (dispatch) {
      console.info(1)
      setTimeout(() => {
        dispatch({ type: 'ADD', payload: 2 })
      }, 1000)
    })
  }
  render() {
    console.info(this.props, "this.props")
    const { home, count, add } = this.props;
    return (
      <div className="border">
        <h3>ReduxPage</h3>
        {home}
        {count}
        {/* {store.getState().home} */}
        {/* {store.getState().count} */}
        <button onClick={add}>add</button>
        <button onClick={this.promiseMinus}>promiseMinus</button>
      </div>
    )
  }

};
export default ReduxPage