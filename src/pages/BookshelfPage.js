import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div>
      <div className="bookshelf-header">
        <h1>My Bookshelf</h1>
        <Link to="/">
          <button>Back to Search</button>
        </Link>
      </div>
      <div className="bookshelf">
        {bookshelf.map((book, index) => (
          <div className="book-card" key={index}>
            <h3>Book Title: {book.title}</h3>
            <p>Edition Count: {book.edition_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookshelfPage;
