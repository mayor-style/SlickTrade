import React from 'react';
import Card from './Card';
import Button from '../../PrimaryButton';

const LinkedAccountsSection = () => {
  return (
    <Card title="Linked Accounts">
      <p>PayPal: Linked</p>
      <p>Google: Linked</p>
      <div className="flex items-center mt-4 gap-[20px]">
      <Button text="Link New Account" className="max-xs:text-sm" />
      <Button text="Unlink Account" className="max-xs:text-sm"/>
      </div>
    </Card>
  );
};

export default LinkedAccountsSection;
