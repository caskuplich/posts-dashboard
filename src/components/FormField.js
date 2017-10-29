import React, { Component } from 'react';
import { Form, Message, Input, TextArea } from 'semantic-ui-react';
import './FormField.css';
import PropTypes from 'prop-types';

/**
 * FormField is a field containing a label, an input and a validation error
 * message.
 */
class FormField extends Component {
  /**
   * Helper method to check if the error should be displayed.
   */
  shouldDisplayError() {
    return this.props.error && this.props.errorMessage !== '';
  }

  render() {
    const control = this.props.textArea ? TextArea : Input;
    return (
      <div className='form-field'>
        <Form.Field
          control={control}
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

FormField.defaultProps = {
  textArea: false,
  error: false,
  errorMessage: ''
};

FormField.propTypes = {
  /**
   * Render the field as a <textarea>.
   */
  textArea: PropTypes.bool,
  /**
   * Field label.
   */
  label: PropTypes.string,
  /**
   * Field placeholder.
   */
  placeholder: PropTypes.string,
  /**
   * Field name.
   */
  name: PropTypes.string,
  /**
   * Field value.
   */
  value: PropTypes.string,
  /**
   * onChange event handler.
   */
  onInputChange: PropTypes.func,
  /**
   * Displays field error state.
   */
  error: PropTypes.bool,
  /**
   * Field error message.
   */
  errorMessage: PropTypes.string
};

export default FormField;
