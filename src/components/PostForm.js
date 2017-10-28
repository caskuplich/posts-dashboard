import React, { Component } from 'react';
import { Container, Header, Form } from 'semantic-ui-react';

class PostForm extends Component {
  render() {
    return (
      <Container text>
        <Header as='h1' color='blue' dividing>
          Novo post
        </Header>
        <Form>
          <Form.Input
            label='ID do usuário'
            type='number'
            placeholder='ID do usuário'
            inline
            required
          />
          <Form.Input
            label='Título'
            type='text'
            placeholder='Título'
            required />
          <Form.TextArea
            label='Conteúdo'
            placeholder='Escreva aqui o conteúdo do post'
            required
          />
          <Form.Button primary>Enviar</Form.Button>
        </Form>
      </Container>
    );
  }
}

export default PostForm;
