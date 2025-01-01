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
import VerifyEmail from './pages/FormsPages/VerifyEmail';
import EmailVerifyResult from './pages/FormsPages/EmailVerifyResult';
import Sidebar from './components/UserDashboard/Sidebar';
import Dashboard from './pages/UserDashboardPages/Dashboard';
import TransactionPage from './pages/UserDashboardPages/TransactionPage';
import VendorsPage from './pages/UserDashboardPages/VendorsPage';
import WalletPage from './pages/UserDashboardPages/WalletPage';
import Messages_Chats from './pages/UserDashboardPages/Messages_Chats';
import ProfileSettingsPage from './pages/UserDashboardPages/ProfileSettingsPage';
import Support_HelpPage from './pages/UserDashboardPages/Support_HelpPage';
import NotificationsPage from './pages/UserDashboardPages/NotificationsPage';

function App() {
  const location = useLocation();
  const hideNavAndFooterRoutes = [
    '/signup-signin',
    '/login',
    '/signup-user',
    '/signup-vendor',
    '/reset-password',
    '/email-verification',
    '/email-verification-result',
    '/user',
  ];

  const shouldHideNavAndFooter = hideNavAndFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHideNavAndFooter && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup-signin" element={<SignUpLoginPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup-user" element={<SignUpUser />} />
        <Route path="/signup-vendor" element={<SignUpVendor />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-verification" element={<VerifyEmail />} />
        <Route path="/email-verification-result" element={<EmailVerifyResult />} />
        <Route path="/user" element={<Sidebar />}>
          <Route index element={<Dashboard />} /> {/* Default */}
          <Route path="dashboard" element={<Dashboard />} /> {/* Child */}
          <Route path="transactions" element={<TransactionPage />} /> {/* Child */}
          <Route path="vendors" element={<VendorsPage />} /> {/* Child */}
          <Route path="wallet" element={<WalletPage />} /> {/* Child */}
          <Route path="messages" element={<Messages_Chats />} /> {/* Child */}
          <Route path="profile-settings" element={<ProfileSettingsPage />} /> {/* Child */}
          <Route path="support" element={<Support_HelpPage />} /> {/* Child */}
          <Route path="notifications" element={<NotificationsPage />} /> {/* Child */}
        </Route>
      </Routes>
      {!shouldHideNavAndFooter && <Footer />}
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
