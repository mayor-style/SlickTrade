import React, { useState } from 'react';
import LineChartComponent from '../../LineChart'; // Reusable Line Chart Component
import BarChartComponent from '../../BarChart'; // Reusable Bar Chart Component
import PieChart from '../../PieChart'; // Reusable Pie Chart Component
import HighlightLastWord from "../../HighlightLastWord";

const TransactionCharts = () => {
  const [transactionFilter, setTransactionFilter] = useState('monthly');
  const [disputeFilter, setDisputeFilter] = useState('monthly');

  // category pie chart details
  const categoryDistribution = [
    { name: 'PayPal', value: 40 },
    { name: 'Zelle', value: 30 },
    { name: 'Credit Card', value: 20 },
    { name: 'Others', value: 10 },
  ];

  // vendor bar chart details
  const vendorPerformance = {
    labels: ['Vendor A', 'Vendor B', 'Vendor C', 'Vendor D', 'Vendor E'],
    datasets: [
      {
        label:  'Vendors performance',
        data:  [50, 60, 70, 80, 90],
        backgroundColor: '#ffd700',
        borderColor: '#ffd700',
        borderWidth: 1,
      }],
    };

  // Dispute line chart details
  const disputeTrends = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Dispute Count(monthly)',
        data: [5, 8, 3, 6, 15, 1],
        backgroundColor: 'gold',
        borderColor: '#ff595e',
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  // Transaction line chart details
  const transactionTrends = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Transactions Count(monthly)',
        data: [15, 20, 35, 49, 100, 140, 135],
        backgroundColor: '#ff595e',
        borderColor: '#ff595e',
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="flex flex-col gap-6">
      {/* ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Transaction Trends Line Chart */}
        <div className="">
        <LineChartComponent
            title={<HighlightLastWord text={'Transaction Trends'}/> }
            data={transactionTrends}
            options={chartOptions}
            filterOptions={[
              { value: 'weekly', label: 'Weekly' },
              { value: 'monthly', label: 'Monthly' },
              { value: 'yearly', label: 'Yearly' },
            ]}      
          />
        </div>

        {/* Category Distribution Pie Chart */}        
        <div className="bg-light-black backdrop-blur-lg border border-gray w-full rounded-lg p-4">
          <h2 className="text-white font-semibold text-lg mb-4">
            Category <span>Distribution</span>
          </h2>
          <div className="w-full h-[250px]">
            <PieChart
              data={categoryDistribution}
              dataKey="value"
              nameKey="name"
              colors={COLORS}
            />
          </div>
        </div>
        
      </div>
      

      {/* ROW 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Vendor Performance Bar Chart */}
        <div className="">
        <BarChartComponent
        title={<HighlightLastWord text={'Vendor Trends'} />}
        data={vendorPerformance}
        options={chartOptions}  
      />
      </div>
        

        {/* Dispute Trends Line Chart */}
        <div className="">
        <LineChartComponent
            title={<HighlightLastWord text={'Dispute Trends'}/> }
            data={disputeTrends}
            options={chartOptions}
            filterOptions={[
              { value: 'weekly', label: 'Weekly' },
              { value: 'monthly', label: 'Monthly' },
              { value: 'yearly', label: 'Yearly' },
            ]}
            filterValue={disputeFilter}      
          />
          </div>
         
      </div>
    </div>
  );
};

export default TransactionCharts;
