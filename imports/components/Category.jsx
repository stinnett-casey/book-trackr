import React from 'react';
import Book from './Book';

const Category = ({ books, category }) => {
  return (
    <li>
      <div className="collapsible-header"><h5>{ category }</h5></div>
      <div className="collapsible-body">
        <ul className="collection">
          {books.map(book => {
            return <Book key={book._id} book={book} />;
          })}
        </ul>
      </div>
    </li>
  );
}

export default Category;