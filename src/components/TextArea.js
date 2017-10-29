import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import FormField from './FormField';

class TextArea extends Component {
  shouldDisplayError() {
    return this.props.showError && this.props.errorMessage !== '';
  }

  render() {
    return (
      <FormField
        errorMessage={this.props.errorMessage}
        error={this.shouldDisplayError()}>
        <Form.TextArea
          label={this.props.label}
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onInputChange}
          error={this.shouldDisplayError()}
        />
      </FormField>
    );
  }
}

export default TextArea;
