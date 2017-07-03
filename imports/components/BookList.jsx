import React, { Component } from 'react';
import { Books } from '../collections/books';
import Category from './Category';

export default class BookList extends Component {
  constructor(props){
    super(props);
    this.state = {
      byCategories: {}
    }
  }

  componentDidMount(){
    const self = this;
    Meteor.call('getBooksByCategory', function(error, categoryArray){
      self.setState({byCategories: categoryArray});
    });
  }

  findBookById(bookId){
    const { books } = this.props;
    return books.filter(function(book){
      return book._id === bookId;
    })[0];
  }

  render() {
    const { books } = this.props;
    const { userBooks } = this.props;
    const { byCategories } = this.state;
    if (!byCategories) {
      return <div>Loading...</div>;
    }
    if (this.props.categories) {
      return (
        <ul className="collapsible collection with-header">
          <li className="collection-header">
            <h4>WWG Books</h4>
            <nav>
              <div className="nav-wrapper">
                <form>
                  <div className="input-field">
                    <input autoComplete="off" data-list=".searchable" id="search" type="search"/>
                    <label className="label-icon" htmlFor="search">
                    <i className="material-icons">search</i>
                    </label>
                    <i className="material-icons">close</i>
                  </div>
                </form>
              </div>
            </nav>
          </li>
          {Object.keys(byCategories).map(key => {
            let booksArray = byCategories[key];
            return (
              <Category key={key} category={key} books={booksArray} />
            );
          })}
        </ul>
      );
    } else {
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
}
