import React from 'react'
import DashboardWelcomeMessage from '../../components/DashboardWelcomeMessage'
import HighlightLastWord from '../../components/HighlightLastWord'

const Support_HelpPage = () => {
  return (
    <div>
      <DashboardWelcomeMessage Header={'Support'} spanHeader={'Center'} subtext={'Need assistance? Browse our help topics or connect with our support team.'} />

      <div className="bg-gray rounded-lg">
     <h1 className="text-center py-10 text-lg font-semibold">
          <HighlightLastWord text="No Contents Yet..." />
        </h1>
     </div>
    </div>
  )
}

export default Support_HelpPage
