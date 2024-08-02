import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">AI Training Plan</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {!isAuthenticated && (
            <Button variant="outline-light" onClick={() => loginWithRedirect()}>
              Log In
            </Button>
          )}
          {isAuthenticated && (
            <Button variant="outline-light" onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
