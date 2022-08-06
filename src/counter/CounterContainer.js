import React, { Component } from "react";

class CounterContainer extends Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <h2>Counter: {count} </h2>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default CounterContainer;
