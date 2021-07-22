import React, { Component } from 'react'

export default class Route extends Component {
  render() {
    const {path,component:Component,...rest} = this.props
    return (
      <div>
        {
          window.location.pathname === path ? React.createElement(Component) : null
        }
      </div>
    )
  }
}
