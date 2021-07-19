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
  add = () => {
    store.dispatch({ type: 'ADD', payload: 2 })
  }
  render() {
    return (
      <div className="border">
        <h3>ReduxPage</h3>
        {store.getState()}
        <button onClick={this.add}>add</button>
      </div>
    )
  }

};
