import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Group = styled('section')({
  margin: '0 0 30px 0',
});

export const Title = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[900],
  fontSize: '10px',
  margin: '0 0 8px 4px',
}));

export const Wrapper = styled('div')(({ theme: { palette } }) => ({
  padding: '20px',
  borderRadius: '6px',
  backgroundColor: palette.white,
}));
