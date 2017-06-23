import React, { Component } from 'react';

export default class BookList extends Component {
  findBookById(bookId){
    const { books } = this.props;
    return books.filter(function(book){
      return book._id === bookId;
    })[0];
  }

  render() {
    const { books } = this.props;
    const { userBooks } = this.props;
    if (!userBooks) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {userBooks.map(userBook => {
          return (
            <p key={userBook.bookId}>{this.findBookById(userBook.bookId).title}</p>
          );
        })}
      </div>
    );
  }
}
