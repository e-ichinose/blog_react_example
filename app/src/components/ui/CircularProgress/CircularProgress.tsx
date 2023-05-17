import { CircularProgress as MUICircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

export const CircularProgress: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <MUICircularProgress />
    </Box>
  );
};
export default CircularProgress;
