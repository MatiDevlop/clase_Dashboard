import { CircularProgress, Alert } from '@mui/material';
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

// REGISTRA los componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartUIProps {
  data: any;
  loading: boolean;
  error: string | null;
}

export default function ChartUI({ data, loading, error }: ChartUIProps) {
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!data) return null;

  const hours = data.hourly?.time?.slice(0, 24) || [];
  const temps = data.hourly?.temperature_2m?.slice(0, 24) || [];

  const chartData = {
    labels: hours,
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: temps,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}