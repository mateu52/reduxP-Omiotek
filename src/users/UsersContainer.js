import React, { Component } from "react";

import UsersList from "./UsersList";

class UsersContainer extends Component {
  state = {
    users: []
  };
  fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ users: data.slice(0, 3) }));
  };
  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <h2>Users</h2>
        <button onClick={this.fetchData}>Fetch Users</button>
        <UsersList users={users} />
      </div>
    );
  }
}

export default UsersContainer;
