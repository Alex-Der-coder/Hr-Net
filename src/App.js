import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './components/index';
import Employer from './components/employer'
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<div className="App">
        <Index />
      </div>} />
      <Route path="/employer" element={<div className="App">
        <Employer />
      </div>} />
    </Routes>
  </Router>
  );
}

export default App;
