import React, { useState, useEffect } from 'react';


const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
      <div>
          <a href="/" >Back to Search</a>
      <h1>My Bookshelf</h1>
      <div className="bookshelf">
        {bookshelf.map(book => (
          <div key={book.key} className="book-card">
            <h3>Book Title: {book.title}</h3>
            <p>Edition Count: {book.edition_count}</p>
          </div>
        ))}
          </div>
          
    </div>
  );
};

export default BookshelfPage;
