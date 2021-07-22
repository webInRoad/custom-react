import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
// import { Redirect } from '../k-react-router-dom';
import { connect } from '../zReactRedux'
import {login} from "../action/user"
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
  }
  nameChange = event => {
    this.setState({name: event.target.value});
  };
  render() {
    const {isLogin,login,location,loading,err} = this.props;
    const {name} = this.state;
    const {redirect = "/user"} = location.state || {}
    console.info(isLogin,"isLogin")
    console.info(redirect,"redirect")
    if(isLogin) {
      return <Redirect to={redirect}/>
    }
    return (
      <div>
           <h3>LoginPage</h3>
        <input type="text" value={name} onChange={this.nameChange} />
          <p className="red">{err.msg}</p>
        <button onClick={() => login({name})}> {loading ? "loading..." : "login"}</button>
      </div>
    )
  }
}

export default connect(({user}) => ({isLogin:user.isLogin,loading:user.loading,err:user.err}),{login})(LoginPage)