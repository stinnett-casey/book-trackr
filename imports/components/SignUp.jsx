import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
  render() {
    return (
      <div className="accounts-wrapper">
        <form className="form-wrapper">
          <h1>Sign Up</h1>
          <i>
            Note: This website is in no way affiliated with World Wide Group or any of it's child companies. This is simply a way for you to track your reading on your book list so you have guidance while being CORE.
          </i>
          <br>
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
