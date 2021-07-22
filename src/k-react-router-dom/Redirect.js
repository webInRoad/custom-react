import React, { Component } from 'react'
import Context from './Context'
import LifeCycle from './LifeCycle'
export default class Redirect extends Component {
  render() {
    return (
      <Context.Consumer>
        {
          context => {
            const {history, push= false} = context
            const {to} = this.props
            return (
            <LifeCycle onMount={() => { push ? history.push(to) : history.replace(to);}} />)
          }
        }
      </Context.Consumer>
    )
  }
}
