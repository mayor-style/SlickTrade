import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const ChartWidget = () => {
  // Independent filter states for left and right sections
  const [leftFilter, setLeftFilter] = useState('weekly');
  const [rightFilter, setRightFilter] = useState('weekly');

  // Chart data for left section (Transactions and Amounts)
  const leftChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: leftFilter === 'weekly' ? 'Transactions Completed' : 'Transactions (Monthly)',
        data: leftFilter === 'weekly' ? [5, 8, 6, 9, 7, 4, 6] : [50, 60, 70, 80, 90, 100, 120],
        backgroundColor: '#ffd700',
        borderColor: '#ffd700',
        borderWidth: 1,
      },
      {
        label: leftFilter === 'weekly' ? 'Total Amounts Processed' : 'Amounts (Monthly)',
        data: leftFilter === 'weekly' ? [200, 300, 250, 400, 350, 150, 280] : [2000, 3000, 2500, 4000, 3500, 1500, 2800],
        backgroundColor: '#8ac926',
        borderColor: '#8ac926',
        borderWidth: 1,
      },
    ],
  };

  // Chart data for right section (User Ratings Over Time)
  const rightChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'User Ratings Over Time',
        data: [4.5, 4.6, 4.8, 4.7, 4.9, 5, 4.8],
        backgroundColor: '#ff595e',
        borderColor: '#ff595e',
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows chart to fill container width
    plugins: {
      legend: { display: true, position: 'top' },
    },
    scales: {
      x: { ticks: { color: '#ccc' }, grid: { color: '#444' } },
      y: { ticks: { color: '#ccc' }, grid: { color: '#444' } },
    },
  };

  return (
    <div className="flex max-md:flex-col gap-6 w-full">
      {/* Left Section */}
      <div className=" bg-glass backdrop-blur-lg border border-dark-gray md:w-[50%] rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Transactions <span> Overview</span></h2>
          <select
            value={leftFilter}
            onChange={(e) => setLeftFilter(e.target.value)}
            className="bg-dark-gray text-white text-sm rounded-md px-2 py-1 border border-gray-500"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="h-64">
          <Bar data={leftChartData} options={chartOptions} />
        </div>
      </div>

      {/* Right Section */}
      <div className=" bg-glass backdrop-blur-lg border border-dark-gray md:w-[47%] rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Transaction <span>Ratings</span></h2>
          <select
            value={rightFilter}
            onChange={(e) => setRightFilter(e.target.value)}
            className="bg-dark-gray text-white text-sm rounded-md px-2 py-1 border border-gray-500"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div className="h-64">
          <Line data={rightChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ChartWidget;
