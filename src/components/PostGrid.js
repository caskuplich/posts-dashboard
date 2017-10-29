import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Post from './Post';
import PropTypes from 'prop-types';

/**
 * PostGrid is a stackable horizontal grid of posts.
 */
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

PostGrid.propTypes = {
  /**
   * posts is an array of posts.
   */
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string
    })
  ).isRequired
};

export default PostGrid;
