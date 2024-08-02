import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginForm = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', textAlign: 'center', padding: '50px' }}>
      {!isAuthenticated && (
        <div>
          <h2>Login</h2>
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      )}

      {isAuthenticated && (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
