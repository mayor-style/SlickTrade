import React from 'react'


const TransactionHistory = () => {
    const transactions = [
        {
          id: "TRX123456",
          date: "2024-12-27",
          amount: "$500",
          type: "PayPal ",
          vendor: "Vendor123",
          status: "Completed",
        },
        {
          id: "TRX123457",
          date: "2024-12-26",
          amount: "$230",
          type: "CashApp ",
          vendor: "Vendor456",
          status: "Pending",
        },
        {
          id: "TRX123458",
          date: "2024-12-25",
          amount: "$90",
          type: "Zelle ",
          vendor: "Vendor789",
          status: "Cancelled",
        },
        {
          id: "TRX123459",
          date: "2024-12-24",
          amount: "$980",
          type: "GiftCard Redeem",
          vendor: "Vendor101",
          status: "Disputed",
        },
        {
          id: "TRX123460",
          date: "2024-12-23",
          amount: "$794",
          type: "Purchase of Log",
          vendor: "Vendor202",
          status: "Completed",
        },
        {
          id: "TRX123461",
          date: "2024-12-22",
          amount: "$120",
          type: "PayPal ",
          vendor: "Vendor303",
          status: "Completed",
        },
        {
          id: "TRX123462",
          date: "2024-12-21",
          amount: "$600",
          type: "CashApp ",
          vendor: "Vendor404",
          status: "Pending",
        },
        {
          id: "TRX123463",
          date: "2024-12-20",
          amount: "$320",
          type: "GiftCard Redeem",
          vendor: "Vendor505",
          status: "Cancelled",
        },
        {
          id: "TRX123464",
          date: "2024-12-19",
          amount: "$500",
          type: "Zelle ",
          vendor: "Vendor606",
          status: "Disputed",
        },
        {
          id: "TRX123465",
          date: "2024-12-18",
          amount: "$125",
          type: "Purchase of Log",
          vendor: "Vendor707",
          status: "Completed",
        },
      ];
  return (
    <div className="bg-gray h-full text-white w-full border border-dark-gray px-4 py-6 rounded-lg">
    <h1 className="sm:text-2xl text-lg font-semibold mb-2">
      Transaction <span>History</span>
    </h1>
    <div className="w-fit my-2">
      <button className="bg-gold transition-all ease-in-out duration-200 text-sm text-black px-4 py-2 rounded-md hover:bg-opacity-80">
        View All
      </button>
    </div>
    <div className="w-full border p-3 rounded-lg border-dark-gray overflow-auto scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-gray">
      <table className="table-auto w-full text-left text-sm">
        <thead className="bg-glass">
          <tr>
            <th className="px-4 font-medium py-2">Transaction ID</th>
            <th className="px-4 font-medium py-2">Date</th>
            <th className="px-4 font-medium py-2">Amount</th>
            <th className="px-4 font-medium py-2">Transaction Type</th>
            <th className="px-4 font-medium py-2">Vendor</th>
            <th className="px-4 font-medium py-2">Status</th>
          </tr>
        </thead>
        <tbody className='font-montserrat text-xs'>
          {transactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="border-b text-[#c2c2c2] border-dark-gray hover:bg-gray"
            >
              <td className="px-4 py-2">{transaction.id}</td>
              <td className="px-4 py-2">{transaction.date}</td>
              <td className="px-4 py-2">{transaction.amount} </td>
              <td className="px-4 py-2">{transaction.type}</td>
              <td className="px-4 py-2">{transaction.vendor}</td>
              <td
                className={`p-3 ${
                  transaction.status === "Completed"
                    ? "text-green-500"
                    : transaction.status === "Pending"
                    ? "text-yellow-500"
                    : transaction.status === "Cancelled"
                    ? "text-red-500"
                    : "text-purple-500"
                }`}
              >
                <p
                  className={`text-xs p-1 px-2 rounded-md text-white font-semibold flex items-center justify-center ${
                    transaction.status === "Completed"
                      ? "bg-green-500"
                      : transaction.status === "Pending"
                      ? "bg-yellow-500"
                      : transaction.status === "Cancelled"
                      ? "bg-red-500"
                      : "bg-purple-500"
                  }`}
                >
                  {transaction.status}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default TransactionHistory
