import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';

const Root = styled('div')({
  flexGrow: 1,
});

const Title = styled(Typography)({
  flexGrow: 1,
});

const NavLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Root>
      <AppBar position="static" sx={{ backgroundColor: 'burlywood' }}>
        <Toolbar>
          <Title variant="h6" sx={{ color: 'Black' }}>
            Library Management System
          </Title>
          {isAuthenticated && (
            <>
              <NavLink to="/books" sx={{ color: 'Black' }}>
                <Button color="inherit">Books</Button>
              </NavLink>
              <NavLink to="/users" sx={{ color: 'Black' }}>
                <Button color="inherit">Users</Button>
              </NavLink>
              <NavLink to="/add-book" sx={{ color: 'Black' }}>
                <Button color="inherit">Add Book</Button>
              </NavLink>
              <NavLink to="/add-user" sx={{ color: 'Black' }}>
                <Button color="inherit">Add User</Button>
              </NavLink>
              <Button color="inherit" onClick={logout} sx={{ color: 'Black' }}>
                Logout
              </Button>
            </>
          )}
          {!isAuthenticated && (
            <>
              <NavLink to="/login" sx={{ color: 'Black' }}>
                <Button color="inherit">Login</Button>
              </NavLink>
              <NavLink to="/signup" sx={{ color: 'Black' }}>
                <Button color="inherit">Sign Up</Button>
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Navbar;
