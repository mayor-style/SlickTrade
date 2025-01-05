import React, { useState } from 'react';
import DashboardWelcomeMessage from '../../components/DashboardWelcomeMessage'
import Header from '../../components/UserDashboard/NotificationsPage/Header';
import Tabs from '../../components/UserDashboard/NotificationsPage/Tabs';
import NotificationsList from '../../components/UserDashboard/NotificationsPage/NotificationsList';
import SearchBar from '../../components/UserDashboard/NotificationsPage/SearchBar';
import BulkActions from '../../components/UserDashboard/NotificationsPage/BulkActions';
import EmptyState from '../../components/UserDashboard/NotificationsPage/EmptyState';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('all'); // State to track active tab
  const [notifications, setNotifications] = useState([]); // Sample empty notifications

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div className="bg-glass rounded-xl backdrop-blur-sm text-white min-h-screen p-6">
      {/* Header Section */}
      <Header title="Notifications" subtitle="Stay updated with the latest activities on your account." />
      
      {/* Tabs Section */}
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      
      {/* Search and Bulk Actions */}
      <div className="flex justify-center xl:justify-between items-center gap-4 flex-wrap mt-4">
        <SearchBar placeholder="Search notifications..." />
        <BulkActions onMarkAllRead={() => console.log('Mark All Read')} onClearAll={() => console.log('Clear All')} />
      </div>

      {/* Notifications List or Empty State */}
      {notifications.length > 0 ? (
        <NotificationsList notifications={notifications} />
      ) : (
        <EmptyState
          icon="bell"
          title="You have no new notifications."
          subtitle="Check back later or explore the platform for more updates."
          cta="Go to Dashboard"
          onCtaClick={() => console.log('Go to Dashboard')}
        />
      )}
    </div>
  );
};

export default Notifications;
