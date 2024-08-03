import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UnauthenticatedView = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to AI Training Plan</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis felis nec arcu aliquet, at convallis turpis egestas.
      </p>
      <p>
        Please log in to access your personalized training plans and insights.
      </p>
      <button onClick={() => loginWithRedirect()} className="btn btn-primary">
        Log In
      </button>
    </div>
  );
};

export default UnauthenticatedView;
