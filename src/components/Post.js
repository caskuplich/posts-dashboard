import React, { Component } from 'react';
import { Card, List } from 'semantic-ui-react';
import './Post.css';
import PropTypes from 'prop-types';

/**
 * Post is a card to display post information.
 */
class Post extends Component {
  render() {
    const post = this.props.post;
    return (
      <Card color='blue'>
        <Card.Content>
          <Card.Header className='truncate'>
            {post.title}
          </Card.Header>
          <Card.Description>
            <List relaxed>
              <List.Item>
                <List.Icon name='info' />
                <List.Content>{post.id}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='user' />
                <List.Content>{post.userId}</List.Content>
              </List.Item>
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

Post.propTypes = {
  /**
   * post is required and must have an id.
   */
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
  }).isRequired
};

export default Post;
