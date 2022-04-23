import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const LogoText = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.white,
  fontSize: '28px',
  padding: '0 0 0 35px',
}));
