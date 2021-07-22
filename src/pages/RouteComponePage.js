import React, { Component } from 'react'
// import {BrowserRouter as Router,Route,Link,Switch} from'react-router-dom'
import {BrowserRouter as Router,Route,Link} from '../k-react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import UserPage from './UserPage'
import _404Page from './_404Page'
import PrivateUserPage from './PrivateUserPage'

export default class RouteComponePage extends Component {
  render() {
    return (
      <div>
        <h3>ReactRouterPage</h3>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Link to="/login">登录</Link>
          {/* <Switch> */}
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/user" exact strict component={UserPage}></Route>
            {/* <PrivateUserPage path="/user" exact strict component={UserPage}></PrivateUserPage> */}
            {/* <Route path="/login" sensitive component={LoginPage}></Route> */}
            {/* <Route component={_404Page}></Route> */}
          {/* </Switch> */}
        </Router>
      </div>
    )
  }
}

/** 
 *  exact strict 这样 /user/ 就匹配不到 /user 路由
 *  sensitive 这样大写 /Login 就匹配不到小写的 /login
*/
