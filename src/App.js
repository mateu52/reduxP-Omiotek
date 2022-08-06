import React from "react";
import "./styles.css";

import CounterContainer from "./counter/CounterContainer";
import PostsContainer from "./posts/PostsContainer";
import UsersContainer from "./users/UsersContainer";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
        <PostsContainer />
        <UsersContainer />
      </div>
    );
  }
}
