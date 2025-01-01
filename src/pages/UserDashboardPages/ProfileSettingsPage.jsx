import React from 'react'
import DashboardWelcomeMessage from '../../components/DashboardWelcomeMessage'
import HighlightLastWord from '../../components/HighlightLastWord'

const ProfileSettingsPage = () => {
  return (
    <div>
      <DashboardWelcomeMessage Header={'Profile'} spanHeader={'Settings'} subtext={'Manage your personal information, update your preferences, and enhnace your account security.'} />

      <div className="bg-gray rounded-lg">
     <h1 className="text-center py-10 text-lg font-semibold">
          <HighlightLastWord text="No Contents Yet..." />
        </h1>
     </div>
    </div>
  )
}

export default ProfileSettingsPage
