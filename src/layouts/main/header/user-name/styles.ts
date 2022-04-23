import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const UserName = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[900],
  fontSize: '20px',
}));
