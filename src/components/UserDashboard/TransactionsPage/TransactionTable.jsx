import React, { useState } from "react";

const TransactionsTable = ({ transactions, rowsPerPage, tableTitle, viewAll=false, onRowClick }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = transactions.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="bg-gray my-8 text-white w-full border border-dark-gray px-4 py-6 rounded-lg ">
      <div className="mb-4">{tableTitle}</div> {/* Use the custom title */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by Transaction ID"
          className="bg-glass border max-sm:text-sm border-dark-gray px-4 py-2 rounded-lg w-full max-w-sm"
        />
        <select className="bg-glass text-white  border border-dark-gray max-sm:text-sm px-4 py-2 rounded-lg">
          <option className="bg-dark-gray">Filter by Status</option>
          <option className="bg-dark-gray">Completed</option>
          <option className="bg-dark-gray">Pending</option>
          <option className="bg-dark-gray">Cancelled</option>
          <option className="bg-dark-gray">Disputed</option>
        </select>
        <button className="bg-gold max-sm:text-sm text-black px-4 py-2 rounded-lg hover:bg-opacity-80">
          Reset Filters
        </button>
        {viewAll &&
          <button className="bg-gold max-sm:text-sm text-black px-4 py-2 rounded-lg hover:bg-opacity-80">
          View All
        </button>
        }
      </div>
      <div className="border bg-glass p-3 rounded-lg border-dark-gray overflow-auto scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-gray">
        <table className="table-auto w-full text-left text-sm">
          <thead className="bg-glass">
            <tr>
              <th className="px-4 py-2">Transaction ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Transaction Type</th>
              <th className="px-4 py-2">Vendor</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="font-montserrat text-xs">
            {paginatedData.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b text-[#c2c2c2] border-dark-gray hover:bg-gray cursor-pointer"
                onClick={() => onRowClick(transaction)} // Trigger the handler passed as a prop
              >
                <td className="px-4 py-2">{transaction.id}</td>
                <td className="px-4 py-2">{transaction.date}</td>
                <td className="px-4 py-2">${transaction.amount}</td>
                <td className="px-4 py-2">{transaction.service}</td>
                <td className="px-4 py-2">{transaction.vendor.name}</td>
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
      {!viewAll &&
      
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="bg-gray transition-all duartion-200 ease-in-out hover:bg-gold hover:text-black text-white px-4 py-2 rounded-md border border-dark-gray max-sm:text-sm hover:border-none"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(transactions.length / rowsPerPage)}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(transactions.length / rowsPerPage))
            )
          }
          className="bg-gray transition-all duartion-200 ease-in-out hover:bg-gold hover:text-black text-white px-4 py-2 rounded-md border border-dark-gray max-sm:text-sm hover:border-none"
        >
          Next
        </button>
      </div>
      }
      <div className="flex justify-center items-center mt-10 hover:bg-opacity-80 transition-all max-sm:text-sm active:bg-opacity-100 duration-200 ease-in-out rounded-lg bg-gold text-black py-2">
      <button>Start New Transaction</button>
      </div>

      
    </div>
  );
};

export default TransactionsTable;
