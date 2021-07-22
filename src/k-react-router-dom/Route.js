import React, { Component } from 'react'
import Context from "./Context";
export default class Route extends Component {
  render() {
    return (
      <Context.Consumer>
        {
          context => {
            const {location} = context
            const {path,component:Component,...rest} = this.props
            return (
              location.pathname === path ? React.createElement(Component) : null
            )
          }
        }
      </Context.Consumer>
    )
  }
}
