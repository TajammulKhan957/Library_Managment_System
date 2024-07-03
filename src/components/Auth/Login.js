// Login.js
import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
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
      <button type="submit" className="btn btn-primary custom-btn">Login</button>
    </form>
  );
};

export default Login;
