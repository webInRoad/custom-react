import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from '../zReactRedux'

class LoginPage extends Component {
  render() {
    const {isLogin,login,location} = this.props;
    const {redirect = "/"} = location.state || {}
    console.info(isLogin,"isLogin")
    console.info(redirect,"redirect")
    if(isLogin) {
      return <Redirect to={redirect}/>
    }
    return (
      <div>
        <h3>LoginPage</h3>
        <button onClick={login}>login</button>
      </div>
    )
  }
}

export default connect(({user}) => ({isLogin:user.isLogin}),{login:()=>({type:'LOGIN_SUCCESS'})})(LoginPage)