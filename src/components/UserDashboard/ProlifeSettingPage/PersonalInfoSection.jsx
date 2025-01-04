import React, { useState } from 'react';
import Card from './Card';
import FormField from './FormField';
import Button from '../../PrimaryButton';

const PersonalInfoSection = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <Card title="Personal Information">
      <FormField
        label="Full Name"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Enter your full name"
      />
      <FormField
        label="Email Address"
        type="email"
        value="johndoe@example.com"
        readOnly={true}
      />
      <FormField
        label="Phone Number"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Add a valid phone number"
      />
      <FormField label="Country" type="text" value="Nigeria" readOnly={true} />
      <Button text="Save Changes" />
    </Card>
  );
};

export default PersonalInfoSection;
