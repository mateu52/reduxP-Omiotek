import React from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import "./styles.css";
import thunk from 'redux-thunk'
//import {configureStore} from '@reduxjs/toolkit'
import CounterContainer from "./counter/CounterContainer";
import Posts from "./posts/conteiners/Posts";
import Users from "./users/containers/Users";
import Items from "./items/components/items";
import Itemsfetch from "./items/components/Itemsfetch";
//import reducer from "./counter/redux";
import rootReducer from "./rootReducers";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const store = createStore(rootReducer, applyMiddleware(thunk));
export default class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
              <Link to="/">Counter</Link>
              <Link to="/Items">Items</Link>
              <Link to="/refresh">Refresh button</Link>
            <Routes>
              <Route path="/" element={<CounterContainer />} />
              <Route path="/Items" element={<Items />} />
              <Route path="/refresh" element={<Itemsfetch />} />
            </Routes>
          </Router>
        </Provider>
      </div>
    );
  }
}
