import React from 'react'
import DashboardWelcomeMessage from '../../components/DashboardWelcomeMessage'
import HighlightLastWord from '../../components/HighlightLastWord'

const Messages_Chats = () => {
  return (
    <div>
    <DashboardWelcomeMessage Header={'Messages'}  subtext={'Stay conncetd with vendors and keep track of all your conversations in one place'}/>

    <div className="bg-gray rounded-lg">
     <h1 className="text-center py-10 text-lg font-semibold">
          <HighlightLastWord text="No Contents Yet..." />
        </h1>
     </div>
      
    </div>
  )
}

export default Messages_Chats
