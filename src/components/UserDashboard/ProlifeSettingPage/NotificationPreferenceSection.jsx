import React, { useState } from 'react';
import Card from './Card';
import ToggleSwitch from './ToggleSwitch';
import Button from '../../PrimaryButton';

const NotificationPreferencesSection = () => {
  const [transactionNotifications, setTransactionNotifications] = useState(false);
  const [generalUpdates, setGeneralUpdates] = useState(false);
  const [vendorAlerts, setVendorAlerts] = useState(false);

  return (
    <Card title="Notification Preferences">
      <ToggleSwitch
        label="Transaction Notifications"
        checked={transactionNotifications}
        onChange={() => setTransactionNotifications(!transactionNotifications)}
      />
      <ToggleSwitch
        label="General Updates and Offers"
        checked={generalUpdates}
        onChange={() => setGeneralUpdates(!generalUpdates)}
      />
      <ToggleSwitch
        label="Vendor Interaction Alerts"
        checked={vendorAlerts}
        onChange={() => setVendorAlerts(!vendorAlerts)}
      />
      <Button text="Save Preferences" />
    </Card>
  );
};

export default NotificationPreferencesSection;
