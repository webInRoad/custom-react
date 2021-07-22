import React, { Component } from 'react'
import Context from './Context'
export default class Link extends Component {

  static contextType = Context
  jump = (event) => {
    const {history} = this.context;
    event.preventDefault()
    history.push(this.props.to)
  }
  render() {
    const {to,children} = this.props
    return (
      <div>
        <a href={to} onClick={this.jump}>{children}</a>
      </div>
    )
  }
}
