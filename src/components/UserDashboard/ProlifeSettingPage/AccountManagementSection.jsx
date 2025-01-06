import React from 'react';
import Card from './Card';
import Button from '../../PrimaryButton';

const AccountManagementSection = () => {
  return (
    <Card title="Account Management">
      <Button text="Deactivate Account" className="mb-4" />
      <Button text="Delete Account" red={"bg-[red] bg-opacity-50"} className="mb-4" />
      <Button text="Download Data" />
    </Card>
  );
};

export default AccountManagementSection;
