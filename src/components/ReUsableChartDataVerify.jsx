import React from 'react';
import { Chart as ChartJS } from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

const ReusableChartDataVerify = ({ type, data, options }) => {
  if (!data || !data.datasets || data.datasets.length === 0) {
    console.error('Chart data is missing or improperly formatted:', data);
    return <p className="text-white">No data available for this chart.</p>;
  }

  switch (type) {
    case 'line':
      return <Line data={data} options={options} />;
    case 'bar':
      return <Bar data={data} options={options} />;
    case 'pie':
      return <Pie data={data} options={options} />;
    default:
      console.error(`Unsupported chart type: ${type}`);
      return null;
  }
};

export default ReusableChartDataVerify;
