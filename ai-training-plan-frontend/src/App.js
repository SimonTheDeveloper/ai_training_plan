import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ minHeight: '80vh', padding: '20px' }}> {/* Ensures footer stays at bottom */}
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default App;
