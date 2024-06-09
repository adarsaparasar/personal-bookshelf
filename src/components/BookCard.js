import React from 'react';

const BookCard = ({ book, addToBookshelf, isInBookshelf }) => (
  <div className="book-card">
    <h3>{book.title}</h3>
    <p>{book.author_name?.join(', ')}</p>
    {!isInBookshelf && <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>}
  </div>
);

export default BookCard;

