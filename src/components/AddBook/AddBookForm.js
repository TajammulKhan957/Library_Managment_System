import React, { useState } from 'react';
import axios from 'axios';
import './AddBookForm.css';

function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [language, setLanguage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/books', { title, author, language });
      setTitle('');
      setAuthor('');
      setLanguage('');
      setShowAlert(true); 
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="background-container">
    <div className="content-container">
      {showAlert && (
        <div className="custom-alert">
          New Book added successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="custom-form mb-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" id="title" className="form-control custom-input" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" id="author" className="form-control custom-input" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="language" className="form-label">Language</label>
          <input type="text" id="language" className="form-control custom-input" value={language} onChange={(e) => setLanguage(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary custom-btn">Add Book</button>
      </form>
    </div>
    </div>
  );
}

export default AddBookForm;
