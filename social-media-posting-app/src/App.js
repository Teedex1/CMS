import React from 'react';
import './App.css';
import logo from './logo.svg'; // Import your logo image

const App = () => {
  const handleButtonClick = (action) => {
    alert(`You clicked: ${action}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />

        <div className="content">
          <div className="text-section">
            <h1>Welcome to the Social Media Posting App</h1>
            <p>
              Your one-stop solution for posting across multiple social media platforms. 
              Connect, share, and engage with your audience like never before!
            </p>
          </div>

          <div className="button-container">
            <button className="App-button" onClick={() => handleButtonClick('Get Started')}>
              Get Started
            </button>
            <div className="auth-buttons">
              <button className="App-button" onClick={() => handleButtonClick('Sign Up')}>
                Sign Up
              </button>
              <button className="App-button" onClick={() => handleButtonClick('Log In')}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
