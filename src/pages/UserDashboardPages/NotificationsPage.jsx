import React from 'react'
import DashboardWelcomeMessage from '../../components/DashboardWelcomeMessage'
import HighlightLastWord from '../../components/HighlightLastWord'

const NotificationsPage = () => {
  return (
    <div>
      <DashboardWelcomeMessage Header={'Notifications'} subtext={'Stay informed with real-time updates on transactions, offers, and platform activties.'} />

     <div className="bg-gray rounded-lg">
     <h1 className="text-center py-10 text-lg font-semibold">
          <HighlightLastWord text="No Contents Yet..." />
        </h1>
     </div>
    </div>
  )
}

export default NotificationsPage
