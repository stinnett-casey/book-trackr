import React from 'react';
import Book from './Book';

const Category = (props) => {
  return (
    <li>
      <div className="collapsible-header">{ props.category }</div>
      <div className="collapsible-body">
        <ul className="collection">
          {props.books.map(book => {
            <Book book={book} />
          })}
        </ul>
      </div>
    </li>
  );
}

export default Category;