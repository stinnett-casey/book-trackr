import React, { Component } from 'react';
import BookList from './BookList';

export default class BooksTab extends Component {
  componentDidMount(){
    document.getElementById('books-tab').className = 'active';
    document.getElementById('stats-tab').className = '';
    document.getElementById('user-tab').className = '';
  }

  render() {
    return (
      <div>
        <BookList categories={true} />
      </div>
    );
  }
}


