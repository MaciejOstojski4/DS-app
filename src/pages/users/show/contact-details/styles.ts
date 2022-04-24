import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const ContactDetails = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const DataWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  margin: '0 0 10px 0',
});

export const DataTitle = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[900],
  fontSize: '10px',
  margin: '0 10px 0 0',
}));
