import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const TransactionCharts = () => {
  const [transactionFilter, setTransactionFilter] = useState('monthly');
  const [disputeFilter, setDisputeFilter] = useState('monthly');

  // Sample Data
  const transactionTrends = [
    { period: 'Jan', count: 50 },
    { period: 'Feb', count: 75 },
    { period: 'Mar', count: 100 },
    { period: 'Apr', count: 125 },
  ];

  const categoryDistribution = [
    { name: 'PayPal', value: 40 },
    { name: 'Zelle', value: 30 },
    { name: 'Credit Card', value: 20 },
    { name: 'Others', value: 10 },
  ];

  const vendorPerformance = [
    { vendor: 'Vendor A', value: 50 },
    { vendor: 'Vendor B', value: 80 },
    { vendor: 'Vendor C', value: 30 },
    { vendor: 'Vendor D', value: 40 },
  ];

  const disputeTrends = [
    { period: 'Jan', disputes: 5 },
    { period: 'Feb', disputes: 8 },
    { period: 'Mar', disputes: 3 },
    { period: 'Apr', disputes: 6 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="flex flex-col gap-6">
      {/* Row 1 */}
      <div className="flex max-md:flex-col gap-6 w-full">
        {/* Transaction Trends */}
        <div className="bg-glass backdrop-blur-lg border w-full border-dark-gray md:w-[50%] rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-semibold text-lg">Transaction Trends</h2>
            <select
              value={transactionFilter}
              onChange={(e) => setTransactionFilter(e.target.value)}
              className="bg-dark-gray text-white text-sm rounded-md px-2 py-1 border border-gray-500"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="w-full h-[250px]">
            <ResponsiveContainer>
              <LineChart data={transactionTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#00C49F" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-glass backdrop-blur-lg border border-dark-gray md:w-[47%] w-full rounded-lg p-4">
          <h2 className="text-white font-semibold text-lg mb-4">Category Distribution</h2>
          <div className="w-full h-[250px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  fill="#8884d8"
                  label
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex max-md:flex-col gap-6 w-full">
        {/* Vendor Performance */}
        <div className="bg-glass backdrop-blur-lg w-full border border-dark-gray md:w-[50%] rounded-lg p-4">
          <h2 className="text-white font-semibold text-lg mb-4">Vendor Performance</h2>
          <div className="w-full h-[250px]">
            <ResponsiveContainer>
              <BarChart data={vendorPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="vendor" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#FFBB28" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dispute Trends */}
        <div className="bg-glass backdrop-blur-lg w-full border border-dark-gray md:w-[47%] rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-semibold text-lg">Dispute Trends</h2>
            <select
              value={disputeFilter}
              onChange={(e) => setDisputeFilter(e.target.value)}
              className="bg-dark-gray text-white text-sm rounded-md px-2 py-1 border border-gray-500"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="w-full h-[250px]">
            <ResponsiveContainer>
              <LineChart data={disputeTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="disputes" stroke="#FF8042" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCharts;
