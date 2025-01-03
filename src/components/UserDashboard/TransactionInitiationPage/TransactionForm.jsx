import React, { useState } from 'react';
import DropdownSelect from '../../DropdownSelect';
import AmountInput from '../../AmountInput';
import NotesTextarea from '../../NotesTextarea';
import PrimaryButton from '../../PrimaryButton';

const TransactionForm = ({ onFindVendors }) => {
  const [formData, setFormData] = useState({
    service: '',
    amount: '',
    notes: '',
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.service && formData.amount) {
        console.log('finding vendors')
      onFindVendors(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-glass backdrop-blur-lg border px-4 py-6 rounded-lg">
      <DropdownSelect
        label="Choose the service you need"
        options={['PayPal', 'Zelle', 'CashApp', 'Venmo']}
        value={formData.service}
        onChange={(value) => handleChange('service', value)}
      />
      <AmountInput
        label="Enter the amount you want to send/receive"
        value={formData.amount}
        onChange={(value) => handleChange('amount', value)}
      />
      <NotesTextarea
        label="Any specific details about your request?"
        value={formData.notes}
        onChange={(value) => handleChange('notes', value)}
      />
      <PrimaryButton type="submit" text="Find Vendors" />
    </form>
  );
};

export default TransactionForm;
