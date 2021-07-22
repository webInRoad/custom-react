import React from 'react'
import {Route, Redirect} from 'react-router-dom'
// import {Route, Redirect} from '../k-react-router-dom'
import {connect} from '../zReactRedux'
export default connect(({user})=> ({isLogin:user.isLogin}))(function PrivateUserPage({component:Component,path,isLogin,...rest}) {
  return (
    <Route {...rest} path={path} 
    render={(props) => {
      return isLogin ? <Component {...props}/> : <Redirect 
      to={{
        pathname:"/login",
        state:{redirect:props.location.pathname}
      }}/>
    }}
    />
  )
})