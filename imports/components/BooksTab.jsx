import React, { Component } from 'react';
import BookList from './BookList';
import { UserBooks } from '../collections/user-books';
import { Books } from '../collections/books';
import { createContainer } from 'meteor/react-meteor-data';


class BooksTab extends Component {
  componentDidMount(){
    document.getElementById('books-tab').className = 'active';
    document.getElementById('stats-tab').className = '';
    document.getElementById('user-tab').className = '';
  }

  render() {
    const { books } = this.props;
    const { userBooks } = this.props;
    if (!userBooks) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <BookList categories={true} books={books} userBooks={userBooks} />
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('user-books');
  Meteor.subscribe('books');
  return { 
    userBooks: UserBooks.find({}).fetch(),
    books: Books.find({}).fetch()
  };
}, BooksTab);
