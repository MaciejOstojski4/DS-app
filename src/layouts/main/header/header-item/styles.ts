import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const HeaderItem = styled('li')({
  margin: '0 0 0 15px',
});

export const HeaderLink = styled(Link)(({ theme: { palette } }) => ({
  '&:focus': {
    color: palette.grey[900]
  }
}));

export const HeaderText = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[900],
  fontSize: '16px',
}));
