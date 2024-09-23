import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import PostComposer from './components/PostComposer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/compose" element={<PostComposer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;