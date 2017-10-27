import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Post from './Post';

class PostGrid extends Component {
  render() {
    const posts = this.props.posts;
    return (
      <Card.Group itemsPerRow={4} stackable>
        {posts.map((post) =>
          <Post key={post.id} post={post} />)}
      </Card.Group>
    );
  }
}

export default PostGrid;
