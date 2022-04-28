import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { LARGE_DEVICES } from '../../../../theme/responsive-breakpoints';

interface IActivableProps {
  isActive: boolean;
}

export const ItemLink = styled(Link)<IActivableProps>(({ theme: { palette }, isActive }) => ({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: '0 0 15px 0',
  padding: '0 0 0 35px',

  '& > svg': {
    color: isActive ? palette.cyan[900] : palette.white,
    fontSize: '12px',
    margin: '0 12px 0 0',
  },

  [`@media (max-width: ${LARGE_DEVICES})`]: {
    '& > svg': {
      margin: '0',
    }
  },
}));

export const Label = styled(Typography)<IActivableProps>(({ theme: { palette }, isActive }) => ({
  color: isActive ? palette.cyan[900] : palette.white,
  fontWeight: '500',

  [`@media (max-width: ${LARGE_DEVICES})`]: {
    fontSize: '12px',
    padding: '0 0 0 5px',
  },
}));
