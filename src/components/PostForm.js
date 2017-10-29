import React, { Component } from 'react';
import { Container, Header, Form, Message } from 'semantic-ui-react';
import FormField from './FormField';
import SuccessMessage from './SuccessMessage';
import api from '../utils/api';
import { validate, ruleRunner } from '../utils/validation';
import { required, isNumber } from '../utils/validationRules';

/**
 * Validation rules for each form field.
 */
const fieldValidations = [
  ruleRunner('userId', 'ID do usuário', required, isNumber),
  ruleRunner('title', 'Título', required),
  ruleRunner('body', 'Conteúdo', required),
];

/**
 * PostForm is a form to create a new post.
 */
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

  /**
   * Get the error messages for the field passed in.
   */
  errorFor(field) {
    return this.state.validationErrors[field] || '';
  }

  /**
   * Handles field value change for each form field.
   */
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    // copy the current state and merge the value of the changed field
    let newState = { ...this.state, [name]: value };
    // run validate to save the validation errors on the new state
    newState.validationErrors = validate(newState, fieldValidations);

    this.setState(newState);
  }

  /**
   * Handles the form submit by calling the API if the form is valid.
   */
  handleSubmit(event) {
    event.preventDefault();

    // show the validation errors after the form submit
    this.setState({ showErrors: true });

    if (this.isValid()) {
      // start the loading spinner
      this.setState({ submitting: true });
      api.createNewPost(this.state)
        .then((newPost) => {
          // POST to API returns the new post created
          this.setState({ createdPost: newPost });
        })
        .catch((error) => {
          // show an error message if the submission fails
          this.setState({ submissionError: true });
        })
        .then(() => {
          // cancel de loading spinner
          this.setState({ submitting: false });
        });
    }
  }

  /**
   * Helper method to check if the form is valid.
   */
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
                  label='ID do usuário'
                  placeholder='ID do usuário'
                  name='userId'
                  value={this.state.userId}
                  onInputChange={this.handleChange}
                  error={this.state.showErrors}
                  errorMessage={this.errorFor('userId')}
                />
                <FormField
                  label='Título'
                  placeholder='Título'
                  name='title'
                  value={this.state.title}
                  onInputChange={this.handleChange}
                  error={this.state.showErrors}
                  errorMessage={this.errorFor('title')}
                />
                <FormField
                  textArea
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
