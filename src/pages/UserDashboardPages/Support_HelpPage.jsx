// src/pages/SupportPage.jsx
import React from "react";
import DashboardWelcomeMessage from '../../components/DashboardWelcomeMessage'
import SupportHeader from "../../components/UserDashboard/Help_SupportPage/SupportHeader";
import SearchBar from "../../components/UserDashboard/Help_SupportPage/SearchBar";
import QuickActions from "../../components/UserDashboard/Help_SupportPage/QuickActions";
import FAQSection from "../../components/UserDashboard/Help_SupportPage/FAQSection";
import ContactForm from "../../components/UserDashboard/Help_SupportPage/ContactForm";
import Tutorials from "../../components/UserDashboard/Help_SupportPage/Tutorials";
import LiveChatWidget from "../../components/UserDashboard/Help_SupportPage/LiveChatWidget";

const SupportPage = () => {
  return (
    <div className=" relative min-h-screen">

    <div className="bg-glass relative backdrop-blur-lg rounded-lg p-4">
      {/* Header Section */}
      <DashboardWelcomeMessage Header={'Support &'} spanHeader={'Help'} subtext={"Need Assistance? We're here to help. Browse our resources or contact us directly. "} />

      {/* Search Bar */}
      <div className="py-6">
        <SearchBar />
      </div>

      {/* Quick Action Buttons */}
      <div className="py-4">
        <QuickActions />
      </div>

      {/* FAQ Section */}
      <div className="py-6">
        <FAQSection />
      </div>

      {/* Contact Form */}
      <div className="py-6 bg-glass shadow-lg rounded-lg max-w-4xl mx-auto p-6">
        <ContactForm />
      </div>

      {/* Tutorials Section */}
      <div className="py-6">
        <Tutorials />
      </div>

    </div>
      {/* Live Chat Widget */}
      <LiveChatWidget />
    </div>
  );
};

export default SupportPage;
