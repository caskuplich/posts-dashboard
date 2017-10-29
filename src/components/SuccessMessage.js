import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Message, Header, Segment, Button } from 'semantic-ui-react';
import './SuccessMessage.css';

/**
 * SuccessMessage displays the new post created and a success message.
 */
class SuccessMessage extends Component {
  render() {
    const post = this.props.post;
    return (
      <div>
        <Message positive>
          <p>Post criado com sucesso!</p>
        </Message>
        <Header as='h1' color='blue' dividing>Detalhes do novo post</Header>
        <Segment>
          <dl className='dl-horizontal'>
            <dt>ID do post</dt>
            <dd>{post.id}</dd>
            <dt>ID do usuário</dt>
            <dd>{post.userId}</dd>
            <dt>Título</dt>
            <dd>{post.title}</dd>
            <dt>Conteúdo</dt>
            <dd>{post.body}</dd>
          </dl>
        </Segment>
        <Button as={Link} to='/' primary>Ir para a Dashboard</Button>
      </div>
    );
  }
}

export default SuccessMessage;
