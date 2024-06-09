import React from "react";

const Bookshelf = ({ bookshelf }) => (
  <div>
    <h2>My Bookshelf</h2>
    {bookshelf.length === 0 ? (
      <p>No books in your bookshelf.</p>
    ) : (
      bookshelf.map((book) => (
        <div key={book.key} className="book-card">
          <h3>{book.title}</h3>
          <p>{book.author_name?.join(", ")}</p>
        </div>
      ))
    )}
  </div>
);

export default Bookshelf;
