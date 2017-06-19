import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Users } from '../collections/users';

export default class SignUp extends Component {
  signup(e){
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const self = this;

    // Done client side instead of server so that the user
    // gets logged in on success
    Accounts.createUser({
      password,
      email
    }, function(error){
      if (error) { // user was not created
        const toastContent = `
          <span 
            style="font-weight:bold; 
            color:red; 
            font-size:1.6em;">
            ${error.reason}
          </span>
        `;
        Materialize.toast(toastContent, 4000);
      }else { // user was created
        self.props.history.push('/books');
      }
    });

  }

  render() {
    return (
      <div className="accounts-wrapper">
        <form onSubmit={this.signup.bind(this)} className="form-wrapper">
          <h1>Sign Up</h1>
          <i>
            Note: This website is in no way affiliated with World Wide Group, Amway, or any of their child companies. This is simply a way for you to track your reading on your book list so you have guidance while being CORE.
          </i>
          <br/>
          <div className="input-field">
            <input autoFocus={true} id="email" ref="email" type="email" className="validate" />
            <label htmlFor="email" data-error="C'mon, You're REAL Email!" data-success="Nicely">Email</label>
          </div>
          <div className="input-field">
            <input id="password" ref="password" type="password" />
            <label htmlFor="password">Password</label>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Sign Up
          </button>
          <Link className="left" style={{position: 'relative', bottom: '28px'}} to={'/'}>Log In</Link>
        </form>
      </div>
    );
  }
}
