import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Card from './Card';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  title: string;
  // labels: string[];
  // datasets: ChartDataset<'line', (number | null)[]>[];
  data: {
    date: string;
    total_amount: number;
  }[];
}

function LineChart({ title, data }: LineChartProps) {
  const labels = data.map((item) => item.date);
  const chartData = data.map((item) => item.total_amount);

  const chartConfig = {
    labels: labels,
    datasets: [
      {
        label: 'Total Amount',
        data: chartData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <Card>
      <div className='mb-2'>
        <Line
          data={chartConfig}
          options={chartOptions}
        />
      </div>
    </Card>
  );
}

export default LineChart;
