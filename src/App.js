import React from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import "./styles.css";
import thunk from 'redux-thunk'
//import {configureStore} from '@reduxjs/toolkit'
import CounterContainer from "./counter/CounterContainer";
import Items from "./items/components/items";
import Itemsfetch from "./items/components/Itemsfetch";
import Contact from "./contact/Contact.js";
import rootReducer from "./rootReducers";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const store = createStore(rootReducer, applyMiddleware(thunk));
export default class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
              <p><Link to="/">Counter</Link></p>
              <p><Link to="/Items">Items</Link></p>
              <p><Link to="/refresh">Refresh button</Link></p>
              <p><Link to="/contact">Contact form</Link></p>
            <Routes>
              <Route path="/" element={<CounterContainer />} />
              <Route path="/Items" element={<Items />} />
              <Route path="/refresh" element={<Itemsfetch />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </Provider>
      </div>
    );
  }
}
