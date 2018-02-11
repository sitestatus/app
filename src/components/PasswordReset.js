import React, { Component } from 'react';
import './SigninForm.css';

import { RaisedButton, TextField, FlatButton } from 'material-ui';

import firebase from 'firebase';

class PasswordReset extends Component {
  style = {
    color: "#ffffff",
    textTransform: "none"
  };

  hint_style = {
    color: "rgba( 255, 255, 255, 0.4 )",
  };

  sendemail = ( event ) => {
    const self = this;
    const email = document.getElementById( 'email' ).value;
    firebase.auth().sendPasswordResetEmail(email).then(() => {
      self.props.Info("Check your email for a link to reset your password.")
    }).catch((error) => {
      self.props.Alert("Check your email for a link to reset your password.")
    });
  }

  signin = ( event ) => {
    window.location.hash = ""
  }

  render() {
    return (
      <div className="login">
        <div className="login-form">
          <h1><img src="./img/logo-white.png" alt="Speeeed" className="logo" /></h1>
          <form>
            <TextField id="email" type="email" hintText="Email" fullWidth={true} inputStyle={ this.style } hintStyle={ this.hint_style } />
            <RaisedButton className="signin" label="Send password reset email" primary={true} fullWidth={true} onClick={ this.sendemail } />
          </form>
          <p className="small center"><FlatButton label="Sign in" labelStyle={ this.style } onClick={ this.signin } /></p>
        </div>
      </div>
    );
  }
}

export default PasswordReset;