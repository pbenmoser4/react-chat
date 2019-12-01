import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import ChatInputForm from './ChatInputForm';

import { createMessage, getMessages } from '../../actions';
import { CHAT_FORM } from '../constants';

class Chat extends React.Component {
  componentDidMount = () => {
    this.props.getMessages();
  }

  onSubmit = formValues => {
    // console.log(Date.now())
    this.props.createMessage(formValues, Date.now())
  }

  renderMessageInput = ({input, label, meta}) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
      </div>
    );
  }

  renderMessages = () => {
    return this.props.messages.map(message => {
      return (
        <div className="item" key={message.id}>
          {message.text}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="text" component={this.renderMessageInput} label="message to..." />
        </form>
        <div className="ui list">
          {this.renderMessages()}
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.message) {
    errors.message = "please enter a message";
  }
}

const mapStateToProps = (state) => {
  return {
    messages: Object.values(state.messages)
  }
}

const formObject = reduxForm({
  form: CHAT_FORM,
  validate
})(Chat);

export default connect(
  mapStateToProps, {
    createMessage,
    getMessages
  }
)(formObject)
