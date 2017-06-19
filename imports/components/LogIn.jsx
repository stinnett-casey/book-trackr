import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class LogIn extends Component {
  login(e){
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;

    console.log(Meteor.loginWithPassword(email, password));
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
