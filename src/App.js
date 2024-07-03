// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import BookList from './components/BookList/BookList';
import AddBookForm from './components/AddBook/AddBookForm';
import UserList from './components/UsersList/UserList';
import AddUserForm from './components/AddUser/AddUserForm';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { AuthProvider } from './components/Auth/AuthContext';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/books" element={
              <ProtectedRoute>
                <>
                  <h2 className="my-3 text-center route-heading">Books</h2>
                  <BookList />
                </>
              </ProtectedRoute>
            } />
            <Route path="/users" element={
              <ProtectedRoute>
                <>
                  <h2 className="my-3 text-center route-heading">Users</h2>
                  <UserList />
                </>
              </ProtectedRoute>
            } />
            <Route path="/add-book" element={
              <ProtectedRoute>
                <>
                  <h2 className="my-3 text-center route-heading">Add Book</h2>
                  <AddBookForm />
                </>
              </ProtectedRoute>
            } />
            <Route path="/add-user" element={
              <ProtectedRoute>
                <>
                  <h2 className="my-3 text-center route-heading">Add User</h2>
                  <AddUserForm />
                </>
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
