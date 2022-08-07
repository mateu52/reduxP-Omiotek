import React from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import "./styles.css";
import thunk from 'redux-thunk'
//import {configureStore} from '@reduxjs/toolkit'
import CounterContainer from "./counter/CounterContainer";
import Posts from "./posts/conteiners/Posts";
import Users from "./users/containers/Users";
//import reducer from "./counter/redux";
import rootReducer from "./rootReducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <CounterContainer />
          <Posts />
          <Users />
        </Provider>
      </div>
    );
  }
}
