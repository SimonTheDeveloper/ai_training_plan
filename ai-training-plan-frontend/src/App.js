import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Footer from './components/Footer';
import UnauthenticatedView from './components/UnauthenticatedView';
import AuthenticatedView from './components/AuthenticatedView';
import './styles/App.css';

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <Header />
      <div style={{ minHeight: '80vh', padding: '20px' }}>
        {isAuthenticated ? <AuthenticatedView /> : <UnauthenticatedView />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
