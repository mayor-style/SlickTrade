import React, { useState } from 'react';
import HighlightLastWord from '../../HighlightLastWord'
import LineChart from '../../LineChart';
import BarChart from '../../BarChart';
import  BarChartComponent  from '../../BarChartComponent'

const ChartWidget = () => {
  const [leftFilter, setLeftFilter] = useState('weekly');
  const [rightFilter, setRightFilter] = useState('weekly');

  const leftChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: leftFilter === 'weekly' ? 'Transactions Completed' : 'Transactions (Monthly)',
        data: leftFilter === 'weekly' ? [5, 8, 6, 9, 7, 4, 6] : [50, 60, 70, 80, 90, 100, 120],  backgroundColor: '#ffd700',
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

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top' },
    },
  };

  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-2 gap-6 w-full">
     <div className="h-full">
     <BarChart
        title={<HighlightLastWord text={"Transactions Overview"} />}
        data={leftChartData}
        options={chartOptions}
        filterOptions={[
          { value: 'weekly', label: 'Weekly' },
          { value: 'monthly', label: 'Monthly' },
        ]}
        filterValue={leftFilter}
        onFilterChange={(e) => setLeftFilter(e.target.value)}
      />
     </div>

     <div className="h-full">
     <LineChart
        title={<HighlightLastWord text={"Transaction Ratings"} />}
        data={rightChartData}
        options={chartOptions}
        filterOptions={[
          { value: 'weekly', label: 'Weekly' },
          { value: 'monthly', label: 'Monthly' },
          { value: 'yearly', label: 'Yearly' },
        ]}
        filterValue={rightFilter}
        onFilterChange={(e) => setRightFilter(e.target.value)}
      />
     </div>

     <div className="h-full">
        <BarChartComponent />
     </div>
    </div>
  );
};

export default ChartWidget;
