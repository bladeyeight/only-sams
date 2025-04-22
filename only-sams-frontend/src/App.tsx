import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Editorials from './components/Editorials';
import ReviewDetail from './components/ReviewDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:id" element={<ReviewDetail />} />
          <Route path="/editorials" element={<Editorials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
