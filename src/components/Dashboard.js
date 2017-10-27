import React, { Component } from 'react';
import { Container, Header, Loader } from 'semantic-ui-react';
import PostGrid from './PostGrid';
import api from '../utils/api';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: null };
  }

  componentDidMount() {
    api.fetchFirstPosts()
      .then((posts) => {
        this.setState({ posts: posts });
      });
  }

  render() {
    const posts = this.state.posts;
    return (
      <Container>
        <Header as='h1' color='blue'>
          Posts
        </Header>
        {posts
          ? <PostGrid posts={posts} />
          : <Loader active inline='centered' size='large' />}
      </Container>
    );
  }
}

export default Dashboard;
