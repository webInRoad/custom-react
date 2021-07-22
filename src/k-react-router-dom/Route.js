import React, { Component } from 'react'
import Context from "./Context";
import matchPath from "./matchPath";
export default class Route extends Component {
  render() {
    return (
      <Context.Consumer>
        {
          context => {
            const {location,match} = context
            const {path,component:Component,...rest} = this.props
            const isMatch = path ? matchPath(location.pathname, this.props)
            : match;
            return (
              isMatch ? React.createElement(Component) : null
            )
          }
        }
      </Context.Consumer>
    )
  }
}
