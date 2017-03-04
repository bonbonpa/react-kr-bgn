/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import HelloMessage from './HelloMessage';
import {Router ,Route , Link, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
      <Route path="/header" component={Header}/>
      <Route path="/content" component={Content}/>
      <Route path="/footer" component={Footer}/>
  </Router>,
  document.getElementById('root')
);

ReactDOM.render(
  <HelloMessage name="dvp" />
  ,
  document.getElementById('root2')
);
*/

import {createStore} from 'redux';

//declare begin of state
const initialState = {
  result : 20000,
  value : []
}
const reducer = (state=initialState,action)=>{
  switch (action.type) {
    case "ADD": //is Action
        state = {
          /*result : state.result ,
          value : state.value*/
          ...state, //show state all
          result: state.result += action.payload,
          value : [...state.value,action.payload]
        }
      break;
    case "SUBTRACT":
    state = {
      /*result : state.result ,
      value : state.value*/
      ...state, //show state all
      result: state.result -= action.payload,
      value : [...state.value,action.payload]
    }
      break;
  }
  return state;
}///
const store = createStore(reducer);

//subscribe
store.subscribe(()=>{
  console.log("Update Store",store.getState());
})
//change data in Store
store.dispatch({
  type: "ADD",
  payload : 10000
})
store.dispatch({
  type: "ADD",
  payload : 14000
})
store.dispatch({
  type: "SUBTRACT",
  payload : 4000
})
