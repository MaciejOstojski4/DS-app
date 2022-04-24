import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Text = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[900]
}));
