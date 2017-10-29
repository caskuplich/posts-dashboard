import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import './FormField.css';

class FormField extends Component {
  shouldDisplayError() {
    return this.props.error && this.props.errorMessage !== '';
  }

  render() {
    return (
      <div className='form-field'>
        <Form.Field
          control={this.props.control}
          label={this.props.label}
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onInputChange}
          error={this.shouldDisplayError()}
        />
        <Message
          className='error-message'
          visible={this.shouldDisplayError()}
          error>
          {this.props.errorMessage}
        </Message>
      </div>
    );
  }
}

export default FormField;
