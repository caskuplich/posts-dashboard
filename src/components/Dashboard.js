import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Loader, Button, Message } from 'semantic-ui-react';
import PostGrid from './PostGrid';
import api from '../utils/api';

/**
 * Dashboard presents the first 4 posts in a horizontal grid.
 */
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      requestError: false
    };
  }

  componentDidMount() {
    api.fetchFirstPosts()
      .then((posts) => {
        this.setState({ posts: posts });
      })
      .catch(() => {
        this.setState({ requestError: true });
      });
  }

  render() {
    const posts = this.state.posts;
    const error = this.state.requestError;
    return (
      <Container>
        <Header as='h1' color='blue' dividing>
          Posts
          <Button floated='right' as={Link} to='/new' primary>
            Novo Post
          </Button>
        </Header>
        {posts
          ? <PostGrid posts={posts} />
          : (error
            ? <Message error>
                Não foi possível obter os posts. Por favor, tente novamente mais tarde.
              </Message>
            : <Loader active inline='centered' size='large' />)}
      </Container>
    );
  }
}

export default Dashboard;
