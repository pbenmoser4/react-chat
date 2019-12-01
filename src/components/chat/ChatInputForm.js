import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { CHAT_FORM } from '../constants';

class ChatInputForm extends React.Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  }

  renderMessageInput = ({input, label, meta}) => {
    return (
      <div>
        <input {...input} autoComplete='off' placeholder="message..."/>
      </div>
    );
  }

  render() {
    return(
      <div className="ui bottom fixed">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="text" component={this.renderMessageInput} label="message to..." />
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.text) {
    errors.message = "please enter a message";
  }
}

export default reduxForm({
  form: CHAT_FORM,
  validate
})(ChatInputForm);
