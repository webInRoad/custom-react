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
            const {path,children,component,render} = this.props
            const isMatch = path ? matchPath(location.pathname, this.props)
            : match;
            const props = {
              ...context,
              match
            }
            console.info(props,"props")
            return (
              isMatch ? 
                children ? 
                  typeof children =="function" ? children(props) : children 
                : component ? React.createElement(component,props) 
                : render ? render(props) : null 
              : typeof children ==='function' ? children(props) : null          
            )
          }
        }
      </Context.Consumer>
    )
  }
}
