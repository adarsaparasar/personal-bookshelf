import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBooks from '../components/SearchBooks';

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <div className="search-header">
        <h1>Book Search</h1>
        <Link to="/bookshelf">
          <button>Go to My Bookshelf</button>
        </Link>
      </div>
      <SearchBooks addToBookshelf={addToBookshelf} bookshelf={bookshelf} />
    </div>
  );
};

export default SearchPage;
