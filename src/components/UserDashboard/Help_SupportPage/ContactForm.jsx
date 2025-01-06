// src/components/ContactForm/ContactForm.jsx
import React from "react";
import PrimaryButton from '../../PrimaryButton'

const ContactForm = () => {
  return (
    <form className="space-y-4 max-xs:text-sm text-white ">
      <input type="text" placeholder="Full Name" className="w-full p-3 bg-glass border border-dark-gray rounded-lg" />
      <input type="email" placeholder="Email Address" className="w-full bg-glass border border-dark-gray p-3 rounded-lg" />
      <select className="w-full p-3 bg-glass border border-dark-gray  rounded-lg">
        <option>Select Issue Type</option>
        <option>Technical Issue</option>
        <option>Billing Issue</option>
        <option>Other</option>
      </select>
      <textarea
        placeholder="Describe your issue in detail..."
        className="w-full p-3 bg-glass border border-dark-gray rounded-lg h-32"
      />
      <input type="file" className="w-full" />
      <PrimaryButton type="submit" text={'Submit'} /> 
    </form>
  );
};

export default ContactForm;
