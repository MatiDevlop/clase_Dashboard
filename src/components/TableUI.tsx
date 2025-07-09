import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Alert } from '@mui/material';

interface TableUIProps {
  data: any;
  loading: boolean;
  error: string | null;
}

export default function TableUI({ data, loading, error }: TableUIProps) {
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!data) return null;

  // Ejemplo: mostrar las temperaturas horarias
  const hours = data.hourly?.time || [];
  const temps = data.hourly?.temperature_2m || [];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hora</TableCell>
            <TableCell>Temperatura (°C)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hours.slice(0, 24).map((hour: string, idx: number) => (
            <TableRow key={hour}>
              <TableCell>{hour}</TableCell>
              <TableCell>{temps[idx]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}