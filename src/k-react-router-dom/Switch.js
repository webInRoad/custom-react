import React, { Component } from 'react'
import Context from './Context'
import matchPath from "./matchPath";

export default class Switch extends Component {
  render() {
    return (
      <Context.Consumer>
        {
          context => {
            // match 是否匹配
            // element 如果匹配的话，返回这个元素
            let match, element;
            const {location} = context
            React.Children.forEach(this.props.children,child => {
              if(match == null && React.isValidElement(child)){
                element = child;
                const {path} = child.props;
                match = path ? matchPath(location.pathname, child.props) : context.match
              }
            })
            return match ? element : null
          }
        }
        
      </Context.Consumer>
    )
  }
}
