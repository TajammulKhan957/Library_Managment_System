import React, { useState } from 'react';
import axios from 'axios';
import './AddUserForm.css'; // Import your custom CSS file

function AddUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', { name, email });
      setName('');
      setEmail('');
      setShowAlert(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='background-container'>
    <div className='content-container'>
      {showAlert && (
        <div className="custom-alert">
          New User added successfully!
        </div>
      )}
    <form onSubmit={handleSubmit} className="custom-form mb-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          className="form-control custom-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          className="form-control custom-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary custom-btn">Add User</button>
    </form>
    </div>
    </div>
  );
}

export default AddUserForm;
