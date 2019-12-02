import React from 'react';
import { connect } from 'react-redux';

import ChatInputForm from './ChatInputForm';

import { createMessage, getMessages } from '../../actions';

import '../../style/Chat.css';

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
      <div className="chatPage">
        <div className="ui list chatListContainer">
          <div className="chatList">
            {this.renderMessages()}
          </div>
        </div>
        <div className="ui bottom fixed chatInput">
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
