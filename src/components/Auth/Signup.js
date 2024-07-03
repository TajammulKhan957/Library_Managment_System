// Signup.js
import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(user); // Ensure signup returns after completion
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit} className="custom-form">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" id="username" name="username" className="form-control custom-input" value={user.username} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" id="password" name="password" className="form-control custom-input" value={user.password} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary custom-btn">Sign Up</button>
    </form>
  );
};

export default Signup;
