import React, { Component } from 'react';
import BookList from './BookList';

export default class BooksTab extends Component {
  render() {
    return (
      <div>
        <BookList categories={true} />
      </div>
    );
  }
}


