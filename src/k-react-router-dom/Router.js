import React, { Component } from 'react'
import Context from './Context'
export default class Router extends Component {
  static computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location
    };
  }
  componentDidMount() {
    // 监听location变化
    this.unlisten = this.props.history.listen(location => {
      this.setState({location});
    });
  }
  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }
  render() {
    const {history,children} = this.props
    const {location} = this.state
    const defaultMatch = Router.computeRootMatch(location.pathname)
    return (
      <Context.Provider value={{history,location,match:defaultMatch}}>
        {children}
      </Context.Provider>
    )
  }
}
