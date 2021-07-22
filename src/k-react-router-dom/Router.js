import React, { Component } from 'react'
import Context from './Context'
export default class Router extends Component {
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
  render() {
    const {history,children} = this.props
    const {location} = this.state
    console.info(location,"location")
    return (
      <Context.Provider value={{history,location}}>
        {children}
      </Context.Provider>
    )
  }
}
