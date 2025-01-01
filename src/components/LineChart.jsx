import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data, options, title, filterOptions, filterValue, onFilterChange }) => {
  return (
    <div className="bg-glass backdrop-blur-lg border border-dark-gray rounded-lg p-4">
      <div className="flex justify-between gap-1 items-center mb-4">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {filterOptions && (
          <select
            value={filterValue}
            onChange={onFilterChange}
            className="bg-dark-gray text-white text-sm rounded-md px-2 py-1 border border-gray-500"
          >
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
