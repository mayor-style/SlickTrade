import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SignUpLoginPage from './pages/FormsPages/SignUpLoginPage';
import ScrollToTop from './ScrollToTop';
import SignIn from './pages/FormsPages/SignIn';
import SignUpUser from './pages/FormsPages/SignUpUser';
import SignUpVendor from './pages/FormsPages/SignUpVendor';
import ResetPassword from './pages/FormsPages/ResetPass';

function App() {
  const location = useLocation(); // Hook to get the current route
  const hideNavAndFooterRoutes = ['/signup-signin', 
                                  '/login',
                                  '/signup-user',
                                  '/signup-vendor',
                                  '/reset-password',
                                
                                ]; // Routes where Navbar and Footer should be hidden

  const shouldHideNavAndFooter = hideNavAndFooterRoutes.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Navbar */}
      {!shouldHideNavAndFooter && <Navbar />}
      <ScrollToTop />
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup-signin" element={<SignUpLoginPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup-user" element={<SignUpUser />} />
        <Route path="/signup-vendor" element={<SignUpVendor />} />
        <Route path="/reset-password" element={<ResetPassword />} />
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
