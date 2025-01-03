import React, { useEffect, useState } from 'react';
import DropdownSelect from '../../DropdownSelect';
import AmountInput from '../../AmountInput';
import NotesTextarea from '../../NotesTextarea';
import PrimaryButton from '../../PrimaryButton';

const TransactionForm = ({ onFindVendors, currentRate }) => {
  const [formData, setFormData] = useState({
    service: '',
    amount: '',
    notes: '',
  });

  const [Error, setError] = useState('');
  const [nairaAmount, setNairaAmount] = useState(''); // For the conversion display

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });

    // Update Naira conversion if the "amount" is being updated
    if (key === 'amount') {
      const dollarValue = parseFloat(value); // Ensure the value is parsed as a number
      if (!isNaN(dollarValue) && currentRate) {
        setNairaAmount((dollarValue * currentRate).toLocaleString()); // Format as currency
      } else {
        setNairaAmount(''); // Clear if invalid input
      }
    }
  };

  useEffect(() => {
    if (Error) {
      alert(Error);
    }
  }, [Error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.service || !formData.amount) {
      setError('Please input all required infos to get a matching vendor.');
    } else {
      console.log('Finding vendors...');
      setError('');
      onFindVendors(formData);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="bg-glass backdrop-blur-lg border px-4 py-6 rounded-lg">
        <DropdownSelect
          label="Choose the service you need"
          options={['PayPal', 'Zelle', 'CashApp', 'Venmo']}
          value={formData.service}
          onChange={(value) => handleChange('service', value)}
        />
        <AmountInput
          label="Enter the amount you want to send/receive (in USD)"
          value={formData.amount}
          onChange={(value) => handleChange('amount', value)}
        />
        {/* Naira Conversion Display */}
        {formData.amount && (
          <div className="my-4 text-gray">
            <p>
              <strong>Converted Amount (NGN):</strong> ₦{nairaAmount || '0'}
            </p>
          </div>
        )}
        <NotesTextarea
          label="Any specific details about your request?"
          value={formData.notes}
          onChange={(value) => handleChange('notes', value)}
        />
        <PrimaryButton type="submit" text="Find Vendors" />
      </form>

      {Error && (
        <p className="text-center bg-white backdrop-blur-lg font-bold py-4 rounded-md mt-4 text-red-500">
          {Error}
        </p>
      )}
    </div>
  );
};

export default TransactionForm;
