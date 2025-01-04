import React from 'react'
import DashboardWelcomeMessage from '../../components/DashboardWelcomeMessage'

import PersonalInfoSection from '../../components/UserDashboard/ProlifeSettingPage/PersonalInfoSection';

import SecuritySettingsSection from '../../components/UserDashboard/ProlifeSettingPage/SecuritySettingsSection';

import NotificationPreferencesSection from '../../components/UserDashboard/ProlifeSettingPage/NotificationPreferenceSection';

import LinkedAccountsSection from '../../components/UserDashboard/ProlifeSettingPage/LinkedAccountsSection';

import AccountManagementSection from '../../components/UserDashboard/ProlifeSettingPage/AccountManagementSection';



const ProfileSettingsPage = () => {
  return (
    <div>
      <DashboardWelcomeMessage Header={'Profile'} spanHeader={'Settings'} subtext={'Manage your personal information, update your preferences, and enhnace your account security.'} />

      <div className=" grid gap-4  grid-cols-1 lg:grid-cols-2">
        <PersonalInfoSection />
        <SecuritySettingsSection />
        <NotificationPreferencesSection />
        <LinkedAccountsSection />
        <AccountManagementSection />
      </div>
    </div>
  )
}

export default ProfileSettingsPage
