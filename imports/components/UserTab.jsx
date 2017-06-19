import React, { Component } from 'react';

export default class UserTab extends Component {
  logout(e){
    e.preventDefault();
    Meteor.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <a onClick={this.logout.bind(this)}>Log Out</a>
      </div>
    );
  }
}
