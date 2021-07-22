import React, { Component } from 'react'
// import {BrowserRouter as Router,Route,Link,Switch} from'react-router-dom'
import {BrowserRouter as Router,Route,Link,Switch,withRouter} from '../k-react-router-dom'
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
          <Link to="/product/123">商品</Link>
          <Switch>
            {/* <Route path="/" exact component={HomePage}></Route> */}
            <Route path="/" exact component={HomePage}></Route>
            {/* <Route path="/user" exact strict component={UserPage}></Route> */}
            <PrivateUserPage path="/user" exact strict component={UserPage}></PrivateUserPage>
            <Route path="/product/:id" render={() => <Product />} />
            {/* <Route path="/login" sensitive component={LoginPage}></Route> */}
            <Route component={_404Page}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

/** 
 *  exact strict 这样 /user/ 就匹配不到 /user 路由
 *  sensitive 这样大写 /Login 就匹配不到小写的 /login
*/
class Child extends Component {
  componentDidMount() {
    console.log("componentDidMount"); //sy-log
  }

  componentWillUnmount() {
    console.log("componentWillUnmount"); //sy-log
  }

  render() {
    return <div>child-{this.props.count}</div>;
  }
}

@withRouter
class Product extends Component {
  render() {
    console.log("Product", this.props); //sy-log
    return (
      <div>
        <h1>Product</h1>
      </div>
    );
  }
}