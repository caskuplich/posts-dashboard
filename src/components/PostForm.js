import React, { Component } from 'react';
import { Container, Header, Form, Message } from 'semantic-ui-react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import SuccessMessage from './SuccessMessage';
import api from '../utils/api';
import { validate, ruleRunner } from '../utils/validation';
import { required, isNumber } from '../utils/validationRules';
import './postForm.css';

const fieldValidations = [
  ruleRunner('userId', 'ID do usuário', required, isNumber),
  ruleRunner('title', 'Título', required),
  ruleRunner('body', 'Conteúdo', required),
];

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      title: '',
      body: '',
      showErrors: false,
      validationErrors: {},
      createdPost: null,
      submitting: false,
      submissionError: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      validationErrors: validate(this.state, fieldValidations)
    });
  }

  errorFor(field) {
    return this.state.validationErrors[field] || '';
  }

  handleChange(field, event) {
    const value = event.target.value;

    let newState = { ...this.state, [field]: value };
    newState.validationErrors = validate(newState, fieldValidations);

    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ showErrors: true });
    if (this.isValid()) {
      this.setState({ submitting: true });
      api.createNewPost(this.state)
        .then((newPost) => {
          this.setState({ createdPost: newPost });
        })
        .catch((error) => {
          this.setState({ submissionError: true });
        })
        .then(() => {
          this.setState({ submitting: false });
        });
    }
  }

  isValid() {
    const errors = this.state.validationErrors;
    return (Object.keys(errors).length === 0 && errors.constructor === Object);
  }

  render() {
    return (
      <Container text className='postForm'>
        { this.state.createdPost
          ? <SuccessMessage post={this.state.createdPost} />
          : <div>
              <Message hidden={!this.state.submissionError} error>
                Erro na criação do post. Por favor, tente novamente mais tarde.
              </Message>
              <Header as='h1' color='blue' dividing>Novo post</Header>
              <Form onSubmit={this.handleSubmit} loading={this.state.submitting}>
                <TextInput
                  label='ID do usuário'
                  placeholder='ID do usuário'
                  name='userId'
                  value={this.state.userId}
                  onInputChange={(event) => this.handleChange('userId', event)}
                  showError={this.state.showErrors}
                  errorMessage={this.errorFor('userId')}
                />
                <TextInput
                  label='Título'
                  placeholder='Título'
                  name='title'
                  value={this.state.title}
                  onInputChange={(event) => this.handleChange('title', event)}
                  showError={this.state.showErrors}
                  errorMessage={this.errorFor('title')}
                />
                <TextArea
                  label='Conteúdo'
                  placeholder='Escreva aqui o conteúdo do post'
                  name='body'
                  value={this.state.body}
                  onInputChange={(event) => this.handleChange('body', event)}
                  showError={this.state.showErrors}
                  errorMessage={this.errorFor('body')}
                />
                <Form.Button primary>Enviar</Form.Button>
              </Form>
            </div>}
      </Container>
    );
  }
}

export default PostForm;
