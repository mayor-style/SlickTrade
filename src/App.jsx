import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Example Route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

// Example component to use in routes
function Home() {
  return <div>Welcome to the Home Page</div>;
}

function About() {
  return <div>About Us</div>;
}

export default App;
