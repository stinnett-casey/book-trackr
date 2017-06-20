import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class UserTab extends Component {
  componentDidMount(){
    document.getElementById('books-tab').className = '';
    document.getElementById('stats-tab').className = '';
    document.getElementById('user-tab').className = 'active';
  }

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
