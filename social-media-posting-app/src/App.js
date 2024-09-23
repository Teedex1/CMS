import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the CMS</h1>
        <p>Your one-stop solution for posting across multiple social media platforms.</p>
        <a
          className="App-link"
          href="www.facebook.com/tundeRogunmodede?mibexid=LQQJ4d"
          onClick={() => alert('Start posting!')}
        >
          Get Started
        </a>
      </header>
    </div>
  );
};

export default App;
