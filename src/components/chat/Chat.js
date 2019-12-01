import React from 'react';
import { connect } from 'react-redux';

import ChatInputForm from './ChatInputForm';

import { createMessage, getMessages } from '../../actions';

class Chat extends React.Component {
  componentDidMount = () => {
    this.props.getMessages();
  }

  onSubmit = formValues => {
    this.props.createMessage(formValues, Date.now())
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
      <div style={{height: "100%"}}>
        <div className="ui list">
          {this.renderMessages()}
        </div>
        <div className="ui bottom fixed">
          <ChatInputForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: Object.values(state.messages)
  }
}

export default connect(
  mapStateToProps, {
    createMessage,
    getMessages
  }
)(Chat)
