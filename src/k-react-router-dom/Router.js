import React, { Component } from 'react'

export default class Router extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
