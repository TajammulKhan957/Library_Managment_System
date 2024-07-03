// AuthContext.js
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const signup = async (user) => {
    try {
      const response = await axios.post('http://localhost:5000/signup', user);
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error("Signup error", error);
    }
  };

  const login = async (user) => {
    try {
      const response = await axios.post('http://localhost:5000/login', user);
      if (response.data.authenticated) {
        setIsAuthenticated(true);
        navigate('/books');
      }
    } catch (error) {
      console.error("Login error", error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
