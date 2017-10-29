import React, { Component } from 'react';
import { Container, Header, Form, Input, TextArea, Message } from 'semantic-ui-react';
import FormField from './FormField';
import SuccessMessage from './SuccessMessage';
import api from '../utils/api';
import { validate, ruleRunner } from '../utils/validation';
import { required, isNumber } from '../utils/validationRules';

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

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    let newState = { ...this.state, [name]: value };
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
      <Container text>
        { this.state.createdPost
          ? <SuccessMessage post={this.state.createdPost} />
          : <div>
              <Message hidden={!this.state.submissionError} error>
                Erro na criação do post. Por favor, tente novamente mais tarde.
              </Message>
              <Header as='h1' color='blue' dividing>Novo post</Header>
              <Form onSubmit={this.handleSubmit} loading={this.state.submitting}>
                <FormField
                  control={Input}
                  label='ID do usuário'
                  placeholder='ID do usuário'
                  name='userId'
                  value={this.state.userId}
                  onInputChange={this.handleChange}
                  error={this.state.showErrors}
                  errorMessage={this.errorFor('userId')}
                />
                <FormField
                  control={Input}
                  label='Título'
                  placeholder='Título'
                  name='title'
                  value={this.state.title}
                  onInputChange={this.handleChange}
                  error={this.state.showErrors}
                  errorMessage={this.errorFor('title')}
                />
                <FormField
                  control={TextArea}
                  label='Conteúdo'
                  placeholder='Escreva aqui o conteúdo do post'
                  name='body'
                  value={this.state.body}
                  onInputChange={this.handleChange}
                  error={this.state.showErrors}
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
