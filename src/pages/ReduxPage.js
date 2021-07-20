import React, { Component } from 'react'
import store from '../store'
export default class ReduxPage extends Component {

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }
  promiseMinus = () => {
    store.dispatch(Promise.resolve({ type: "MINUS", payload: 2 }));
  };

  add = () => {
    // store.dispatch({ type: 'ADD', payload: 2 })

    store.dispatch(function (dispatch) {
      console.info(1)
      setTimeout(() => {
        dispatch({ type: 'ADD', payload: 2 })
      }, 1000)
    })
  }
  render() {
    return (
      <div className="border">
        <h3>ReduxPage</h3>
        {store.getState().home}
        {store.getState().count}
        <button onClick={this.add}>add</button>
        <button onClick={this.promiseMinus}>promiseMinus</button>
      </div>
    )
  }

};
