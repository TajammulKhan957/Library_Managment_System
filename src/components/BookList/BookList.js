import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/books');
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="mt-4">
      <h3 style={{ marginBottom: '1rem', color: '#333' }}>Book List</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {books.map((book) => (
          <li key={book.id} style={{ marginBottom: '0.5rem', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}>
            <strong>{book.title}</strong> by {book.author} (Language: {book.isbn})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
