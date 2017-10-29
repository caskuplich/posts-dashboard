import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class NotFound extends Component {
  render() {
    return (
      <Container text>
        <Header as='h1' textAlign='center'>Página não encontrada.</Header>
      </Container>
    );
  }
}

export default NotFound;
