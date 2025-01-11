import { TrendingUp } from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Import required components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ChartContainer } from "../../components/ui/chart";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Desktop",
      data: [186, 305, 237, 73, 209, 214],
      backgroundColor: "gold",
      borderRadius: 8,
      barThickness: 18, // Reduced bar thickness for taller appearance
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false, // Allows the chart container to control height
  scales: {
    x: {
      ticks: {
        autoSkip: true,
        maxRotation: 0,
        minRotation: 0,
      },
    },
    y: {
      beginAtZero: true,
       // Increased max value to stretch the chart
      ticks: {
        stepSize: 50, // Ensures increments of 50
        precision: 0,
      },
      grid: {
        color: "gray", // Gray grid lines
        lineWidth: .4,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },
  },
};

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "white",
  },
};

const BarChartComponent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <div className="chart-container" >
            <Bar data={chartData} options={chartOptions} />
          </div>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default BarChartComponent;
