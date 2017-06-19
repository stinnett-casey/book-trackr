import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class LogIn extends Component {
  login(e){
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const { history } = this.props;

    Meteor.loginWithPassword(email, password, function(error){
      if (error) {
        const toastContent = `
          <span 
            style="font-weight:bold; 
            color:red; 
            font-size:1.6em;">
            ${error.reason}
          </span>
        `;
        Materialize.toast(toastContent, 4000);
      } else {
        history.push('/books');
      }
    });

  }

  render() {
    return (
      <div className="accounts-wrapper">
        <form onSubmit={this.login.bind(this)} className="form-wrapper">
          <h1>Log In</h1>
          <div className="input-field">
            <input autoFocus={true} id="email" ref="email" type="email" className="validate" />
            <label htmlFor="email" data-error="C'mon, You're REAL Email!" data-success="Nicely">Email</label>
          </div>
          <div className="input-field">
            <input id="password" ref="password" type="password" />
            <label htmlFor="password">Password</label>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Log In
          </button>
          <Link className="right" style={{position: 'relative', bottom: '28px'}} to={'/signup'}>Make Account</Link>
        </form>
      </div>
    );
  }
}
