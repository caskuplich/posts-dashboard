import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
import './formField.css';

class FormField extends Component {
  render() {
    return (
      <div className='formField'>
        {this.props.children}
        <Message visible={this.props.error} error>
          {this.props.errorMessage}
        </Message>
      </div>
    );
  }
}

export default FormField;
