import React, { Component } from 'react';
import { Container, Header, Card } from 'semantic-ui-react';
import Post from './Post';
import posts from './posts';

class Dashboard extends Component {
  render() {
    const postsCards = posts.map((post) =>
      <Post key={post.id} post={post} />
    );
    return (
      <Container>
        <Header as='h1' block color='blue'>
          Posts
        </Header>
        <Card.Group itemsPerRow={4} stackable>
          {postsCards}
        </Card.Group>
      </Container>
    );
  }
}

export default Dashboard;
