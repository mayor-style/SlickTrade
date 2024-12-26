import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SignUpLoginPage from './pages/SignUpLoginPage';

function App() {
  const location = useLocation(); // Hook to get the current route
  const hideNavAndFooterRoutes = ['/signup-signin']; // Routes where Navbar and Footer should be hidden

  const shouldHideNavAndFooter = hideNavAndFooterRoutes.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Navbar */}
      {!shouldHideNavAndFooter && <Navbar />}

      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup-signin" element={<SignUpLoginPage />} />
        {/* Add more routes here as needed */}
      </Routes>

      {/* Conditionally render Footer */}
      {!shouldHideNavAndFooter && <Footer />}
    </>
  );
}

// Wrap App with Router for `useLocation` to work
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
