
import {
  LOGOUT_SUCCESS,
  REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_SAGA
} from "./const";
import LoginService from "../service/login";
export const login = userInfo => dispatch => {
  dispatch({type: REQUEST});
  LoginService.login(userInfo).then(res => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {...userInfo, ...res}
    });
    getMoreUserInfo(dispatch, {...userInfo,...res});
    return res;
  },
  err => {
      dispatch({type: LOGIN_FAILURE, payload:
    err});
  }
  );
};
export const getMoreUserInfo = (dispatch, userInfo) => {
  return LoginService.getMoreUserInfo(userInfo).then(
    res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res
      });
    },
    err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err
      });
    }
  );
};