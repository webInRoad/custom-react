import React, { Component } from 'react'

export default class Link extends Component {
  render() {
    const {to,children} = this.props
    return (
      <div>
        <a href={to}>{children}</a>
      </div>
    )
  }
}
