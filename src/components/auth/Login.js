import React from 'react';
import { connect } from 'react-redux';

import { login, logout } from '../../actions';

class Login extends React.Component {
  componentDidMount() {
    console.log(this.props);
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '653120342276-47c5r55dvj37rdbh5ea2iae86nh26j46.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.login(this.auth.currentUser.get().getId());
    } else {
      this.props.logout();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null){
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <div>{this.props.userId}</div>
          <br/>
          <div>You are signed in</div>
          <button className="ui red google button" onClick={this.onSignOutClick}>
            <i className="google icon" />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="ui red google button" onClick={this.onSignInClick}>
            <i className="google icon" />
            Sign In
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId
  }
}

export default connect(
  mapStateToProps,
  {login, logout}
)(Login);
