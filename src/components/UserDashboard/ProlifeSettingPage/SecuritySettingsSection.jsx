import React, { useState } from 'react';
import Card from './Card';
import Button from '../../PrimaryButton';
import ToggleSwitch from './ToggleSwitch';

const SecuritySettingsSection = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <Card title="Security Settings" >
      <Button text="Change Password" className="mb-4" />
      <ToggleSwitch
        label="Enable Two-Factor Authentication"
        checked={twoFactorEnabled}
        onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
      />
      <Button text="View Login Activity" />
    </Card>
  );
};

export default SecuritySettingsSection;
