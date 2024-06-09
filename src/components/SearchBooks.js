import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import './SearchBooks.css'; // Make sure to import the CSS file

const SearchBooks = ({ addToBookshelf, bookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
      setResults(response.data.docs);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for books"
        className="search-bar"
      />
      <div className="results">
        {results.map(book => (
          <BookCard 
            key={book.key} 
            book={book} 
            addToBookshelf={addToBookshelf} 
            isInBookshelf={bookshelf.some(b => b.key === book.key)} 
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;
