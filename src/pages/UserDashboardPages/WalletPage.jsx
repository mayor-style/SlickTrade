import React from 'react'
import DashboardWelcomeMessage from '../../components/DashboardWelcomeMessage'
import HighlightLastWord from '../../components/HighlightLastWord'

const WalletPage = () => {
  return (
    <div>
      <DashboardWelcomeMessage Header={'Wallet'} subtext={'View your balances, amange transactions, and track your earnings effortlessly.'} />

      <div className="bg-gray rounded-lg">
     <h1 className="text-center py-10 text-lg font-semibold">
          <HighlightLastWord text="No Contents Yet..." />
        </h1>
     </div>
    </div>
  )
}

export default WalletPage
