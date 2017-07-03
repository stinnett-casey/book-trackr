import React from 'react';

const Book = ({ book }) => {
  return(
    <li className="collection-item book">
      {/*<div className="title">({book.sku}) {book.title} | {book.author}</div>*/}
      <div className="title">{book.title}</div>
    </li>
  );
}

export default Book;
