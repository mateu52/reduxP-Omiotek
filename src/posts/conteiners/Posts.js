import React, { Component } from "react";

import PostsList from "../components/PostsList";

class Posts extends Component {
  state = {
    posts: []
  };
  fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data.slice(0, 3) }));
  };
  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <h2>Posts</h2>
        <button onClick={this.fetchData}>Fetch Posts</button>
        <PostsList posts={posts} />
      </div>
    );
  }
}

export default Posts;
