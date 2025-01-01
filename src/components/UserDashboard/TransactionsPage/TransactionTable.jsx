import React, { useState, useMemo } from 'react';
import { useTable, usePagination, useFilters, useGlobalFilter } from 'react-table';
//import mockData from './mockData'; // Import mock data here


const TransactionTable = () => {

    
// Sample Mock Data
const mockData = Array.from({ length: 17 }, (_, i) => ({
    transactionId: `T${1000 + i}`,
    dateTime: `2024-12-${(i % 31) + 1} 12:00:00`,
    vendor: i % 2 === 0 ? 'Vendor A' : 'Vendor B',
    amount: `${(Math.random() * 500).toFixed(2)} USD`,
    type: i % 3 === 0 ? 'PayPal Pickup' : 'Zelle Pickup',
    status: i % 4 === 0 ? 'Completed' : i % 3 === 0 ? 'Pending' : 'Disputed',
  }));

  const columns = useMemo(
    () => [
      { Header: 'Transaction ID', accessor: 'transactionId' },
      { Header: 'Date/Time', accessor: 'dateTime' },
      { Header: 'Vendor Name', accessor: 'vendor' },
      { Header: 'Amount', accessor: 'amount' },
      { Header: 'Transaction Type', accessor: 'type' },
      { Header: 'Status', accessor: 'status' },
    ],
    []
  );

  const [data, setData] = useState(mockData);
  const [filters, setFilters] = useState({ type: '', vendor: '', status: '', search: '', dateRange: [] });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const resetFilters = () => {
    setFilters({ type: '', vendor: '', status: '', search: '', dateRange: [] });
    setData(mockData);
  };

  return (
    <div className="container bg-gray h-full my-8 text-white w-full border border-dark-gray px-4 py-6 rounded-lg">
      <div className="mb-3 p-3 bg-glass rounded">
        <div className="flex md:items-center gap-3 max-md:flex-col">
          <div className="col-md-2 ">
            <select
              name="type"
              className="form-control bg-gray"
              value={filters.type}
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              <option value="PayPal Pickup">PayPal Pickup</option>
              <option value="Zelle Pickup">Zelle Pickup</option>
            </select>
          </div>
          <div className="col-md-2">
            <select
              name="vendor"
              className="form-control bg-gray"
              value={filters.vendor}
              onChange={handleFilterChange}
            >
              <option value="">All Vendors</option>
              <option value="Vendor A">Vendor A</option>
              <option value="Vendor B">Vendor B</option>
            </select>
          </div>
          <div className="col-md-2">
            <select
              name="status"
              className="form-control bg-gray"
              value={filters.status}
              onChange={handleFilterChange}
            >
              <option value="">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Disputed">Disputed</option>
            </select>
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="search"
              className="form-control bg-gray"
              placeholder="Search Transactions"
              value={filters.search}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-2 bg-red-600">
            <button className="btn btn-danger w-100" onClick={resetFilters}>
              Reset Filters
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border p-3 bg-glass rounded-lg border-dark-gray overflow-auto scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-gray">
      <table className="table w-full table-bordered text-left text-sm" {...getTableProps()}>
        <thead className='bg-glass'> 
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className='px-4 py-2 font-medium'>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className='font-montserrat text-xs'>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => alert(`Clicked: ${row.values.transactionId}`)}
              className="border-b text-[#c2c2c2] border-dark-gray hover:bg-gray"
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}
                  className="px-4 py-2"
                  >
                    {cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      <div className="pagination flex justify-between">
        <button className="btn btn-primary bg-gold" onClick={previousPage} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          Page {pageIndex + 1} of {pageOptions.length}
        </span>
        <button className="btn btn-primary bg-gold" onClick={nextPage} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionTable;

