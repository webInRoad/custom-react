import React from 'react';
// import { Provider } from 'react-redux'
import { Provider } from './zReactRedux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

var a = 0
function* helloWorldGenerator() {
  console.info(1212)
  const res = yield a = a +1;
  console.info(res,"res")
  yield "world";
  return "ending";
}

var hw = helloWorldGenerator();
console.info(a,"a1")
hw.next()
console.info(a,"a2")