import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Card, CardHeader, CardContent } from './BarChartUi/Card'; // ShadCN Card
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './BarChartUi/Dropdown-menu-Chart'; // ShadCN DropdownMenu
import { Button } from './BarChartUi/Button'; // ShadCN Button
import { ChevronDownIcon } from 'lucide-react'; // Icon from ShadCN

// Registering ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ShadBarChart = ({ data, options, title, filterOptions, filterValue, onFilterChange }) => {
  return (
    <Card className="bg-glass backdrop-blur-lg border border-dark-gray rounded-lg">
      {/* Card Header */}
      <CardHeader className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {/* Dropdown Filter */}
        {filterOptions && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center text-white">
                {filterOptions.find(option => option.value === filterValue)?.label || "Select Filter"}
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {filterOptions.map(option => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => onFilterChange({ target: { value: option.value } })} // Mimicking native select onChange
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </CardHeader>
      {/* Card Content */}
      <CardContent>
        <div className="h-64">
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ShadBarChart;
