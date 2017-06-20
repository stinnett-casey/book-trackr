import React, { Component } from 'react';

export default class StatsTab extends Component {
  componentDidMount(){
    document.getElementById('books-tab').className = '';
    document.getElementById('stats-tab').className = 'active';
    document.getElementById('user-tab').className = '';
  }

  render() {
    return (
      <div>Stats</div>
    );
  }
}
