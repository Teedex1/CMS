import React from 'react';
import ReactDOM from 'react-dom';  // Correct import for React 16
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Standard for React 16
);

// You can still use reportWebVitals if necessary
reportWebVitals();
